"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import MdiDocument from "../icons/MdiDocument";
import TablerHome from "../icons/TablerHome";
import TablerSettingsFilled from "../icons/TablerSettingsFilled";
import Logo from "../logo";

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
        isActive: pathname === "/dashboard/interviews",
        icon: MdiDocument,
      },
      {
        label: "settings",
        href: "/settings",
        isActive: pathname === "/settings",
        icon: TablerSettingsFilled,
      },
    ],
    [pathname]
  );

  return (
    <div className="w-72 flex-none border-r shadow-sm">
      <div className="flex justify-center py-3.5 border-b">
        <Logo />
      </div>

      <div className="flex flex-col pl-8 space-y-1 my-5">
        {dummyMenus.map(({ href, label, isActive, icon: Icon }, index) => (
          <Link
            key={index}
            href={href}
            className={cn(
              "px-4 py-2.5 rounded-l-md text-gray-700 hover:border-sky-500/50 hover:bg-zinc-100/50 capitalize text-sm flex items-center",
              isActive &&
                "border-r-4 border-sky-500/80 bg-zinc-100/80 font-bold text-sky-500/90"
            )}
          >
            <Icon className="inline-flex mr-2 h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
