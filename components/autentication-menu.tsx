"use client";

import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AuthenticationMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="space-x-1.5 flex">
          <NavigationMenuItem>
            <Link href="/signin" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === "/signin" && "font-black"
                )}
              >
                Log in
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/signup" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-sky-600 text-white font-bold hover:bg-sky-400 hover:text-gray-100",
                  pathname === "/signup" && "font-black"
                )}
              >
                Create Account
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default AuthenticationMenu;
