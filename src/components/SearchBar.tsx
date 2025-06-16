import { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div 
            className={`
                flex items-center justify-start h-[40px] rounded-full bg-[#EEF0F3] px-[16px] gap-[16px]
                transition-all duration-300 ease-in-out border hover:bg-[#dcdee1] cursor-pointer
                ${isFocused ? 'w-[620px] border-[var(--primary)] border-[2px]' : 'w-[320px] border-transparent'}
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
    );
};

export default SearchBar;