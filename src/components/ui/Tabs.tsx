import React from 'react';

interface TabProps {
  tabs: string[];
  selected: string;
  onSelect: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, selected, onSelect }) => {
  return (
    <div className="flex space-x-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className={`text-base focus:outline-none transition-colors duration-200 font-[Coinbase Sans] ${
            selected === tab
              ? 'text-[var(--primary)]'
              : 'text-black'
          }`}
          style={{ position: 'relative' }}
        >
          {tab}
          {selected === tab && (
            <div className="h-[2px] bg-[var(--primary)] w-full absolute left-0 -bottom-2" />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tab; 