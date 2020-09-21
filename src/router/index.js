import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "../pages/home/HomePage";
import HomeDetailPage from "../pages/home/HomeDetailPage";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MePage from "../pages/me/MePage";
import MessagePage from "../pages/me/MessagePage";
import { observer } from 'mobx-react';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeRoute = {
    home: HomePage,
    homeDetail: HomeDetailPage
}

const MeRoute = {
    me: MePage,
    message: MessagePage
}


const HomeStack = () => {
    return (
        <Stack.Navigator>
            {
                Object.keys(HomeRoute).map((item) => {
                    return <Stack.Screen key={item} name={item} component={HomeRoute[item]}/>
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
                    return <Stack.Screen key={item} name={item} component={MeRoute[item]}/>
                })
            }
        </Stack.Navigator>
    )
}

const router = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Me" component={MeStack}/>
        </Tab.Navigator>
    )
}
export default router;
