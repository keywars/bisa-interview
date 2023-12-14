import { cn } from "@/lib/utils";
import AuthenticationMenu from "./autentication-menu";
import Container from "./container";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import MobileMenu from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import Search from "./search";
import AccountDetails from "./account-details";
import { User } from "@/db/schema";

interface NavbarProps {
  className?: string;
  currentUser: User | null;
}

const Navbar = ({ className, currentUser }: NavbarProps) => {
  return (
    <header className={cn(`${className} sticky top-0 z-10 lg:static`)}>
      <Container>
        <div className="flex items-center space-x-10">
          <Logo />
          <NavMenu />
        </div>

        <MobileMenu />

        <div className="hidden items-center space-x-5 lg:flex">
          <div className="flex items-center space-x-1.5">
            <Search />
            <ThemeToggle />
          </div>

          {currentUser ? <AccountDetails /> : <AuthenticationMenu />}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
