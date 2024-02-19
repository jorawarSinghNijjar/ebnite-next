interface UserProfile{
    profileId?:string;
    user:User | null;
    name:string;
    profileImage?:string | undefined | null;
}