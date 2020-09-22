import React, { ReactNode, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity,Image
} from 'react-native';
import BasePageComponent, { BaseComponentProps, BaseComponetState } from '../../base/BasePageComponent';
import { inject, observer } from 'mobx-react';




interface ISignUpData {
    firstName: string;
    emailAddress: string;
}

export interface Props extends BaseComponentProps {

}
export interface State extends BaseComponetState {
    counter: number,
    data:ISignUpData| null
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
        this.props.navigation.setOptions({headerShown:false})
        console.log(`this.props.store---`,this.props.store);
        

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
                    this.setState({
                        counter:this.state.counter+1
                    })


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
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.setOptions({headerShown:true})
                }}>
                    <Text>show title</Text>
                </TouchableOpacity>


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
        backgroundColor: 'orange'
    }
})
