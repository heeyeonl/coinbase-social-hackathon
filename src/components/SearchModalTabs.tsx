import type { Tab } from "../types/tab";

interface SearchModalTabsProps {
    tabs: Tab[];  
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const SearchModalTabs = ({ tabs, activeTab, onTabChange }: SearchModalTabsProps) => {
  return (
    <div className="flex gap-2 pb-4 px-4">
      {tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            className={`flex justify-center items-center h-8 px-4 font-[Coinbase Sans] font-medium  cursor-pointer rounded-full
                ${activeTab === tab.id ? 'bg-[var(--ui-black)] text-white' : 'bg-[var(--ui-gray)] hover:bg-[var(--ui-gray-hover)] text-[var(--ui-black)]'}
            `}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

export default SearchModalTabs;
