import { useState } from "react";
import type { User } from "../types/user";
import Tabs from "../components/ui/Tabs";
import SocialOnboarding from "./SocialOnboarding";
import SocialFollowingView from "./SocialFollowingView";
import SocialProfileView from "./SocialProfileView";
import { useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { isUsernameSet } from "../utils/userStorage";

const SocialPage = ({user: profileUser}: {user: User}) => {
  const location = useLocation();
  const isViewingProfile = location.pathname.startsWith('/social/profile/');
  const [selectedTab, setSelectedTab] = useState<
    "Following" | "My Profile" | "Viewing"
  >(isViewingProfile ? "Viewing" : "Following");
  const { user: currentUser } = useUser();

  if (!currentUser) {
    return null;
  }

  return (
    <div className="p-8 h-full">
      {isUsernameSet() ? (
        <div className="h-full">
          {!isViewingProfile && (
            <Tabs
              tabs={["Following", "My Profile"]}
              selected={selectedTab}
              onSelect={(tab) => {
                setSelectedTab(tab as "Following" | "My Profile");
              }}
            />
          )}
          {isViewingProfile ? (
            <div className="flex flex-col items-center justify-center h-full">
              <SocialProfileView user={profileUser} />
            </div>
          ) : selectedTab === "Following" ? (
            <SocialFollowingView />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <SocialProfileView user={currentUser} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <SocialOnboarding />
        </div>
      )}
    </div>
  );
};

export default SocialPage;
