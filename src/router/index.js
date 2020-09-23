import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../components/pages/home/HomePage";
import HomeDetailPage from "../components/pages/home/HomeDetailPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MePage from "@components/pages/me/MePage";
import MessagePage from "@components/pages/me/MessagePage";
import LoginPage from '@components/pages/login/Login';
import RegisterPage from '@components/pages/login/Register';
import HomeThreePage from '@components/pages/home/HomeThreePage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RouteList = {
    homeDetail: HomeDetailPage,
    homeThree: HomeThreePage,
    message: MessagePage,
    login: LoginPage,
    regist: RegisterPage

}



const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="tabHome" component={HomePage} />
            <Tab.Screen name="tabMe" component={MePage} />
        </Tab.Navigator>
    )
}

const router = () => {

    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{gestureEnabled:false}}>
            <Stack.Screen name="tab" component={TabScreen} />
            {
                Object.keys(RouteList).map((item) => {
                    return <Stack.Screen key={item} name={item} component={RouteList[item]} />
                })
            }

        </Stack.Navigator>
    )

}
export default router;
