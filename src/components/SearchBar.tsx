import { useState, useRef, useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const searchBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        };

        if (isFocused) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isFocused]);

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
                    relative z-50 flex items-center justify-start h-[40px] rounded-full bg-[#EEF0F3] px-4 gap-4
                    transition-all duration-300 ease-in-out border hover:bg-[#dcdee1] cursor-pointer
                    ${isFocused ? 'w-[620px] border-[var(--primary)] border-2' : 'w-[320px] border-transparent'}
                `}
            >
                <SearchOutlinedIcon className={isFocused ? 'text-[var(--primary)]' : 'text-[var(--black)]'} />
                <input 
                    type="search"
                    placeholder="Search"
                    className="flex-grow bg-transparent border-none outline-none text-[14px] placeholder-gray-500 cursor-pointer"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </>
    );
};

export default SearchBar;