import React, { useState } from 'react';
import { Alert, ListRenderItemInfo } from 'react-native';
import {
    withStyles,
    Divider,
    Layout,
    List,
    ThemedComponentProps,
    ThemeType,
    TopNavigation,
} from '@ui-kitten/components';
import { GetRoomDto } from '../../dtos';
import { Room, RoomProps } from './components/roomItem.component';

interface ComponentProps { }

type RoomsProps = ThemedComponentProps & ComponentProps;

const RoomsComponent = (props: RoomsProps): React.ReactElement => {
    const { themedStyle } = props;
    /* eslint-disable max-len */
    const [rooms, setRooms] = useState<GetRoomDto[]>([
        {
            interlocutor: {
                name: 'First',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'First Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                name: 'Second',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Second Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                name: 'Third',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Third Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                name: 'Fourth',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Fourth Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                name: 'Fifth',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Fifth Meesage',
            lastUpdated: new Date(),
        },
    ]);
    /* eslint-enable max-len */

    const onRoomPress = (room: GetRoomDto): void => {
        Alert.alert('Info', room.lastMessage);
    };

    const renderItem = (info: ListRenderItemInfo<GetRoomDto>): React.ReactElement<RoomProps> => (
        <Room
            // eslint-disable-next-line react/prop-types
            style={themedStyle.item}
            room={info.item}
            onItemPress={onRoomPress}
        />
    );

    return (
        <Layout style={themedStyle.container}>
            <TopNavigation title="Chats" alignment="center" />
            <Divider />
            <List
                data={rooms}
                renderItem={renderItem}
            />
        </Layout>
    );
};

export const RoomsScreen = withStyles(RoomsComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
}));
