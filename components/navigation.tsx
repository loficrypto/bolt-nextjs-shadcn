"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartSheet } from "@/components/cart-sheet";

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Nexus
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <Link href="/categories" className="hover:text-primary">
            Categories
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <CartSheet />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}