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
import Entrance from '@components/pages/Entrance';

const RootStack = createStackNavigator();

const MainStack = createStackNavigator()

const LoginStack = createStackNavigator()

const MeStack = createStackNavigator()


const Tab = createBottomTabNavigator();

const RouteListLogin = {
    login: LoginPage,
    regist: RegisterPage

}
const RouteListHome = {
    home: HomePage,
    homeDetail: HomeDetailPage,
    homeThree: HomeThreePage

}

const RouteListMe = {

    me: MePage,
    message: MessagePage

}

const routerLogin = () => {
    return <LoginStack.Navigator initialRouteName="login" screenOptions={{ gestureEnabled: false }}>

        {Object.keys(RouteListLogin).map((item) => {
            return <LoginStack.Screen key={item} name={item} component={RouteListLogin[item]} />
        })
        }
    </LoginStack.Navigator>

}


const routerHome = () => {
    return <MainStack.Navigator initialRouteName="login" screenOptions={{ gestureEnabled: false }}>

        {Object.keys(RouteListHome).map((item) => {
            return <MainStack.Screen key={item} name={item} component={RouteListHome[item]} />
        })
        }
    </MainStack.Navigator>

}

const routerMe = () => {
    return <MeStack.Navigator initialRouteName="login" screenOptions={{ gestureEnabled: false }}>

        {Object.keys(RouteListMe).map((item) => {
            return <MeStack.Screen key={item} name={item} component={RouteListMe[item]} />
        })
        }
    </MeStack.Navigator>

}

/**
 * 获取tabbar 可见度
 * @param {} route 
 */
const getTabBarVisibility = (route) => {

    if (route.state && route.state.index > 0){
        return false
    }
    return true;
}
 const tabBarVisibleOptionConfig = ({route})=>{
     return {tabBarVisible:getTabBarVisibility(route)}
 }


const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="tabHome" component={routerHome} options={tabBarVisibleOptionConfig} />
            <Tab.Screen name="tabMe" component={routerMe} options={tabBarVisibleOptionConfig} />
        </Tab.Navigator>
    )
}

/**
 * 采用这种路由架构是因为 App通常登录之后跳转的动画一般都是modal 形式的、不是默认的card 
 * 参考 iOS原生的present 和pushviewcontroller两种方式 , 通常用户登录之后一般是presen形式
 */
const routerRoot = () => {

    return (
        <RootStack.Navigator initialRouteName="entrance" screenOptions={{ gestureEnabled: false, headerShown: false }} mode="modal">

            <RootStack.Screen name="entrance" component={Entrance} />

            <RootStack.Screen name="tab" component={TabScreen} />

            <RootStack.Screen name="sign" component={routerLogin} />


        </RootStack.Navigator>
    )

}
export default routerRoot;
