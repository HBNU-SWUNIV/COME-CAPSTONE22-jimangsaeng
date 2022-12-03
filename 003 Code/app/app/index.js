import 'react-native-gesture-handler'
import React, { Component, useEffect } from 'react'
import { StyleSheet, View, Text, LogBox, BackHandler, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './routes'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

LogBox.ignoreAllLogs();

const App = () => {
 
        return (
            <RecoilRoot>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </RecoilRoot>
        )
    }

const styles = StyleSheet.create({

})

export default App