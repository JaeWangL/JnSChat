import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator, NavigationTabScreenProps } from 'react-navigation-tabs';
import { MessageCircleIconOutline, PersonIconOutline, Settings2IconOutline } from '../components';
import { RoomsScreen } from '../screens/rooms';

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

export const MainNavigator = createBottomTabNavigator({
    Friends: RoomsScreen,
    Chats: RoomsScreen,
    Settings: RoomsScreen,
}, {
    tabBarComponent: TabBarComponent,
});
