import React, { ReactNode, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity,
} from 'react-native';
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import BasePageComponent, { BaseComponentProps, BaseComponetState } from '../../components/BasePageComponent';
import { inject, observer } from 'mobx-react';




interface ISignUpData {
    firstName: string;
    emailAddress: string;
}

export interface Props extends BaseComponentProps {

}
export interface State extends BaseComponetState {
    counter: number,
    data:ISignUpData
}
@inject("store")
@observer
class HomeDetailPage extends BasePageComponent<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            counter: 0,
            data:null
        }


    }
    render(): ReactNode {
        return (
            <View style={style.container}>
                <Text>HomeDetailPage</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.setOptions({ title: "change title" })

                }}>
                    <Text>change title</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {


                }}>
                    <Text>count++current`${this.state.counter} </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    let temp: ISignUpData = {
                        firstName: "lianyou",
                        emailAddress: "15062352@qq.com"
                    }

                    this.setState({
                        data: temp
                    })

                }}>
                    <Text style={{ backgroundColor: "red" }}>login</Text>
                </TouchableOpacity>

                <Text>{JSON.stringify(this.state.data)}</Text>
            </View>
        )

    }

}


export default HomeDetailPage


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    }
})
