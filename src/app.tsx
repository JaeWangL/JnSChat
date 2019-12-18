import React from 'react';
import { mapping, light, dark } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { DynamicStatusBar } from './components';
import { ThemeContext } from './contexts';
import { AppNavigator } from './navigation/app-navigator';

const themes: any = { light, dark };

const App = (): React.ReactElement => {
    const [theme, setTheme] = React.useState('dark');
    const currentTheme: string = themes[theme];

    const toggleTheme = (): void => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ApplicationProvider mapping={mapping} theme={currentTheme}>
                    <DynamicStatusBar currentTheme={theme} />
                    <AppNavigator />
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
