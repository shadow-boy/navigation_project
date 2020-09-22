import BasePageComponent from '@components/base/BasePageComponent';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity, Image
} from 'react-native';
import navigaitonService from '../../../router/navigaitonService';





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
                    navigaitonService.push("homeDetail")
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
