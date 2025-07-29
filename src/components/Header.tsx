"use client";

import Link from "next/link";

import { Feather } from "lucide-react";

import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-white/80 border-b border-orange-100 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-orange-500 text-xl"
        >
          <Feather className="h-6 w-6" />
          Loreverse
        </Link>
        <nav className="flex items-center gap-6 hidden md:flex">
          <Link
            href="/#features"
            className="hover:text-orange-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#howitworks"
            className="hover:text-orange-600 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-600 transition-colors"
          >
            About
          </Link>
          {/* Optional CTA */}
          <Link href="/#input">
            <Button
              size="lg"
              className="bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
            >
              Try Now
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
