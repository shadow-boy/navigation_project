import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';



export default class MessagePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <View style={style.container}>
                <Text>HomeDetailPage</Text>
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
