export type User = {
    id: string;
    fullName: string;
    watchlist: string[];
    mostAssets: string[];
    username?: string;
    profilePicture?: string;
    following: User[];
    isUsernameSet: boolean;
}