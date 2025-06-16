interface SearchModalPeopleProps {
    searchValue: string;
}

const SearchModalPeople = ({ searchValue }: SearchModalPeopleProps) => {
    return <div>
        Search People: {searchValue}
    </div>
}

export default SearchModalPeople;