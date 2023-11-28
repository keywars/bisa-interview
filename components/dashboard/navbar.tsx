import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MdiLogout from "../icons/MdiLogout";
import { ThemeToggle } from "../theme-toggle";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div className="border-b py-2 px-10 shadow-sm">
      <div className="flex justify-between items-center">
        <form role="search">
          <Input
            type="search"
            name="search"
            placeholder="Search..."
            className="h-9 placeholder:text-sm w-[264px] focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
          />
        </form>
        <div className="flex items-center space-x-5">
          <ThemeToggle />
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
  );
};

export default Navbar;
