import Moment from 'moment';
import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import {
    withStyles,
    Avatar,
    Text,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import { textStyles } from '../../../components';
import { GetRoomDto } from '../../../dtos';

interface ComponentProps {
    room: GetRoomDto;
    onItemPress: (room: GetRoomDto) => void;
}

export type RoomProps = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

const RoomComponent = (props: RoomProps): React.ReactElement => {
    const { themedStyle, style, room } = props;

    const onItemPress = (): void => {
        props.onItemPress(props.room);
    };

    return (
        <TouchableOpacity
            activeOpacity={0.95}
            style={[themedStyle.container, style]}
            onPress={onItemPress}
        >
            <View style={themedStyle.leftSection}>
                <Avatar
                    source={{ uri: room.interlocutor.imageUrl }}
                    style={themedStyle.avatar}
                />
                <View style={themedStyle.messageContainer}>
                    <Text
                        style={themedStyle.userLabel}
                        category="s2"
                    >
                        {`${room.interlocutor.name}`}
                    </Text>
                    <Text
                        style={themedStyle.lastMessageLabel}
                        appearance="hint"
                        category="c1"
                        adjustsFontSizeToFit
                    >
                        {`${room.lastMessage}`}
                    </Text>
                </View>
            </View>
            <View style={themedStyle.rightSection}>
                <Text
                    style={themedStyle.dateLabel}
                    appearance="hint"
                    category="p2"
                >
                    {`${Moment(room.lastUpdated).format('YYYY-MM-DD')}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export const Room = withStyles(RoomComponent, (theme: ThemeType) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        alignSelf: 'center',
        marginRight: 16,
    },
    messageContainer: {
        // Nothing needed
    },
    userLabel: textStyles.subtitle,
    lastMessageLabel: textStyles.caption1,
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    dateLabel: textStyles.paragraph,
}));
