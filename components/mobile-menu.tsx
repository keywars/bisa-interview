"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import IconParkOutlineHamburgerButton from "./icons/IconParkOutlineHamburgerButton";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <ThemeToggle />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <IconParkOutlineHamburgerButton className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="h-screen w-screen flex flex-col justify-between items-center"
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

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="ghost"
              onClick={() => {
                router.push("/signin");
                setOpen((open) => false);
              }}
            >
              Log in
            </Button>
            <Button
              onClick={() => {
                router.push("/signup");
                setOpen((open) => false);
              }}
              className="bg-sky-600 hover:bg-sky-500"
            >
              Create Account
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
