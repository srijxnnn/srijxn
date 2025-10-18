"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => NavbarItem(item.title, item.href, pathname))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const NavbarItem = (title: string, href: string, pathname: string) => {
  const isActive = pathname === href;

  return (
    <NavigationMenuItem key={href}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <Button
            variant={"ghost"}
            className={cn(
              "rounded-full px-3 md:px-4",
              isActive && "bg-accent text-accent-foreground"
            )}
          >
            {title}
          </Button>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default Navbar;
