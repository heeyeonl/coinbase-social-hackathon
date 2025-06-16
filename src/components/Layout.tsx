import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { navItems } from '../data';
import TopNavigation from './TopNavigation';
import { createContext, useContext, useState } from 'react';

interface SearchContextType {
    setSearchFocused: (focused: boolean) => void;
}

export const SearchContext = createContext<SearchContextType>({
    setSearchFocused: () => {},
});

export const useSearch = () => useContext(SearchContext);

const Layout = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <SearchContext.Provider value={{ setSearchFocused: setIsSearchFocused }}>
            <div className="flex min-h-screen">
                <aside className="w-[72px] xl:w-[240px] border-r border-gray-200 p-4">
                    <Navigation navItems={navItems} />
                </aside>
                <main className="flex-1 flex flex-col">
                    <TopNavigation navItems={navItems} isSearchFocused={isSearchFocused} onSearchFocusChange={setIsSearchFocused}/>
                    <div className="flex-1 overflow-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </SearchContext.Provider>
    );
};

export default Layout; 