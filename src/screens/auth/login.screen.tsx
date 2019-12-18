import {
    withStyles,
    Button,
    Input,
    Layout,
    Text,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import React from 'react';
import { NavigationSwitchScreenProps } from 'react-navigation';
import {
    textStyles,
    EmailIconFill,
    EyeOffIconFill,
    ScrollableAvoidKeyboard,
} from '../../components';
import { translate } from '../../i18n';
import { isNullOrEmpty } from '../../utils';

interface ComponentProps { }

type LoginProps = NavigationSwitchScreenProps & ThemedComponentProps & ComponentProps;

const LoginComponent = (props: LoginProps): React.ReactElement => {
    const { themedStyle } = props;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onForgotPasswordPress = (): void => {
        // TODO: navigate 'forgot password' screen
    };

    const onLoginPress = (): void => {
        props.navigation.navigate('Main');
    };

    const onRegisterPress = (): void => {
        // TODO: navigate 'register' screen
    };

    return (
        <ScrollableAvoidKeyboard style={themedStyle.container}>
            <Layout style={themedStyle.headerContainer}>
                <Text
                    style={themedStyle.titleLabel}
                    category="h1"
                >
                    JnS Chat
                </Text>
                <Text
                    style={themedStyle.subtitleLabel}
                    category="s1"
                >
                    {translate('loginScreen.subtitle')}
                </Text>
            </Layout>
            <Layout style={themedStyle.formContainer}>
                <Input
                    textStyle={textStyles.paragraph}
                    placeholder={translate('loginScreen.email')}
                    icon={EmailIconFill}
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    style={themedStyle.passwordInput}
                    textStyle={textStyles.paragraph}
                    placeholder={translate('loginScreen.password')}
                    icon={EyeOffIconFill}
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                />
                <Layout style={themedStyle.forgotPasswordContainer}>
                    <Button
                        style={themedStyle.forgotPasswordButton}
                        textStyle={themedStyle.forgotPasswordText}
                        appearance="ghost"
                        activeOpacity={0.75}
                        onPress={onForgotPasswordPress}
                    >
                        {translate('loginScreen.forgotPassword')}
                    </Button>
                </Layout>
            </Layout>
            <Button
                style={themedStyle.loginButton}
                textStyle={textStyles.button}
                size="giant"
                disabled={isNullOrEmpty(email) || isNullOrEmpty(password)}
                onPress={onLoginPress}
            >
                {translate('loginScreen.login')}
            </Button>
            <Button
                style={themedStyle.registerButton}
                textStyle={themedStyle.registerText}
                appearance="ghost"
                activeOpacity={0.75}
                onPress={onRegisterPress}
            >
                {translate('loginScreen.register')}
            </Button>
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
    formContainer: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 16,
    },
    passwordInput: {
        marginTop: 16,
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    forgotPasswordButton: {
        paddingHorizontal: 0,
    },
    forgotPasswordText: {
        fontSize: 15,
        color: theme['text-hint-color'],
        ...textStyles.subtitle,
    },
    loginButton: {
        marginHorizontal: 16,
    },
    registerButton: {
        marginVertical: 12,
    },
    registerText: {
        color: theme['text-hint-color'],
        ...textStyles.subtitle,
    },
}));
