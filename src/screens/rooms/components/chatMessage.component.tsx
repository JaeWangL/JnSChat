import {
    withStyles,
    StyleType,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import React from 'react';
import {
    View,
    ViewProps,
} from 'react-native';
import { UiMessageModel } from '../chatroom.screen';
import { LeftMessage } from './chatMessage-left.component';
import { RightMessage } from './chatMessage-right.component';

const containerRow: StyleType = {
    flexDirection: 'row',
    alignItems: 'center',
};

export type MessageElement = React.ReactElement<ViewProps>;

interface ComponentProps {
    message: UiMessageModel;
    children?: React.ReactElement<any>[];
}

export type ChatMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

const ChatMessageComponent = (props: ChatMessageProps): React.ReactElement => {
    const { style, message, children } = props;

    const getContentAlignment = (isReceived: boolean): StyleType => {
        if (isReceived) {
            return {
                ...containerRow,
                justifyContent: 'flex-start',
            };
        }

        return {
            ...containerRow,
            justifyContent: 'flex-end',
        };
    };

    const getMessageContent = (isReceived: boolean): MessageElement => {
        if (isReceived) {
            return (
                <LeftMessage message={message}>
                    {children}
                </LeftMessage>
            );
        }

        return (
            <RightMessage message={message}>
                {children}
            </RightMessage>
        );
    };

    const flexStyle: StyleType = getContentAlignment(message.isReceived);
    const content: MessageElement = getMessageContent(message.isReceived);

    return (
        <View style={[flexStyle, style]}>
            {content}
        </View>
    );
};

export const ChatMessage = withStyles(ChatMessageComponent, (theme: ThemeType) => ({
}));
