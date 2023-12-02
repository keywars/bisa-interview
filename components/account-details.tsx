"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import MdiLogout from "./icons/MdiLogout";
import MdiAccount from "./icons/MdiAccount";
import MdiMonitorDashboard from "./icons/MdiMonitorDashboard";
import { signOut } from "next-auth/react";

const AccountDetails = () => {
  const router = useRouter();

  const handleLoggedOut = () => {
    signOut({ redirect: false }).then(() => {
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="user profile picture"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[156px] space-y-1.5" sideOffset={5}>
        <DropdownMenuItem onClick={() => router.push("#profile")}>
          <MdiAccount className="mr-2 w-4 h-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard")}>
          <MdiMonitorDashboard className="mr-2 w-4 h-4" />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLoggedOut}>
          <MdiLogout className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDetails;
