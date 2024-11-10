"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          onClick={() => scrollToSection("hero")}
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Register"
          onClick={() => scrollToSection("register")}
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Past Events"
          onClick={() => scrollToSection("past-events")}
        />
      </Menu>
    </div>
  );
}
