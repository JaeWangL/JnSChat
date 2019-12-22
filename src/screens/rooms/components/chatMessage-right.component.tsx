import {
    withStyles,
    Text,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import Moment from 'moment';
import React from 'react';
import {
    Dimensions,
    View,
    ViewProps,
} from 'react-native';
import { textStyles } from '../../../components';
import { GetMessageDto } from '../../../dtos';
import { MessageContent } from './chatMessage-content.component';

interface ComponentProps {
    message: GetMessageDto;
    children?: React.ReactNode;
}

export type RightMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

const RightMessageComponent = (props: RightMessageProps): React.ReactElement => {
    const { themedStyle, message, children } = props;

    return (
        <>
            <Text
                key={0}
                style={themedStyle.dateLabel}
                appearance="hint"
                category="c1"
            >
                {Moment(message.sentDate).format('YYYY-MM-DD')}
            </Text>
            <View style={themedStyle.cloudContainer} key={1}>
                <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
                    <MessageContent message={message}>
                        {children}
                    </MessageContent>
                </View>
                <View style={[themedStyle.triangle, themedStyle.triangleRight]} />
            </View>
        </>
    );
};

export const RightMessage = withStyles(RightMessageComponent, (theme: ThemeType) => ({
    dateLabel: textStyles.caption1,
    cloudContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cloud: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
        maxWidth: Dimensions.get('window').width - 120,
    },
    cloudRight: {
        left: 3,
        backgroundColor: theme['text-hint-color'],
        marginLeft: 16,
    },
    triangle: {
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        backgroundColor: 'transparent',
    },
    triangleRight: {
        transform: [{ rotate: '90deg' }],
        borderBottomColor: theme['text-hint-color'],
    },
}));
