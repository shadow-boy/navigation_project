import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { Stores } from '@store';
import React, { Component } from 'react';
import { View } from 'react-native';







export type BaseComponentProps = StackScreenProps<any, any> & { store: Stores }

export type BaseComponetState = {}



export default class BasePageComponent<P extends BaseComponentProps, S extends BaseComponetState> extends Component<P, S>{

    /**
     *导航器
     *
     * @type {StackNavigationProp<any, any>}
     * @memberof BasePageComponent
     */
    navigation: StackNavigationProp<any, any>
    page_index: number = 1;
    page_size: number = 20;
    /**
     *是否下拉
     *
     * @type {boolean}
     * @memberof BasePageComponent
     */
    isDownRefresh: boolean = false

    constructor(props: P) {
        super(props)
        this.navigation = props.navigation;
    };

}


// interface P {
//     name: string;
//     age: number;
//     sex?:number
// }
// const people: P = {
//     age: 20,
//     name: 'wang',
// };

// const fn: <P, T extends keyof P>(p: P, t: T[]) => Array<P[T]> = (p, t) => {
//     return t.map(item => p[item])
// };
// const res = fn(people, ["age"])

// type MapToPromise<T> = { [K in keyof P]: Promise<P[K]> };
// type Coordinate = [number, number]

// type PromiseCoordinate = MapToPromise<Coordinate>; // [Promise<number>, Promise<number>]
