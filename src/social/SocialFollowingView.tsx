import { useSearch } from "../components/Layout";
import { useUser } from "../contexts/UserContext";
import { mockUsers } from "../data";
import type { User } from "../types/user";
import SocialFollowingCard from "./SocialFollowingCard";
import SocialProfileView from "./SocialProfileView";
import SearchIcon from '@mui/icons-material/Search';

const SocialFollowingView = () => {
  const { setSearchFocused } = useSearch();
  const { user: currentUser } = useUser();
  const followingUsers: User[] = mockUsers.filter((user) =>
    currentUser?.following.some((followingUser) => followingUser.id === user.id)
  );
  const handleSearchClick = () => {
    setSearchFocused(true);
  };

  const exampleUser: User = {
    id: "example",
    fullName: "Brian Armstrong",
    username: "brian_armstrong",
    profilePicture: "/avatars/brianarmstrong.png",
    watchlist: [],
    mostAssets: ['BTC', 'ETH', 'SOL'],
    following: [],
    isUsernameSet: true,
  };

  return (
    <div className="h-full">
      {followingUsers.length > 0 ? (
        <div className="flex flex-wrap gap-4 pt-8">
          {followingUsers.map((user) => {
            return (
              <SocialFollowingCard
                key={`${user.id}-${user.username}`}
                displayUser={user}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex gap-[64px] pt-16 h-full px-8">
          <div className="flex flex-col items-start pt-[100px]">
            <h2 className="text-3xl font-medium font-[Coinbase Display] mb-[18px]">
              Looks like you're not following anyone yet!
            </h2>
            <p className="text-gray-500 mb-[32px]">
              Follow someone to see their portfolio and activity.
            </p>
            <button
              onClick={handleSearchClick}
              className="h-[56px] bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-2 rounded-full mt-4"
            >
              <SearchIcon className="mr-2" />
              Search People
            </button>
          </div>
          <SocialProfileView user={exampleUser} readonly />
        </div>
      )}
    </div>
  );
};

export default SocialFollowingView;
