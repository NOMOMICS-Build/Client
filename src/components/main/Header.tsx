import { navLinks } from "@/constants/data";
import { useMenuStore } from "@/store";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="bg-secondary/90 backdrop-blur-sm sticky top-0 z-50">
        <nav className="main grid md:grid-cols-3 grid-cols-2 md:h-[95px] h-[70px] items-center">
          <a href="/">
            <img src="/logo.svg" alt="logo" width={150} height={150} />
          </a>
          <ul className="hidden md:flex items-center justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({isActive}) => isActive ? "text-white text-nowrap border-b-2 border-primary transition-all duration-300" : "text-white text-nowrap border-b-2 border-transparent hover:border-primary transition-all duration-300"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-4">
            <UserControl isMenuOpen={isMenuOpen} />

            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
             {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>{isMenuOpen && <MobileMenu />}</AnimatePresence>
    </>
  );
};

export default Header;

const UserControl = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const user = false;
  return (
    <>
      {user && (
        <div className="flex items-center gap-2">
          <div className="center h-12 w-12 bg-primary rounded-full text-main font-bold text-lg">
            GJ
          </div>
          <ChevronDown className="text-white hidden md:block" />
        </div>
      )}

      {!user && (
        <div className="flex items-center gap-2">
          <Link
            to="/auth/login"
            className="px-4 py-2 text-white hidden md:block"
          >
            Login
          </Link>
          {!isMenuOpen && (
            <Link
              to="/auth/type"
              className="btn-primary btn h-10 rounded-lg px-4 text-nowrap"
            >
              Sign Up <ChevronRight size={18} />
            </Link>
          )}
        </div>
      )}
    </>
  );
};
