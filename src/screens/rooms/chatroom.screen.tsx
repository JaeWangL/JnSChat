import React, { useState } from 'react';
import { KeyboardAvoidingView, ListRenderItemInfo, View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
    withStyles,
    Avatar,
    AvatarProps,
    Button,
    Divider,
    Input,
    List,
    ThemedComponentProps,
    ThemeType,
    TopNavigation,
    TopNavigationAction,
    TopNavigationActionProps,
} from '@ui-kitten/components';
import {
    textStyles,
    ArrowBackIconFill,
    MicIconFill,
    PlusIconFill,
} from '../../components';
import { GetMessageDto, GetProfileDto } from '../../dtos';
import { ChatMessage, ChatMessageProps } from './components/chatMessage.component';

interface UiMessage {
    isReceived: boolean;
}
export type UiMessageModel = UiMessage & GetMessageDto;

interface ComponentProps { }

type ChatRoomProps = NavigationStackScreenProps & ThemedComponentProps & ComponentProps;

const ChatRoomComponent = (props: ChatRoomProps): React.ReactElement => {
    const { navigation, themedStyle } = props;
    const interlocutor: GetProfileDto = navigation.getParam('interlocutor');
    const [newMessage, setNewMessage] = useState('');
    const messages: GetMessageDto[] = [
        { senderId: 1, message: 'First', sentDate: new Date() },
        { senderId: 2, message: 'Second', sentDate: new Date() },
        { senderId: 1, message: 'Third', sentDate: new Date() },
        { senderId: 2, message: 'Fourth', sentDate: new Date() },
        { senderId: 2, message: 'Fifth', sentDate: new Date() },
    ];

    const createUiMessages = (): UiMessageModel[] => messages.map((message: GetMessageDto) => {
        if (message.senderId === interlocutor.id) {
            return {
                ...message,
                isReceived: true,
            };
        }

        return {
            ...message,
            isReceived: false,
        };
    });

    const onAddAttachPress = (): void => {
        // TODO: Add attachments features
    };

    const renderMessages = (info: ListRenderItemInfo<UiMessageModel>): React.ReactElement<ChatMessageProps> => (
        <ChatMessage
            // eslint-disable-next-line react/prop-types
            style={themedStyle.message}
            message={info.item}
        />
    );

    const renderProfileAvatar = (): React.ReactElement<AvatarProps> => (
        <Avatar source={{ uri: interlocutor.imageUrl }} />
    );

    const renderLeftControl = (): React.ReactElement<TopNavigationActionProps> => (
        <TopNavigationAction
            icon={ArrowBackIconFill}
            // eslint-disable-next-line react/prop-types
            onPress={(): boolean => navigation.goBack()}
        />
    );

    const renderRightControls = (): React.ReactElement<TopNavigationActionProps> => (
        <TopNavigationAction
            icon={renderProfileAvatar}
        />
    );

    return (
        <KeyboardAvoidingView style={themedStyle.container}>
            <TopNavigation
                title={interlocutor.name}
                alignment="center"
                leftControl={renderLeftControl()}
                rightControls={renderRightControls()}
            />
            <Divider />
            <List
                contentContainerStyle={themedStyle.chatContainer}
                data={createUiMessages()}
                renderItem={renderMessages}
            />
            <View style={themedStyle.inputContainer}>
                <Button
                    style={themedStyle.addAttachButton}
                    icon={PlusIconFill}
                    onPress={onAddAttachPress}
                />
                <Input
                    style={themedStyle.messageInput}
                    textStyle={textStyles.paragraph}
                    icon={MicIconFill}
                    value={newMessage}
                    placeholder="Message..."
                    onChangeText={setNewMessage}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

export const ChatRoomScreen = withStyles(ChatRoomComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
    },
    chatContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    message: {
        marginVertical: 12,
    },
    inputContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme['background-basic-color-1'],
    },
    addAttachButton: {
        width: 26,
        height: 26,
        borderRadius: 26,
    },
    messageInput: {
        flex: 1,
        marginHorizontal: 8,
    },
}));
