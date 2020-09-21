import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View } from 'react-native';



export interface BaseComponentProps {
    navigation: StackNavigationProp<any, string>
}

export interface BaseComponetState { }



export default class BasePageComponent<BaseComponentProps,BaseComponetState> extends Component<BaseComponentProps, BaseComponetState>{

    constructor(props: BaseComponentProps) {
        super(props)
    };

}

