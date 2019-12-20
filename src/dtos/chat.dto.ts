export interface GetRoomDto {
    interlocutor: GetProfile;
    lastMessage: string;
    lastUpdated: Date;
}

export interface GetProfile {
    name: string;
    imageUrl: string;
}
