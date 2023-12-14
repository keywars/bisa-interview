"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import MdiDocument from "../icons/MdiDocument";
import TablerHome from "../icons/TablerHome";
import TablerSettingsFilled from "../icons/TablerSettingsFilled";
import Logo from "../logo";
import StreamlineInterfaceTextFormattingParagraphArticleAlignmentFormattingNormalParagraphText from "../icons/StreamlineInterfaceTextFormattingParagraphArticleAlignmentFormattingNormalParagraphText";
import TablerTags from "../icons/TablerTags";

const Sidebar = () => {
  const pathname = usePathname();

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
    [pathname],
  );

  return (
    <div className="hidden w-64 flex-none border-r shadow-sm lg:block">
      <div className="flex justify-center py-3.5">
        <Logo />
      </div>

      <div className="my-5 flex flex-col space-y-1 pl-2">
        {dummyMenus.map(({ href, label, isActive, icon: Icon }, index) => (
          <Link
            key={index}
            href={href}
            aria-label={`Navigate to ${label}`}
            className={cn(
              "flex items-center rounded-l-md px-4 py-2.5 text-sm capitalize text-gray-700 transition-all duration-300 hover:border-sky-500/50 hover:bg-zinc-100/50 dark:text-gray-200",
              isActive &&
                "border-r-4 border-sky-500/80 bg-zinc-100/80 font-bold text-sky-500/90 dark:bg-zinc-800 dark:text-sky-500",
            )}
          >
            <Icon className="mr-2 inline-flex h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
