import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchModal from './SearchModal';

interface SearchBarProps {
    forceFocus?: boolean;
    onFocusChange?: (isFocused: boolean) => void;
}

const SearchBar = ({ forceFocus, onFocusChange }: SearchBarProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const isModalOpen = isFocused;
    const searchBarRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const location = useLocation();
    const defaultTab = location.pathname === '/social' || location.pathname.startsWith('/social/profile/') ? 'people' : 'crypto';

    useEffect(() => {
        if (forceFocus !== undefined) {
            setIsFocused(forceFocus);
            onFocusChange?.(forceFocus);
            
            if (forceFocus && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [forceFocus, onFocusChange]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchBarRef.current?.contains(event.target as Node) || 
                modalRef.current?.contains(event.target as Node)) {
                return;
            }
            setIsFocused(false);
            onFocusChange?.(false);
        };

        if (isFocused) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (isFocused) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [isFocused, onFocusChange]);

    const handleFocus = () => {
        setIsFocused(true);
        onFocusChange?.(true);
    };

    const handleUserSelect = () => {
        setIsFocused(false);
        setSearchValue('');
        onFocusChange?.(false);
    };

    return (
        <>
            {isFocused && (
                <div 
                    className="fixed inset-0 bg-black/20 z-40"
                />
            )}
            <div 
                ref={searchBarRef}
                className={`
                    relative z-50 flex items-center justify-start h-[40px] rounded-full bg-[var(--ui-gray)] px-4 gap-4
                    transition-all duration-300 ease-in-out border hover:bg-[var(--ui-gray-hover)] cursor-pointer
                    ${isFocused ? 'w-[620px] border-[var(--primary)] border-2' : 'w-[320px] border-transparent'}
                `}
            >
                <SearchOutlinedIcon className={isFocused ? 'text-[var(--primary)]' : 'text-[var(--black)]'} />
                <input 
                    ref={inputRef}
                    type="search"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="flex-grow bg-transparent border-none outline-none text-[14px] placeholder-gray-500 cursor-text"
                    onFocus={handleFocus}
                />
            </div>
            {
                isModalOpen && 
                <div ref={modalRef} className="absolute z-50 top-[72px]">
                    <SearchModal 
                        searchValue={searchValue} 
                        defaultTab={defaultTab} 
                        onUserSelect={handleUserSelect}
                    />
                </div>
            }
        </>
    );
};

export default SearchBar;