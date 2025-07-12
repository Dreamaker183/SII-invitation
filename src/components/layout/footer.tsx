import { Button } from '@/components/ui/button';

const footerNavs = [
  { href: '#schedule', name: 'Schedule' },
  { href: '#speakers', name: 'Speakers' },
  { href: '#tickets', name: 'Tickets' },
];

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <a href="#" className="font-headline text-xl font-bold">
              GrindSite
            </a>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              The premier conference for startups, investors, and innovators.
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
            {footerNavs.map((item) => (
              <li key={item.name} className="text-sm font-medium">
                <a
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-between border-t pt-6 sm:flex-row">
          <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
            &copy; {new Date().getFullYear()} GrindSite. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <a href={link.href} aria-label={link.name}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
