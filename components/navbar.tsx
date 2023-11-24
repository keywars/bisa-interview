import { cn } from "@/lib/utils";
import AuthenticationMenu from "./autentication-menu";
import Container from "./container";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import MobileMenu from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={cn(`${className}`)}>
      <Container>
        <div className="flex items-center space-x-10">
          <Logo />
          <NavMenu />
        </div>

        <MobileMenu />

        <div className="hidden lg:flex items-center space-x-4">
          <div>
            <p>
              <span className="font-bold">EN</span> / ID
            </p>
          </div>
          <ThemeToggle />
          <AuthenticationMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
