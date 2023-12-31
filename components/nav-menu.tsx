"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="space-x-3">
        <NavigationMenuItem>
          <Link
            href="/"
            legacyBehavior
            passHref
            aria-label="Go to the home page"
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/" && "font-black text-sky-500"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/collections" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/collections" && "font-black text-sky-500"
              )}
            >
              Collections
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="/blog"
            legacyBehavior
            passHref
            aria-label="Go to the blog page"
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === "/blog" && "font-black text-sky-500"
              )}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger disabled>Developers</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
