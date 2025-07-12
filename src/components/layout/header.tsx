"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Highlights", href: "#stats" },
  { name: "Schedule", href: "#schedule" },
  { name: "Speakers", href: "#speakers" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Location", href: "#location" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Transition point can be adjusted, e.g., 50px from the top
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial state
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={cn(
              "size-8 transition-colors duration-300",
              isScrolled ? "" : "[&>path]:fill-white"
            )}
          >
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary-blue))'}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--primary-purple))'}} />
              </linearGradient>
            </defs>
            <path
              className={isScrolled ? "fill-[url(#logo-gradient)]" : "fill-white"}
              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm-44-36a8 8 0 0 1-8-8V80a8 8 0 0 1 16 0v92a8 8 0 0 1-8 8Zm40-32a8 8 0 0 1-8-8V96a8 8 0 0 1 16 0v60a8 8 0 0 1-8 8Zm40 24a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v84a8 8 0 0 1-8 8Z"
            ></path>
          </svg>

          <span
            className={cn(
              "font-headline text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            GrindSite
          </span>
        </a>
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors duration-300",
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-white/80"
              )}
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
              <Button
                variant="ghost"
                size="icon"
                className={cn(isScrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white")}
              >
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
