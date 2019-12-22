import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator, NavigationTabScreenProps } from 'react-navigation-tabs';
import { createStackNavigator, NavigationStackScreenProps } from 'react-navigation-stack';
import { MessageCircleIconOutline, PersonIconOutline, Settings2IconOutline } from '../components';
import { ChatRoomScreen, RoomsScreen } from '../screens/rooms';

const TabBarComponent = (props: NavigationTabScreenProps): React.ReactElement => {
    const { navigation } = props;

    const onSelect = (index: number): void => {
        const selectedTabRoute = navigation.state.routes[index];
        navigation.navigate(selectedTabRoute.routeName);
    };

    return (
        <SafeAreaView>
            <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
                <BottomNavigationTab icon={PersonIconOutline} />
                <BottomNavigationTab icon={MessageCircleIconOutline} />
                <BottomNavigationTab icon={Settings2IconOutline} />
            </BottomNavigation>
        </SafeAreaView>
    );
};

export const ChatsNavigator = createStackNavigator({
    Rooms: RoomsScreen,
    ChatRoom: ChatRoomScreen,
}, {
    initialRouteName: 'Rooms',
    headerMode: 'none',
});
ChatsNavigator.navigationOptions = (navProps: NavigationStackScreenProps): any => {
    let tabBarVisible = true;
    if (navProps.navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

export const MainNavigator = createBottomTabNavigator({
    Friends: RoomsScreen,
    Chats: ChatsNavigator,
    Settings: RoomsScreen,
}, {
    initialRouteName: 'Friends',
    tabBarComponent: TabBarComponent,
});
