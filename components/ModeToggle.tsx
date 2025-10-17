"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="p-4">
      <Button
        variant={"ghost"}
        size="icon"
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 opacity-100 transition-all dark:scale-0 dark:-rotate-90 dark:opacity-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 opacity-0 transition-all dark:scale-100 dark:rotate-0 dark:opacity-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ModeToggle;
