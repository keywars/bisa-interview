"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useReducer } from "react";
import IconParkOutlineHamburgerButton from "../icons/IconParkOutlineHamburgerButton";
import MdiDocument from "../icons/MdiDocument";
import StreamlineInterfaceTextFormattingParagraphArticleAlignmentFormattingNormalParagraphText from "../icons/StreamlineInterfaceTextFormattingParagraphArticleAlignmentFormattingNormalParagraphText";
import TablerHome from "../icons/TablerHome";
import TablerSettingsFilled from "../icons/TablerSettingsFilled";
import TablerTags from "../icons/TablerTags";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useReducer((open) => !open, false);

  const dummyMenus = useMemo(
    () => [
      {
        label: "dashboard",
        href: "/dashboard",
        isActive: pathname === "/dashboard",
        icon: TablerHome,
      },
      {
        label: "interviews",
        href: "/dashboard/interviews",
        isActive: pathname.includes("interviews"),
        icon: MdiDocument,
      },
      {
        label: "blog",
        href: "/dashboard/blog",
        isActive: pathname.includes("blog"),
        icon: StreamlineInterfaceTextFormattingParagraphArticleAlignmentFormattingNormalParagraphText,
      },
      {
        label: "tags",
        href: "/dashboard/tags",
        isActive: pathname.includes("tags"),
        icon: TablerTags,
      },
      {
        label: "settings",
        href: "#settings",
        isActive: pathname === "/settings",
        icon: TablerSettingsFilled,
      },
    ],
    [pathname]
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <IconParkOutlineHamburgerButton className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="w-full h-full">
        <div className="h-full justify-center items-center flex">
          <div className="flex flex-col space-y-3">
            {dummyMenus.map((menu, index) => (
              <Button
                key={index}
                className="text-lg capitalize"
                variant="link"
                onClick={() => {
                  router.push(menu.href);
                  setOpen();
                }}
              >
                {menu.label}
              </Button>
            ))}

            <Button
              className="text-lg capitalize"
              variant="link"
              onClick={() => {
                router.push("/");
                setOpen();
              }}
            >
              Exit
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
