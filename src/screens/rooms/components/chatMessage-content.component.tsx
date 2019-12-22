import {
    withStyles,
    Text,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import React from 'react';
import { ViewProps } from 'react-native';
import { textStyles } from '../../../components';
import { GetMessageDto } from '../../../dtos';

interface ComponentProps {
    message: GetMessageDto;
    children?: React.ReactNode;
}

export type MessageContentProps = ThemedComponentProps & ViewProps & ComponentProps;

const MessageContentComponent = (props: MessageContentProps): React.ReactElement => {
    const { themedStyle, message } = props;

    if (message.message) {
        return (
            <Text
                style={themedStyle.messageLabel}
            >
                {message.message}
            </Text>
        );
    }
    /* TODO: Fix Typescript error
    if (children) {
        return children;
    }
    */

    return <></>;
};

export const MessageContent = withStyles(MessageContentComponent, (theme: ThemeType) => ({
    messageLabel: {
        color: 'white',
        ...textStyles.paragraph,
    },
}));
