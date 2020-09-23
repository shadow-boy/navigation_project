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





export default class HomeThreePage extends BasePageComponent {

    constructor(props) {
      super(props);
      this.state = {};

    }
    componentAppear(){
        this.props.navigation.setOptions({title:"HomeThreePage"})
    }

    render(){
        return (
            <View style={style.container}>
                <Text>HomeThreePage</Text>
                <TouchableOpacity onPress={()=>{
                    let para:MyProps = {id:"15151131"}
                    navigationService.push("homeDetail",para)
                }}>
                    <Text style={{backgroundColor:"blue"}}>go detail</Text>
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
