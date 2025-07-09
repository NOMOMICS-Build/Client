import { navLinks } from "@/constants/data";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-secondary sticky top-0 z-50">
        <nav className="main grid md:grid-cols-3 grid-cols-2 md:h-[95px] h-[70px] items-center">
          <a href="/">
            <img src="/logo.png" alt="logo" />
          </a>
          <ul className="hidden md:flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-white text-nowrap border-b-2 border-transparent hover:border-primary transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-4">
            <UserControl />

            <div className="md:hidden cursor-pointer">
              <Menu className="text-white" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

const UserControl = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="center h-12 w-12 bg-primary rounded-full text-main font-bold text-lg">
        GJ
      </div>
      <ChevronDown className="text-white hidden md:block" />
    </div>
  );
};
