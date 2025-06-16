import { useState, useEffect } from "react";
import type { User } from "../types/user";
import Tabs from "../components/ui/Tabs";
import SocialOnboarding from "./SocialOnboarding";
import SocialFollowingView from "./SocialFollowingView";
import SocialProfileView from "./SocialProfileView";
import { getUserFromStorage, saveUserToStorage } from "../utils/userStorage";

const SocialPage = () => {
  const isUsernameSet = sessionStorage.getItem("isUsernameSet") === "true";
  const [selectedTab, setSelectedTab] = useState("Following");
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getUserFromStorage();
    
    if (storedUser) {
      setUserData(storedUser);
    } else {
      const defaultUser: User = {
        id: "1",
        username: "heeyeon",
        profilePicture: "/profile.svg",
        fullName: "Heeyon Lee",
        mostAssets: ['BTC', 'ETH', 'USDT'],
        watchlist: ['BTC'],
        following: [],
      };
      saveUserToStorage(defaultUser);
      setUserData(defaultUser);
    }
  }, []);

  if (!userData) {
    return null; // or a loading state
  }

  return (
    <div className="p-8 h-full">
      {isUsernameSet ? (
        <div className="h-full">
          <Tabs tabs={["Following", "My Profile"]} selected={selectedTab} onSelect={(tab) => {setSelectedTab(tab)}} />
          <div className="h-full">
            {
              selectedTab === "Following" ? (
                <SocialFollowingView user={userData} />
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <SocialProfileView user={userData}/>
                </div>
              )
            }
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <SocialOnboarding user={userData} />
        </div>
      )}
    </div>
  );
};

export default SocialPage;
