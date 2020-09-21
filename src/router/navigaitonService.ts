import * as React from 'react';
import { NavigationContainerRef, NavigationState, StackActions} from '@react-navigation/native';


const navigationRef = React.createRef<NavigationContainerRef>()

function navigate(name = "", params = {}) {
    navigationRef.current?.navigate(name, params);
}
function push(name = "", params = {}) {
    navigationRef.current?.dispatch(
        StackActions.push(name, params)
    )

}



//当前路由变化监听
function onNavigationStateChange(state:NavigationState) {

    console.log(`----onNavigationStateChange`,state)
    

}


const navigationService={
    navigationRef,
    navigate,
    push,
    onNavigationStateChange
}
export default navigationService
