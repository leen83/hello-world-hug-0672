import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(60,45,30,0.35)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className={cn(
            "font-wordmark text-2xl font-700 transition-colors",
            scrolled ? "text-forest" : "text-cream",
          )}
        >
          JITHER
        </a>

        <ul
          className={cn(
            "hidden items-center gap-9 md:flex",
            scrolled ? "text-espresso" : "text-cream",
          )}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-sm tracking-wide transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={cn(
            "hidden rounded-full px-5 py-2 font-sans text-sm transition-all md:inline-block",
            scrolled
              ? "bg-forest text-cream hover:bg-forest/90"
              : "border border-cream/70 text-cream hover:bg-cream hover:text-forest",
          )}
        >
          Visit Us
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={cn("md:hidden", scrolled ? "text-forest" : "text-cream")}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-cream/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-sans text-espresso"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
