/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import router  from './src/router'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import navigationService from './src/router/navigaitonService';


const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer ref={navigationService.navigationRef}
                             onStateChange={navigationService.onNavigationStateChange}
        >
            {router()}
        </NavigationContainer>
    )
}


export default App;
