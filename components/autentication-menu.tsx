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
        <NavigationMenuList className="flex space-x-1.5">
          <NavigationMenuItem>
            <Link
              href="/signin"
              legacyBehavior
              passHref
              aria-label="Go to sign-in page"
            >
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === "/signin" && "font-black",
                )}
              >
                Log in
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <Link
              href="/registration"
              legacyBehavior
              passHref
              aria-label="Go to sign-up page"
            >
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-sky-600 text-white font-bold hover:bg-sky-400 hover:text-gray-100",
                  pathname === "/registration" && "font-black"
                )}
              >
                Create Account
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default AuthenticationMenu;
