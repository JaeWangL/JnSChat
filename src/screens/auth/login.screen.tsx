import {
    withStyles,
    Text,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { textStyles, ScrollableAvoidKeyboard } from '../../components';
import { translate } from '../../i18n';

interface ComponentProps { }

type LoginProps = ThemedComponentProps & ComponentProps;

const LoginComponent = (props: LoginProps): React.ReactElement => {
    const { themedStyle } = props;

    return (
        <ScrollableAvoidKeyboard style={themedStyle.container}>
            <View style={themedStyle.headerContainer}>
                <Text
                    style={themedStyle.titleLabel}
                    category="h1"
                >
                    {translate('dialog.ok')}
                </Text>
                <Text
                    style={themedStyle.subtitleLabel}
                    category="s1"
                >
                    {translate('dialog.cancel')}
                </Text>
            </View>
        </ScrollableAvoidKeyboard>
    );
};

export const LoginScreen = withStyles(LoginComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216,
        backgroundColor: theme['color-primary-default'],
    },
    titleLabel: {
        color: 'white',
        ...textStyles.headline,
    },
    subtitleLabel: {
        marginTop: 16,
        color: 'white',
        ...textStyles.subtitle,
    },
}));
