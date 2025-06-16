import { useState } from 'react';
import SearchModalTabs from "./SearchModalTabs";
import type { Tab } from "../types/tab";
import SearchModalPeople from './SearchModalPeople';

const SearchModal = () => {
    const [activeTab, setActiveTab] = useState<string>('crypto');
    
    const tabs: Tab[] = [
        {
            id: 'crypto',
            name: 'Crypto',
            src: '/search-modal-crypto.png',
        },
        {
            id: 'futures',
            name: 'Futures',
            src: '/search-modal-futures.png'
        },
        {
            id: 'perpetuals',
            name: 'Perpetuals',
            src: '/search-modal-perpetuals.png'
        },
        {
            id: 'people',
            name: 'People'
        }
    ];

    const renderContent = (tab: Tab) => {
        if (tab.src) {
            return (
                <div className="p-4">
                    <img 
                        src={tab.src} 
                        alt={`${tab.name} search results`}
                        className="w-full h-full object-cover"
                    />
                </div>
            );
        }
        
        if (tab.id === 'people') {
            return (
                <div className="p-4">
                    <SearchModalPeople />
                </div>
            );
        }

        return null;
    };

    return (
        <div className="w-[620px] h-[630px] rounded-2xl bg-[#fff] border border-gray-200 overflow-hidden pt-4">
            <div className="border-b-[1px]">
                <SearchModalTabs 
                    tabs={tabs} 
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </div>
            <div className="transition-opacity duration-200">
                {tabs.map(tab => (
                    <div 
                        key={tab.id}
                        className={`
                            transition-all duration-200
                            ${activeTab === tab.id ? 'opacity-100 block' : 'opacity-0 hidden'}
                        `}
                    >
                        {renderContent(tab)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchModal;