import BasePageComponent from '@components/base/BasePageComponent';
import navigationService from '@router/navigaitonService';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity, Image
} from 'react-native';
import { MyProps } from './HomeDetailPage';





export default class HomePage extends BasePageComponent {

    constructor(props) {
      super(props);
      this.state = {};

    }

    render(){
        return (
            <View style={style.container}>
                <Text>HomePage</Text>
                <TouchableOpacity onPress={()=>{
                    let para:MyProps = {id:"15151131"}
                    this.navigation.push("homeDetail",para)
                }}>
                    <Text style={{backgroundColor:"blue"}}>go detail</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.reset({routes:[{name:"homeThree"},{name:"homeDetail"}],index:1})
                }}>
                    <Text>重置路由栈</Text>
                </TouchableOpacity>

            </View>
        )
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
