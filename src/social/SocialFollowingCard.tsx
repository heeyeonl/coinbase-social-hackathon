import type { User } from "../types/user";
import { assets } from "../data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const SocialFollowingCard = ({ displayUser }: { displayUser: User }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[275px] flex flex-col gap-4 bg-[var(--ui-gray)] hover:bg-[var(--ui-gray-hover)] cursor-pointer rounded-lg p-4"
      onClick={() => navigate(`/social/profile/${displayUser.id}`)}
    >
      <div className="flex items-center gap-2">
        <img
          src={displayUser.profilePicture}
          alt={displayUser.fullName}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium font-[Coinbase Display]">
            {displayUser.fullName}
          </p>
          <p className="text-sm text-gray-500 font-[Coinbase Sans]">
            @ {displayUser.username}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {displayUser.mostAssets.map((asset) => {
            const assetData = assets.find((a) => a.id === asset);
            if (!assetData) return null;
            return (
              <img
                key={assetData.id}
                src={assetData.logo}
                alt={assetData.name}
                className="w-8 h-8 rounded-full"
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-[var(--ui-gray)]" onClick={(e) => {
          e.stopPropagation();
          navigate(`/social/profile/${displayUser.id}`);
        }}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default SocialFollowingCard;
