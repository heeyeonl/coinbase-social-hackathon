import type { User } from "../types/user";
import CardContainer from "../components/CardContainer";
import { assets } from "../data";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useUser } from "../contexts/UserContext";
import { updateUser, updateUserWatchlist } from "../utils/userStorage";

const SocialProfileView = ({
  user: profileUser,
  readonly,
}: {
  user: User;
  readonly?: boolean;
}) => {
  const { user: currentUser, setUser } = useUser();

  const handleFollow = (userId: string) => {
    if (!currentUser) return;

    const isFollowing = currentUser.following.some(
      (user) => user.id === userId
    );
    const updatedFollowing = isFollowing
      ? currentUser.following.filter((user) => user.id !== userId)
      : [...currentUser.following, { id: userId } as User];

    const updatedUser = updateUser({
      following: updatedFollowing,
    } as Partial<User>);
    setUser(updatedUser);
  };

  const handleWatchlist = (assetId: string) => {
    if (!currentUser) return;

    try {
      const updatedUser = updateUserWatchlist(assetId);
      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating watchlist:", error);
    }
  };

  const isCurrentUser = profileUser.id === currentUser?.id;
  const user = isCurrentUser ? currentUser : profileUser;

  const renderWatchlistButton = (assetId: string) => {
    if (!currentUser) return null;

    const isInWatchlist = currentUser.watchlist.includes(assetId);

    return isInWatchlist ? (
      <StarIcon
        className={`w-8 h-8 text-[var(--primary)] rounded-full p-1 ${readonly ? "cursor-default" : "cursor-pointer"}`}
        onClick={(e) => {
          e.stopPropagation();
          if (!readonly) {
            handleWatchlist(assetId);
          }
        }}
      />
    ) : (
      <StarBorderIcon
        className={`w-8 h-8 text-gray-400 rounded-full p-1 ${readonly ? "cursor-default" : "cursor-pointer"}`}
        onClick={(e) => {
          e.stopPropagation();
          if (!readonly) {
            handleWatchlist(assetId);
          }
        }}
      />
    );
  };

  return (
    <div>
      <CardContainer width="w-[400px]">
        <div className="flex items-center justify-between mb-6 px-8 pt-8">
          <div className="flex items-center gap-3">
            <img
              src={user.profilePicture}
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-base font-medium">{user.fullName}</p>
              <p className="text-sm text-gray-500">@ {user.username}</p>
            </div>
          </div>
          {isCurrentUser && (
            <button className="flex items-center gap-1 px-4 py-1 rounded-full bg-[var(--ui-gray)] hover:bg-[var(--ui-gray-hover)] text-sm">
              Edit
            </button>
          )}
        </div>

        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-2 px-8">Most owned assets</p>
          <div className="flex flex-col gap-2">
            {user.mostAssets?.slice(0, 3).map((assetId) => {
              const asset = assets.find((a) => a.id === assetId);
              if (!asset) return null;
              return (
                <div
                  key={asset.id}
                  className={`flex items-center justify-between py-3 ${readonly ? "cursor-default" : "hover:bg-[var(--ui-gray)] cursor-pointer"}`}
                  onClick={() => !readonly ? window.open(asset.href, "_blank") : null}
                >
                  <div className="flex items-center gap-2 pl-8">
                    <img
                      src={asset.logo}
                      alt={asset.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{asset.name}</span>
                      <span className="text-xs text-gray-500">{asset.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 pr-8">
                    <p className="text-[var(--primary)] text-sm font-medium">
                      Buy
                    </p>
                    {renderWatchlistButton(asset.id)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!isCurrentUser && (
          <div className="w-full flex items-center justify-between px-8 pb-8">
            {currentUser?.following.some(
              (followedUser) => followedUser.id === profileUser.id
            ) ? (
              <button
                className={`w-full h-[40px] mt-4 font-[Coinbase Sans] rounded-full text-base bg-[var(--ui-gray)] text-[var(--ui-black)] ${
                  readonly
                    ? "cursor-default"
                    : "cursor-pointer hover:bg-[var(--ui-gray-hover)]"
                } font-medium`}
                onClick={() => (readonly ? null : handleFollow(profileUser.id))}
              >
                Following
              </button>
            ) : (
              <button
                className={`w-full h-[40px] mt-4 font-[Coinbase Sans] rounded-full text-base bg-[var(--primary)] text-white ${
                  readonly
                    ? "cursor-default"
                    : "cursor-pointer hover:bg-[var(--primary-hover)]"
                } font-medium`}
                onClick={() => (readonly ? null : handleFollow(profileUser.id))}
              >
                Follow
              </button>
            )}
          </div>
        )}
      </CardContainer>
    </div>
  );
};

export default SocialProfileView;
