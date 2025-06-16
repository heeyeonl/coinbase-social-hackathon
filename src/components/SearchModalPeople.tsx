import { mockUsers } from "../data";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import type { User } from "../types/user";
import { updateUser } from "../utils/userStorage";

interface SearchModalPeopleProps {
  searchValue: string;
  onUserSelect?: () => void;
}

const SearchModalPeople = ({ searchValue, onUserSelect }: SearchModalPeopleProps) => {
  const navigate = useNavigate();
  const { user: currentUser, setUser } = useUser();

  const filteredUsers = mockUsers.filter((user) =>
    user.fullName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleUserClick = (userId: string) => {
    navigate(`/social/profile/${userId}`);
    onUserSelect?.();
  };

  const handleFollow = (e: React.MouseEvent<HTMLButtonElement>, userId: string) => {
    e.stopPropagation();
    if (!currentUser) return;

    const isFollowing = currentUser.following.some(user => user.id === userId); 
    const updatedFollowing = isFollowing
      ? currentUser.following.filter(user => user.id !== userId)
      : [...currentUser.following, { id: userId } as User];

    const updatedUser = updateUser({ following: updatedFollowing } as Partial<User>);
    setUser(updatedUser);
    onUserSelect?.();
  };

  return (
    <div className="max-h-[530px] flex flex-col gap-4 p-1 overflow-y-auto">
      {filteredUsers.map((user) => (
        <div key={user.id} className="flex items-center justify-between gap-4 p-2 hover:bg-[var(--ui-gray)] rounded-lg cursor-pointer"
            onClick={() => handleUserClick(user.id)}
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
          {
            currentUser?.following.some(
              (followedUser) => followedUser.id === user.id
            ) ? (
              <button className="bg-[var(--ui-gray)] hover:bg-[var(--ui-gray-hover)] text-[var(--ui-black)] px-4 py-1 rounded-full" onClick={(e) => handleFollow(e, user.id)}>
                Following
              </button>
            ) : (
              <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-1 rounded-full" onClick={(e) => handleFollow(e, user.id)}>
                Follow
              </button>
            )
          }
        </div>
      ))}
    </div>
  );
};

export default SearchModalPeople;
