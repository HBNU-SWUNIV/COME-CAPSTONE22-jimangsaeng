import React, { Component, useRef } from "react"
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Button, TouchableWithoutFeedback, AppRegistry, Pressable } from "react-native"
import { RNCamera } from 'react-native-camera';
import { useCamera } from "react-native-camera-hooks";
import Svg, {
    Ellipse,
    Rect,
    Line,
    Path,
    Circle
} from 'react-native-svg';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

import { SignUpPhotoState } from '../../utils/state'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');



const SignUpCamera = ({ navigation, initialProps, route }) => {
    const [
        { cameraRef, type, isRecording, autoFocus, autoFocusPoint, ratio },
        { toggleFacing, touchToFocus, takePicture, textRecognized, facesDetected,
            recordVideo,
            setIsRecording, },
    ] = useCamera(initialProps);

    const [photo, setPhoto] = useRecoilState(SignUpPhotoState)




    const captureHandle = async () => {
        try {
            const data = await takePicture()
            console.log(data)
            setPhoto(data)
            navigation.navigate("SignUpComponent")
        } catch (error) {
            console.log(error)
        }
    }

    const TabToFocus = () => {
        touchToFocus
    }


    return (
        <View style={{ flex: 1 }}>

            <TouchableWithoutFeedback
                onPress={touchToFocus}
            >
                <RNCamera
                    ref={cameraRef}
                    type={RNCamera.Constants.Type.back}
                    style={{ flex: 1 }}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                //autoFocusPointOfInterest={autoFocusPoint.normalized}
                />
            </TouchableWithoutFeedback>


            <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
            <Svg
                    width="80"
                    height="80"
                >
                    <Rect
                        width="80"
                        height="80"
                        strokeWidth="7"
                        stroke="red"
                    />
                </Svg>
                </View>
                <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
                <Svg
                    width="50"
                    height="50"
                >
                    <Circle
                        cx="25" 
                        cy="25" 
                        r="5" 
                        stroke="blue" 
                        strokeWidth="1" 
                        
                    />
                </Svg>

            </View>
            <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => captureHandle()}>
                    <Icon
                        name='camera'
                        size={80}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
})

export default SignUpCamera

