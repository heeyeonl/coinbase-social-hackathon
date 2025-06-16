import type { User } from "../types/user";

const USER_STORAGE_KEY = "userData";

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

export const clearUserFromStorage = () => {
  sessionStorage.removeItem(USER_STORAGE_KEY);
};

export const isUserAuthenticated = (): boolean => {
  return getUserFromStorage() !== null;
}; 