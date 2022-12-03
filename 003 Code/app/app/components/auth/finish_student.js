//서버에서 인증 결과값 받은 후 출력

import React, { useEffect } from 'react'
import { StyleSheet, View, Text, BackHandler, ActivityIndicator, ScrollView, Button, TouchableOpacity, Image } from 'react-native'

import schoolIcon from '../../assetes/images/school.png'

const Finish_student = ({ navigation, route }) => {

    const select = route.params.key
    const data = route.params.Data

    return(
     <View style={styles.container}>
        <View style={{          
                                flex : 1,
                                width: 300,
                                height: 300,
                                justifyContent: 'center',
                                alignItems: 'center',
                                // borderColor: 'rgb(20,153,184)',
                                // borderWidth: 5, borderRadius: 15
                            }}>
                                <Image
                                    source={schoolIcon}
                                    style={{ width: 150, height: 150, resizeMode: 'contain', 
                                }}
                                />
                            </View>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.Text}>학생인증결과</Text>
        <Text style={styles.Text}>{data}</Text>
        <Text style={styles.Text}>{`입니다.`}</Text>
        </View>
        <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignIn')}
                            style={[styles.button, { marginBottom: 50 }]}
                        >
                            <Text style={styles.btnText}>처음화면으로</Text>
                        </TouchableOpacity>
                    </View>
     </View>   
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
    Text: {
        width: '80%',
        fontSize: 35,
        color: 'black',
        
    }
})

export default Finish_student

