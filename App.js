/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


console.disableYellowBox = true
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import router from './src/router'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationService from './src/router/navigaitonService';
import { Provider } from 'mobx-react';
import storeInstance from '@store';


const Stack = createStackNavigator();


const App = () => {
    return (
        <Provider store = {storeInstance}>
            <NavigationContainer ref={navigationService.navigationRef}
                onStateChange={navigationService.onNavigationStateChange}
            >
                {router()}
            </NavigationContainer>
        </Provider>
    )
}


export default App;
