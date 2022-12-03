import React, {useEffect} from 'react'
import { Image, StyleSheet, View, Text, Button, TouchableOpacity, Alert, BackHandler } from 'react-native'
import hanbat from '../../assetes/images/re07000.jpg'

const AuthComponent = ({ navigation }) => {

    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("주의", "앱을 종료하시겠습니까?", [
    //         {
    //           text: "취소",
    //           onPress: () => null,
    //         },
    //         { text: "확인", onPress: () => BackHandler.exitApp() }
    //       ]);
    //       return true;
    //     };

    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //       );
    //       return () => backHandler.remove();
    //     }, []);
    

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={hanbat}
                    style={{
                        resizeMode: 'contain',
                        width: 200, height: 200,
                        paddingTop: 400
                    }}
                />
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Camera')}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>본인인증</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpComponent', {p : null})}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>회원가입</Text>
                </TouchableOpacity>

            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        backgroundColor: 'rgb(255,255,255)'
    },
    btnView: {
        flex: 1,
        paddingTop: 30,
    },
    button: {
        elevation: 8,   //그림자
        backgroundColor: 'rgb(20,153,184)',
        borderRadius: 30,          // 끝 뚱글개
        paddingVertical: 10,    //세로 높이
        paddingHorizontal: 60,  //가로 넓이
        marginTop: 10
    },
    btnText: {
        color: 'rgb(255,255,255)'
    },
})

export default AuthComponent

