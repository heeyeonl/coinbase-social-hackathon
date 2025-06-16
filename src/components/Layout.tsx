import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { navItems } from '../data';
import TopNavigation from './TopNavigation';

const Layout = () => {
    return (
        <div className="flex min-h-screen">
            <aside className="w-[72px] xl:w-[240px] border-r border-gray-200 p-4">
                <Navigation navItems={navItems} />
            </aside>
            <main className="flex-1 flex flex-col">
                <TopNavigation navItems={navItems}/>
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout; 