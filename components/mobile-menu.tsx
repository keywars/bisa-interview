"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IconParkOutlineHamburgerButton from "./icons/IconParkOutlineHamburgerButton";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <IconParkOutlineHamburgerButton className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-screen w-screen flex justify-center items-center"
      >
        <NavigationMenu>
          <NavigationMenuList className="flex-col space-y-2 text-center">
            <NavigationMenuItem className="w-full">
              <Button
                className={cn("w-full", pathname === "/" && "text-sky-600")}
                variant="ghost"
                onClick={() => {
                  router.push("/");
                  setOpen((open) => false);
                }}
              >
                Home
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full">
              <Button
                className={cn("w-full")}
                variant="ghost"
                onClick={() => {
                  router.push("#collections");
                  setOpen((open) => false);
                }}
              >
                Collections
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full">
              <Button
                className={cn("w-full")}
                variant="ghost"
                onClick={() => {
                  router.push("#news");
                  setOpen((open) => false);
                }}
              >
                News
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full">
              <Button
                className={cn("w-full")}
                variant="ghost"
                onClick={() => {
                  router.push("#developer");
                  setOpen((open) => false);
                }}
              >
                Developer
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
