import {
    withStyles,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import React from 'react';
import {
    Platform,
    StatusBar,
    StatusBarStyle,
    View,
    ViewProps,
} from 'react-native';

interface ComponentProps {
    currentTheme: string;
}

type DynamicStatusBarProps = ThemedComponentProps & ViewProps & ComponentProps;

const DynamicStatusBarComponent = (props: DynamicStatusBarProps): React.ReactElement => {
    const { themedStyle } = props;

    const getStatusBarContent = (): StatusBarStyle => {
        if (props.currentTheme === 'light') {
            return 'dark-content';
        }

        return 'light-content';
    };

    return (
        <View style={themedStyle.container}>
            <StatusBar
                backgroundColor={themedStyle.container.backgroundColor}
                barStyle={getStatusBarContent()}
            />
        </View>
    );
};

export const DynamicStatusBar = withStyles(DynamicStatusBarComponent, (theme: ThemeType) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
        height: Platform.select({
            ios: 20,
            android: 0,
        }),
    },
}));
