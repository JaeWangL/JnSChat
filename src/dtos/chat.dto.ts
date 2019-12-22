export interface GetRoomDto {
    interlocutor: GetProfileDto;
    lastMessage: string;
    lastUpdated: Date;
}

export interface GetProfileDto {
    id: number;
    name: string;
    imageUrl: string;
}

export interface GetMessageDto {
    senderId: number;
    message: string;
    sentDate: Date;
}
