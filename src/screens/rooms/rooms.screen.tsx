import React from 'react';
import {
    withStyles,
    Divider,
    Layout,
    ThemedComponentProps,
    ThemeType,
    TopNavigation,
} from '@ui-kitten/components';

interface ComponentProps { }

type RoomsProps = ThemedComponentProps & ComponentProps;

const RoomsComponent = (props: RoomsProps): React.ReactElement => {
    const { themedStyle } = props;

    return (
        <Layout style={themedStyle.container}>
            <TopNavigation title="Chats" alignment="center" />
            <Divider />
        </Layout>
    );
};

export const RoomsScreen = withStyles(RoomsComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
}));
