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
    <div className="sticky border-b px-3 py-2 shadow-sm lg:px-10">
      <div className="flex items-center justify-between">
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
          <div className="hidden items-center space-x-3 lg:flex">
            {/* <ThemeToggle /> */}
            <Link
              href="/"
              aria-label="Go back to home page"
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className: "hidden dark:text-violet-500 lg:flex",
              })}
            >
              <MdiLogout className="mr-1 h-5 w-5" />
              Exit
            </Link>
            {/* <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-2">
                <DropdownMenuItem>
                  <MdiLogout className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
