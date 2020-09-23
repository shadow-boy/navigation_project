import React, { ReactNode, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity, Image
} from 'react-native';
import { inject, observer } from 'mobx-react';
import navigationService from '@router/navigaitonService';
import BasePageComponent, { BaseComponentProps, BaseComponetState } from '@components/base/BasePageComponent';





interface ISignUpData {
    firstName: string;
    emailAddress: string;
}

export interface Props extends BaseComponentProps {

}
export interface State extends BaseComponetState {
    counter: number,
    data: ISignUpData | null
}

export interface MyProps {id:string}


@inject("store")
@observer
class HomeDetailPage extends BasePageComponent<Props, State,MyProps> {


    constructor(props: Props) {
        super(props)

        this.state = {
            counter: 0,
            data: null
        }
        console.log(this.paramsOfRoute);
        



    }
    componentDidMount() {
        // this.props.navigation.setOptions({ headerShown: false })

    }
    render(): ReactNode {
        // console.log(`this.props.store----`,this.props.store);

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
                        counter: this.state.counter + 1
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
                <TouchableOpacity onPress={() => {
                    this.props.navigation.setOptions({ headerShown: true })
                }}>
                    <Text>show title</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigationService.restart()
                    // this.props.navigation.dispatch(CommonActions.reset({index:0,routes:[{name:"loginStack"}]}))

                }}>
                    <Text>reset app</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigationService.goBack()
                    // this.props.navigation.dispatch(CommonActions.reset({index:0,routes:[{name:"loginStack"}]}))

                }}>
                    <Text>go back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigationService.push("homeDetail")
                    // this.props.navigation.dispatch(CommonActions.reset({index:0,routes:[{name:"loginStack"}]}))

                }}>
                    <Text>go next</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigationService.popToTop()
                    // this.props.navigation.dispatch(CommonActions.reset({index:0,routes:[{name:"loginStack"}]}))

                }}>
                    <Text>poptoroot</Text>
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
