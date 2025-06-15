import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { navItems } from '../data';

const Layout = () => {
    return (
        <div className="flex min-h-screen">
            <aside className="w-[72px] xl:w-[240px] border-r border-gray-200 p-[16px]">
                <Navigation navItems={navItems} />
            </aside>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout; 