import React from 'react';
import { SafeAreaView } from 'react-navigation';
import {
    withStyles,
    Divider,
    ThemedComponentProps,
    ThemeType,
    TopNavigation,
} from '@ui-kitten/components';

interface ComponentProps { }

type RoomsProps = ThemedComponentProps & ComponentProps;

const RoomsComponent = (props: RoomsProps): React.ReactElement => {
    const { themedStyle } = props;

    return (
        <SafeAreaView style={themedStyle.container}>
            <TopNavigation title="Chatrooms" alignment="center" />
            <Divider />
        </SafeAreaView>
    );
};

export const RoomsScreen = withStyles(RoomsComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
}));
