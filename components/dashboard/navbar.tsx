import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import MdiLogout from "../icons/MdiLogout";
import Logo from "../logo";
import { buttonVariants } from "../ui/button";
import MobileMenu from "./mobile-menu";
import Search from "./search";

const Navbar = () => {
  return (
    <div className="border-b py-2 px-3 lg:px-10 shadow-sm sticky">
      <div className="flex justify-between items-center">
        <div>
          <form role="search" className="hidden lg:block">
            <Search />
          </form>
          <div className="lg:hidden">
            <Logo />
          </div>
        </div>
        <div>
          <MobileMenu />
          <div className="items-center space-x-3 hidden lg:flex">
            {/* <ThemeToggle /> */}
            <Link
              href="/"
              aria-label="Go back to home page"
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className: "hidden lg:flex dark:text-violet-500",
              })}
            >
              <MdiLogout className="w-5 h-5 mr-1" />
              Exit
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-2">
                <DropdownMenuItem>
                  <MdiLogout className="mr-2 w-4 h-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
