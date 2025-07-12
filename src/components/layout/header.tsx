"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Schedule", href: "#schedule" },
  { name: "Speakers", href: "#speakers" },
  { name: "Tickets", href: "#tickets" },
  { name: "Location", href: "#location" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-primary"
          >
            <path d="M14.25 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0v-18a.75.75 0 0 1 .75-.75Zm-4.5 0a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0v-18a.75.75 0 0 1 .75-.75Zm-4.5 0a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0v-18a.75.75 0 0 1 .75-.75Zm13.5 0a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0v-18a.75.75 0 0 1 .75-.75Z" />
          </svg>

          <span className="font-headline text-2xl font-bold text-foreground">
            GrindSite
          </span>
        </a>
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden items-center space-x-4 md:flex">
          <Button>Register Now</Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-headline text-2xl">
                  GrindSite
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleMobileMenuClick}
                    className="rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-muted"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="mt-4 w-full">Register Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
