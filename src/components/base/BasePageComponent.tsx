import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import navigationService from '@router/navigaitonService';
import { Stores } from '@store';
import React, { Component } from 'react';
import { BackHandler, NativeEventSubscription, Platform, View } from 'react-native';







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


    /**
     *Android物理键返回时间监听
     *
     * @type {NativeEventSubscription}
     * @memberof BasePageComponent
     */
    listenerAndroidBack: NativeEventSubscription

    constructor(props: P) {
        super(props)
        this.navigation = props.navigation;


        this.loadData();
        this.addViewLifeCircleEventListener()
        this.addAndroidHardBackPressListener()

    };


    componentWillUnmount() {
        this.removeLifeCircleEventListener()
        this.removeAndroidHardBackPressListener()
    }


    addAndroidHardBackPressListener() {

        if (this.navigation && this.navigation.isFocused()) {
            if (Platform.OS == "android") {
                this.listenerAndroidBack = BackHandler.addEventListener("hardwareBackPress", () => {
                    this.onBackButtonPressAndroid();
                    return true;
                });
            }
        }
    }

    removeAndroidHardBackPressListener() {
        if (this.navigation && this.navigation.isFocused()) {
            if (Platform.OS == "android") {
                this.listenerAndroidBack && this.listenerAndroidBack.remove()
            }
        }
    }

    /**
     * 默认加载数据
     */
    loadData() {
        console.log('BasePageComponent ---- loadData');
    }

    /**
     * 加载更多数据
     */
    loadMoreData() {
        console.log('BasePageComponent --- loadMoreData');
        this.page_index++
        this.isDownRefresh = false

    }

    /**
     * 加载最新数据
     */
    loadLastedData() {
        console.log('BasePageComponent ----- loadLastedData');
        this.page_index = 1
        this.isDownRefresh = true

    }


    /**
    * 添加component的生命周期listener（跟navigation无关联）
    */
    addViewLifeCircleEventListener() {
        this.navigation.addListener("focus", (payload) => {
            console.log('focus', payload);
            this.componentAppear()

        })
        this.navigation.addListener("blur", (payload) => {
            console.log('blur', payload);
            this.componentDisappear()

        })
        this.navigation.addListener("beforeRemove",(payload)=>{
            if(!this.onNavigationBackPress()){
                payload.preventDefault()
            }

        })
    }
    /**
     * 移除component的生命周期listener（跟navigation无关联）
     */
    removeLifeCircleEventListener() {
        this.navigation.removeListener("focus", (payload) => { })
        this.navigation.removeListener("blur", (payload) => { })

    }

    /**
     * 类似于viewWillAppear
     */
    componentAppear() {

    }
    /**
     * 类似于viewDidDisappear
     */
    componentDisappear() {

    }


    /**
    * 安卓物理按键返回
    */
    onBackButtonPressAndroid() {
        let { navigation } = this.props;

        if (navigation) {// 必须在有navigation的情况下才能操作界面、

            let isCurrentPageFocus = navigation.isFocused()

            if (isCurrentPageFocus) {
                if (this.onNavigationBackPress) {
                    this.onNavigationBackPress();
                    return true
                } else {
                    return false
                }
            }
            else {
                this.navigation.goBack();
            }

        }

        return false;
    }


  /**
   * 返回键默认实现 【导航栏返回键、安卓物理返回键】 
   * 返回true 表示执行 
   */
    onNavigationBackPress():boolean {
        this.navigation.goBack()
        return true

    }




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
