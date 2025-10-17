import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

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
  return (
    <div>
      <NavigationMenu className="p-5">
        <NavigationMenuList>
          {navItems.map((item) => NavbarItem(item.title, item.href))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const NavbarItem = (title: string, href: string) => {
  return (
    <NavigationMenuItem key={href}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="p-1 hover:underline hover:underline-offset-4"
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default Navbar;
