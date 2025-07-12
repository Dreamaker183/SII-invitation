// src/ai/flows/personalized-agenda.ts
'use server';

/**
 * @fileOverview Generates a personalized conference agenda based on user interests.
 *
 * - generatePersonalizedAgenda - A function that generates a personalized conference agenda.
 * - PersonalizedAgendaInput - The input type for the generatePersonalizedAgenda function.
 * - PersonalizedAgendaOutput - The return type for the generatePersonalizedAgenda function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConferenceSessionSchema = z.object({
  title: z.string().describe('The title of the session.'),
  description: z.string().describe('A brief description of the session.'),
  speaker: z.string().describe('The speaker for the session.'),
  time: z.string().describe('The time of the session.'),
  location: z.string().describe('The location of the session.'),
  interests: z.array(z.string()).describe('List of interests/topics covered in the session'),
});

const PersonalizedAgendaInputSchema = z.object({
  interests: z
    .array(z.string())
    .describe('A list of the user interests for the conference.'),
  conferenceSessions: z.array(ConferenceSessionSchema).describe('A list of all conference sessions with their details.'),
});

export type PersonalizedAgendaInput = z.infer<typeof PersonalizedAgendaInputSchema>;

const PersonalizedAgendaOutputSchema = z.object({
  agenda: z.array(ConferenceSessionSchema).describe('A personalized agenda of conference sessions based on the user interests.'),
});

export type PersonalizedAgendaOutput = z.infer<typeof PersonalizedAgendaOutputSchema>;

export async function generatePersonalizedAgenda(input: PersonalizedAgendaInput): Promise<PersonalizedAgendaOutput> {
  return personalizedAgendaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedAgendaPrompt',
  input: {schema: PersonalizedAgendaInputSchema},
  output: {schema: PersonalizedAgendaOutputSchema},
  prompt: `You are an AI assistant helping conference attendees generate a personalized agenda based on their interests.

  Given the attendee's interests, select the most relevant sessions from the list of conference sessions provided.

  Attendee Interests:
  {{#each interests}}- {{this}}\n{{/each}}

  Conference Sessions:
  {{#each conferenceSessions}}
  - Title: {{this.title}}
    Description: {{this.description}}
    Speaker: {{this.speaker}}
    Time: {{this.time}}
    Location: {{this.location}}
    Interests: {{#each this.interests}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
  {{/each}}

  Create a personalized agenda containing only the sessions that match the attendee's interests.
  Ensure that the personalized agenda is well-organized and includes all relevant details for each session.
  `, // Ensure to return in the schema defined in PersonalizedAgendaOutputSchema
});

const personalizedAgendaFlow = ai.defineFlow(
  {
    name: 'personalizedAgendaFlow',
    inputSchema: PersonalizedAgendaInputSchema,
    outputSchema: PersonalizedAgendaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
