# GrindSite - Startup Grind Conference 2025

Welcome to the official repository for the GrindSite conference website. This is a modern, interactive, and AI-enhanced single-page application designed to provide an exceptional user experience for conference attendees.

The live demo showcases a feature-rich platform for exploring event details, speakers, schedules, and even generating a personalized agenda using AI.

## ✨ Features

- **Fully Responsive Design:** Optimized for a seamless experience on desktops, tablets, and mobile devices.
- **Interactive UI/UX:** Engaging, animated sections like the "bookshelf" style event highlights and a dynamic schedule view.
- **AI-Powered Agenda:** A cutting-edge feature allowing users to generate a personalized conference schedule based on their interests using Google's Gemini model via Genkit.
- **Modern & Professional Aesthetics:** A sleek and clean design built with Tailwind CSS and ShadCN UI components.
- **Component-Based Architecture:** Built with reusable React components for maintainability and scalability.

## 🛠️ Tech Stack

This project is built with a modern, production-ready tech stack:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/grindsite.git
    cd grindsite
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of your project and add your Google AI API key. You can obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```env
    GOOGLE_API_KEY=YOUR_API_KEY
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── src
│   ├── app/                # Main application pages and layout
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Header, Footer, etc.
│   │   ├── sections/       # Major sections of the landing page
│   │   └── ui/             # ShadCN UI components
│   ├── ai/                 # Genkit AI flows and configuration
│   │   ├── flows/          # AI logic for features like agenda generation
│   │   └── genkit.ts       # Genkit initialization
│   ├── lib/                # Utility functions
│   └── hooks/              # Custom React hooks
├── public/                 # Static assets like images and fonts
└── ...                     # Configuration files
```

This project was bootstrapped with [Firebase Studio](https://firebase.google.com/studio).
