import React, { useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
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
import { Room, RoomProps } from './components/room.component';

interface ComponentProps { }

type RoomsProps = NavigationStackScreenProps & ThemedComponentProps & ComponentProps;

const RoomsComponent = (props: RoomsProps): React.ReactElement => {
    const { navigation, themedStyle } = props;
    /* eslint-disable max-len */
    const [rooms, setRooms] = useState<GetRoomDto[]>([
        {
            interlocutor: {
                id: 2,
                name: 'First',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'First Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                id: 3,
                name: 'Second',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Second Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                id: 4,
                name: 'Third',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Third Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                id: 5,
                name: 'Fourth',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Fourth Meesage',
            lastUpdated: new Date(),
        },
        {
            interlocutor: {
                id: 6,
                name: 'Fifth',
                imageUrl: 'https://static01.nyt.com/images/2014/02/20/business/20CORNER/20CORNER-superJumbo-v2.jpg?quality=90&auto=webp',
            },
            lastMessage: 'Fifth Meesage',
            lastUpdated: new Date(),
        },
    ]);
    /* eslint-enable max-len */

    const onRoomPress = (room: GetRoomDto): void => {
        navigation.navigate('ChatRoom', {
            interlocutor: room.interlocutor,
        });
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
