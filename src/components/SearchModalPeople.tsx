import { mockUsers } from "../data";
import { useNavigate } from "react-router-dom";

interface SearchModalPeopleProps {
  searchValue: string;
}

const SearchModalPeople = ({ searchValue }: SearchModalPeopleProps) => {
  const navigate = useNavigate();
  
  const filteredUsers = mockUsers.filter((user) =>
    user.fullName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="max-h-[530px] flex flex-col gap-4 p-1 overflow-y-auto">
      {filteredUsers.map((user) => (
        <div key={user.id} className="flex items-center justify-between gap-4 p-2 hover:bg-[var(--ui-gray)] rounded-lg cursor-pointer"
            onClick={() => {
                navigate(`/social/profile/${user.id}`);
            }}
        >
          <div className="flex items-center gap-4">
            <img
              src={user.profilePicture}
              alt={user.fullName}
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              <p className="font-[Coinbase Display] text-[16px] font-medium">
                {user.fullName}
              </p>
              <p className="text-[14px] text-gray-500">
                {"@ " + user.username}
              </p>
            </div>
          </div>
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-1 rounded-full">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchModalPeople;
