import type { NavItem } from '../types/nav-items';

const Navigation = ({ navItems } : {
    navItems: NavItem[]
}) => (
    <nav className="flex flex-col gap-[4px] p-4 font-[Coinbase Sans]">
        {navItems.map(({ id, title, icon, href }) => (
            <a
                key={id}
                href={href}
                className="flex items-center gap-[16px] p-[16px] hover:bg-[var(--hover)] rounded-full transition-colors"
            >
                <span>{icon}</span>
                <span className="hidden xl:block font-medium text-[16px]">{title}</span>
            </a>
        ))}
    </nav>
);

export default Navigation;