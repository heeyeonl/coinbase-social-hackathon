import type { NavItem } from "../types/nav-items";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CoinbaseLogo from "../assets/coinbase-logo";

const Navigation = ({ navItems }: { navItems: NavItem[] }) => {
  const location = useLocation();

  return (
    <>
      <div className="flex justify-center xl:justify-start pb-[32px] w-full xl:pl-[8px] pt-[8px] cursor-pointer">
        <NavLink to="/">
            <CoinbaseLogo />
        </NavLink>
      </div>
      <nav className="flex flex-col w-full justify-center items-center xl:items-start gap-[4px] font-[Coinbase Sans]">
        {navItems.map(({ id, title, icon, iconFilled, href }) => {
          const isActive = location.pathname === href;
          return (
            <NavLink
              key={id}
              to={href || "/"}
              className={({ isActive }) => `
                                flex items-center gap-[16px] p-[16px] xl:w-full text-[16px]
                                hover:bg-[var(--hover)] rounded-full transition-colors
                                ${
                                  isActive
                                    ? "text-[var(--primary)] bg-[var(--hover)]"
                                    : "text-black"
                                }
                            `}
            >
              <span>{isActive ? iconFilled : icon}</span>
              <span className="hidden xl:block font-medium">
                {title}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
