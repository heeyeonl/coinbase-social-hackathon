import type { User } from "../types/user";

const USER_STORAGE_KEY = "userData";
const USERNAME_SET_KEY = "isUsernameSet";

const DEFAULT_USER: User = {
  id: "hl",
  username: "heeyeon",
  profilePicture: "/profile.svg",
  fullName: "Heeyon Lee",
  mostAssets: ["BTC", "ETH", "USDT"],
  watchlist: ["BTC"],
  following: [],
  isUsernameSet: false
};

export const saveUserToStorage = (userData: User) => {
  sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
};

export const getUserFromStorage = (): User | null => {
  const userData = sessionStorage.getItem(USER_STORAGE_KEY);
  if (!userData) return null;
  try {
    return JSON.parse(userData) as User;
  } catch (error) {
    console.error("Error parsing user data from storage:", error);
    return null;
  }
};

export const updateUser = (updates: Partial<User>): User => {
  const currentUser = getUserFromStorage() || DEFAULT_USER;
  const updatedUser = { 
    ...currentUser, 
    ...updates,
    isUsernameSet: updates.username ? true : currentUser.isUsernameSet 
  };
  saveUserToStorage(updatedUser);
  
  // If username is being set, update the username set flag
  if (updates.username) {
    sessionStorage.setItem(USERNAME_SET_KEY, "true");
  }
  
  return updatedUser;
};

export const clearUserFromStorage = () => {
  sessionStorage.removeItem(USER_STORAGE_KEY);
  sessionStorage.removeItem(USERNAME_SET_KEY);
};

export const isUserAuthenticated = (): boolean => {
  return getUserFromStorage() !== null;
};

export const isUsernameSet = (): boolean => {
  return sessionStorage.getItem(USERNAME_SET_KEY) === "true";
};

export const initializeUserIfNeeded = (): User => {
  const storedUser = getUserFromStorage();
  if (storedUser) {
    return storedUser;
  }
  
  saveUserToStorage(DEFAULT_USER);
  return DEFAULT_USER;
};

export const updateUserWatchlist = (assetId: string): User => {
  const currentUser = getUserFromStorage();
  if (!currentUser) {
    throw new Error("No user found in storage");
  }

  const updatedWatchlist = currentUser.watchlist.includes(assetId)
    ? currentUser.watchlist.filter(id => id !== assetId)
    : [...currentUser.watchlist, assetId];

  return updateUser({ watchlist: updatedWatchlist });
}; 