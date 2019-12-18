import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { LoginScreen } from '../screens/auth';
import { RoomsScreen } from '../screens/rooms';

const HomeNavigator = createSwitchNavigator({
    Auth: LoginScreen,
    Main: RoomsScreen,
}, {
});

export const AppNavigator = createAppContainer(HomeNavigator);
