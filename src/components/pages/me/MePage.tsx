import BasePageComponent from '@components/base/BasePageComponent';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity
} from 'react-native';



export default class MePage extends BasePageComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <View style={style.container}>
                <Text>MePage</Text>
                <TouchableOpacity onPress={()=>{
                    this.navigation.push("message")
                }}>
                    <Text>go messae</Text>
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
