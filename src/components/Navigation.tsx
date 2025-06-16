import type { NavItem } from "../types/nav-items";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CoinbaseLogo from "../assets/coinbase-logo";

const Navigation = ({ navItems }: { navItems: NavItem[] }) => {
  const location = useLocation();

  return (
    <>
      <div className="flex justify-center xl:justify-start pb-8 w-full xl:pl-2 pt-2 cursor-pointer">
        <NavLink to="/">
            <CoinbaseLogo />
        </NavLink>
      </div>
      <nav className="flex flex-col w-full justify-center items-center xl:items-start gap-1 font-[Coinbase Sans]">
        {navItems.map(({ id, title, icon, iconFilled, href, isNew }) => {
          const isActive = location.pathname === href;
          return (
            <NavLink
              key={id}
              to={href || "/"}
              className={({ isActive }) => `
                                flex items-center justify-between  gap-4 p-4 xl:w-full text-base
                                hover:bg-[var(--hover)] rounded-full transition-colors
                                ${
                                  isActive
                                    ? "text-[var(--primary)] bg-[var(--hover)]"
                                    : "text-black"
                                }
                            `}
            >
              <div className="flex items-center gap-4">
                <span>{isActive ? iconFilled : icon}</span>
                <span className="hidden xl:block font-medium">
                  {title}
                </span>
              </div>
              {isNew && <span className="hidden xl:block bg-[var(--primary)] text-white text-[10px] px-[8px] rounded-full">New</span>}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
