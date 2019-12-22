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

export type LeftMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

const LeftMessageComponent = (props: LeftMessageProps): React.ReactElement => {
    const { themedStyle, message, children } = props;

    return (
        <>
            <View style={themedStyle.cloudContainer} key={0}>
                <View style={[themedStyle.triangle, themedStyle.triangleLeft]} />
                <View style={[themedStyle.cloud, themedStyle.cloudLeft]}>
                    <MessageContent message={message}>
                        {children}
                    </MessageContent>
                </View>
            </View>
            <Text
                key={1}
                style={themedStyle.dateLabel}
                appearance="hint"
                category="c1"
            >
                {Moment(message.sentDate).format('YYYY-MM-DD')}
            </Text>
        </>
    );
};

export const LeftMessage = withStyles(LeftMessageComponent, (theme: ThemeType) => ({
    cloudContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    triangle: {
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        backgroundColor: 'transparent',
    },
    triangleLeft: {
        transform: [{ rotate: '-90deg' }],
        borderBottomColor: theme['color-primary-default'],
    },
    cloud: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
        maxWidth: Dimensions.get('window').width - 120,
    },
    cloudLeft: {
        left: -3,
        backgroundColor: theme['color-primary-default'],
        marginRight: 16,
    },
    dateLabel: textStyles.caption1,
}));
