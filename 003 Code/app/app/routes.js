
import React from 'react'
import { Button, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'

//Screens
import SignIn from './components/auth/index'
import Camera from './components/auth/camera'
import Finish from './components/auth/finish'
import Finish_student from './components/auth/finish_student'
import SignUpComponent from './components/signup/index'
import SignupFinish from './components/signup/signupFinish'
import RNCamera from './components/auth/RNCamera'
import SignUpCamera from './components/signup/SignUpCamera'

const AuthStack = createStackNavigator()


export const RootNavigator = () => {


    return (
        <AuthStack.Navigator
        //스크린 옵션을 이용해 화면 위에 뜨는 스크린해더 출력을 취소함
        // screenOptions={{ headerShown: false }}
        >
<AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    title: '본인인증 앱(Test)',
                    headerStyle: {
                        backgroundColor: 'rgb(20,153,184)',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    // headerRight: () => (
                    //     <Button
                    //         onPress={() => alert('This is a button!')}
                    //         title="Info"
                    //         color="rgb(40,180,210)"
                    //         style={{}}
                    //     />

                    // ),
                }}
            />
            <AuthStack.Group
                screenOptions={{ gestureEnabled: false, headerShown: false}}
            >
                <AuthStack.Screen name="Camera" component={Camera}/>
                <AuthStack.Screen name="Finish" component={Finish} />
                <AuthStack.Screen name="Finish_student" component={Finish_student}  />
                <AuthStack.Screen name="SignUpComponent" component={SignUpComponent}/>
                <AuthStack.Screen name="SignupFinish" component={SignupFinish} />
                <AuthStack.Screen name="RNCamera" component={RNCamera}/>
                <AuthStack.Screen name="SignUpCamera" component={SignUpCamera}/>
            </AuthStack.Group>
        </AuthStack.Navigator >
    )
}
