import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";

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
      <NavigationMenu>
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
        <Button variant={"ghost"} className="rounded-full px-3 md:px-4">
          <Link href={href}>{title}</Link>
        </Button>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default Navbar;
