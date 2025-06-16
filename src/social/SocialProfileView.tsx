import { useState, useEffect } from "react";
import type { User } from "../types/user";
import CardContainer from "../components/CardContainer";
import { assets } from "../data";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Switch from "@mui/material/Switch";
import { useUser } from "../contexts/UserContext";
import { updateUserWatchlist } from "../utils/userStorage";

const STORAGE_KEY = "socialProfilePrivacy";

const SocialProfileView = ({ user: profileUser }: { user: User }) => {
  const { user: currentUser, setUser } = useUser();
  const [isPrivate, setIsPrivate] = useState(() => {
    if (profileUser.id === currentUser?.id) {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : true;
    }
    return true;
  });

  useEffect(() => {
    if (profileUser.id === currentUser?.id) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(isPrivate));
    }
  }, [isPrivate, profileUser.id, currentUser?.id]);

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
        className="w-8 h-8 text-[var(--primary)] rounded-full p-1 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleWatchlist(assetId);
        }}
      />
    ) : (
      <StarBorderIcon
        className="w-8 h-8 text-gray-400 rounded-full p-1 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleWatchlist(assetId);
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
                  className="flex items-center justify-between py-3 hover:bg-[var(--hover)] cursor-pointer"
                  onClick={() => window.open(asset.href, "_blank")}
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

        {isCurrentUser && (
          <div className="flex items-center justify-between px-8 pb-8">
            <div className="flex items-center gap-1">
              <span className="font-medium">Private</span>
              <span
                className="text-gray-400 cursor-pointer"
                title="Only you can see your profile when private"
              >
                ?
              </span>
            </div>
            <Switch
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
              color="primary"
            />
          </div>
        )}
      </CardContainer>
    </div>
  );
};

export default SocialProfileView;
