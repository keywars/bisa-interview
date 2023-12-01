import { cn } from "@/lib/utils";
import AuthenticationMenu from "./autentication-menu";
import Container from "./container";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import MobileMenu from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import Search from "./search";
import AccountDetails from "./account-details";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const isAuth = false;

  return (
    <header className={cn(`${className} sticky top-0 z-10 lg:static`)}>
      <Container>
        <div className="flex items-center space-x-10">
          <Logo />
          <NavMenu />
        </div>

        <MobileMenu />

        <div className="hidden lg:flex items-center space-x-5">
          <div className="flex items-center space-x-1.5">
            <Search />
            <ThemeToggle />
          </div>

          {isAuth ? <AccountDetails /> : <AuthenticationMenu />}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
