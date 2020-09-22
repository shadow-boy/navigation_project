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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeRoute = {
    home: HomePage,
    homeDetail: HomeDetailPage
}

// @ts-ignore
const MeRoute = {
    "me": MePage,
    "message": MessagePage
}


const HomeStack = () => {
    return (
        <Stack.Navigator>
            {
                Object.keys(HomeRoute).map((item) => {
                    return <Stack.Screen key={item} name={item} component={HomeRoute[item]} />
                })
            }
        </Stack.Navigator>
    )
}
const MeStack = () => {
    return (
        <Stack.Navigator>
            {
                Object.keys(MeRoute).map((item) => {
                    return <Stack.Screen key={item} name={item} component={MeRoute[item]} />
                })
            }
        </Stack.Navigator>
    )
}



const LoginRoute = {
    login: LoginPage,
    regist: RegisterPage
}
const LoginStack = () => {
    return (
        <Stack.Navigator>
            {
                Object.keys(LoginRoute).map((item) => {
                    return <Stack.Screen key={item} name={item} component={LoginRoute[item]} />
                })
            }
        </Stack.Navigator>
    )
}


const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Me" component={MeStack} />
        </Tab.Navigator>
    )
}

const router = () => {

    return (
        <Stack.Navigator  initialRouteName="main" mode="modal">
          <Stack.Screen name="main" component={TabNav} />
          <Stack.Screen name="loginStack" component={LoginStack} />
        </Stack.Navigator>
    )

}
export default router;
