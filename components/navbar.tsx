import AuthenticationMenu from "./autentication-menu";
import Logo from "./logo";
import NavMenu from "./nav-menu";

const Navbar = () => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-5 px-4">
        <div className="flex items-center space-x-10">
          <Logo />
          <NavMenu />
        </div>

        <div className="flex items-center space-x-10">
          <AuthenticationMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
