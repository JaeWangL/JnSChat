import {
    withStyles,
    ThemedComponentProps,
    ThemeType,
} from '@ui-kitten/components';
import React from 'react';
import {
    KeyboardAwareScrollView,
    KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

type ScrollableAvoidKeyboardProps = ThemedComponentProps & KeyboardAwareScrollViewProps;

const ScrollableAvoidKeyboardComponent = (props: ScrollableAvoidKeyboardProps): React.ReactElement => {
    const {
        style,
        contentContainerStyle,
        themedStyle,
        ...restProps
    } = props;

    return (
        <KeyboardAwareScrollView
            bounces={false}
            bouncesZoom={false}
            alwaysBounceVertical={false}
            alwaysBounceHorizontal={false}
            style={[themedStyle.container, style]}
            contentContainerStyle={[themedStyle.contentContainer, contentContainerStyle]}
            enableOnAndroid
            {...restProps}
        />
    );
};

export const ScrollableAvoidKeyboard = withStyles(ScrollableAvoidKeyboardComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
}));
