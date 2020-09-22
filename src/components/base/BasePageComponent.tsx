import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { Stores } from '@store';
import React, { Component } from 'react';
import { View } from 'react-native';







export type BaseComponentProps =  StackScreenProps<any,any> & {store:Stores}

export type BaseComponetState = {}



export default class BasePageComponent<P extends BaseComponentProps,S extends BaseComponetState> extends Component<P, S>{

    constructor(props: P) {
        super(props)
    };

}

