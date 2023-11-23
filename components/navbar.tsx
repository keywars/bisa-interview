import AuthenticationMenu from "./autentication-menu";
import Container from "./container";
import Logo from "./logo";
import NavMenu from "./nav-menu";

const Navbar = () => {
  return (
    <header className="absolute top-5 left-0 w-full ">
      <Container>
        <div className="flex items-center space-x-10">
          <Logo />
          <NavMenu />
        </div>

        <div className="flex items-center space-x-10">
          <AuthenticationMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
