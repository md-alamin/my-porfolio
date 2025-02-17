import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#ff00ff]/20 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/">
          <a className="text-2xl font-bold text-[#F5F5F5] relative group">
            Al-Amin
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5F5F5]/50 group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </a>
        </Link>

        <div className="hidden md:flex gap-2 ml-auto items-center">
          {navItems.map((item, index) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              className="relative group text-[#F5F5F5]/80 hover:text-[#F5F5F5]/80 transition-colors duration-300"
              asChild
            >
              <a href={item.href}>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F5F5F5]/50 to-[#F5F5F5]/50 group-hover:w-full transition-all duration-300" />
              </a>
            </Button>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}