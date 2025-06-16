import type { User } from "../types/user";
import { useSearch } from "../components/Layout";

const SocialFollowingView = ({ following }: { following: User[] }) => {
  const { setSearchFocused } = useSearch();

  const handleSearchClick = () => {
    setSearchFocused(true);
  };

  return (
    <div className="h-full">
      {following.length > 0 ? (
        <div>
          {following.map((user) => {
            return <div key={user.id}>{user.fullName}</div>;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center h-full">
          <h2 className="text-3xl font-medium font-[Coinbase Display] mb-[18px]">Looks like you're not following anyone yet!</h2>
          <p className="text-gray-500 mb-[32px]">Follow someone to see their portfolio and activity.</p>
          <button 
            onClick={handleSearchClick}
            className="h-[56px] bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-2 rounded-full mt-4"
          >
            Search People
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialFollowingView;
