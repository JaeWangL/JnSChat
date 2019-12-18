import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { LoginScreen } from '../screens/auth';
import { MainNavigator } from './main-navigator';

const HomeNavigator = createSwitchNavigator({
    Auth: LoginScreen,
    Main: MainNavigator,
}, {
    initialRouteName: 'Auth',
});

export const AppNavigator = createAppContainer(HomeNavigator);
