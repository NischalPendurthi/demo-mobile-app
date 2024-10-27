import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useState, useEffect } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isSignedIn } from '../navigation/navigator';
// import CheckBox from '@react-native-community/checkbox'

// web: 136909435265-9eevdt32n4fcr9kmdlp09uf03912l6kl.apps.googleusercontent.com
// android: 136909435265-qm9c76ff5op381f131p0h7vk2m32ab2d.apps.googleusercontent.com
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({  }) {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = React.useState(null);
    // androidClientId: "136909435265-akbcp9d2mepuv7r8jo989atdvf0bh24e.apps.googleusercontent.com",
    const [request, response, promptAsync] =Google.useAuthRequest({
        androidClientId: "136909435265-1a6n46rknb5vsrfqtgabmnpu8fqkke2p.apps.googleusercontent.com",
        webClientId: "136909435265-9eevdt32n4fcr9kmdlp09uf03912l6kl.apps.googleusercontent.com",
    })
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('UserName');
    React.useEffect(() => {
        handleSign();
    }, [response]);
    async function handleSign() {
        const user = await AsyncStorage.getItem('@user');
        if(!user){
            if(response?.type === 'success'){
                await getUserInfo(response.authentication?.accessToken);
            }
            // console.log(response);
        } else{
            setUserInfo(JSON.parse(user));

        }
        
    }
    const getUserInfo = async (token) => {
        if(!token) return;
        try{
            const response = await fetch('https://www.googleapis.com/userinfo/v2/me',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const user = await response.json();
            await AsyncStorage.setItem('@user', JSON.stringify(user));
            setUserInfo(user);
        }
        catch(e){
            console.log(e);
        }
    };

    return (
        <View>
            <View style={styles.header}></View>
            <View style={styles.design}></View>
            <View style={styles.main}>
                <View style={{alignItems:"center",marginTop:-10}}>
                    <Image style={{ width: 75, height: 75,borderRadius:100}} source={require('../../assets/images/image.png')} />
                </View>
                <Text style={{ color: "#043142", fontSize: 20, fontFamily: "poppins-bold" }}>Welcome Back..!</Text>
                <Text style={{ color: "#999999", fontSize: 14, fontFamily: "poppins-medium" ,marginTop:-10 }}>Unlock Focused, Distraction-free Learning</Text>
                <Text style={{ color: "#999999", fontSize: 14, fontFamily: "poppins-bold" }}>Login now</Text>
                <View style={styles.tabContainer}>
                    {['UserName', 'Mobile No'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tab, activeTab === tab && styles.activeTab]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{marginTop:-20}}>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Username/Email'
                        // value='username'
                        onChangeText={setUsername}
                    />
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder='Password'
                            // value='password'
                            onChangeText={setPassword}
                        />
                        <MaterialCommunityIcons name="eye-off-outline" size={24} color="grey" />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:10}}>
                    <Text style={{ color: "grey" }}>Remember Password</Text>
                    <Text style={{ color: "grey" }}>Forgot Password?</Text>
                </View>
                <TouchableOpacity
                    // onPress={() => }
                    style={styles.loginbutton}
                ><Text style={{ color: "white", fontSize: 14, fontFamily: "poppins-medium" }}>Login</Text></TouchableOpacity>
                <View style={{alignItems:"center",marginTop:10}}><Text style={{color:"grey",fontFamily:"poppins-medium"}}>Or continue with</Text></View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => promptAsync()}
                        style={styles.googlebutton}
                    >
                        <SimpleLineIcons name="social-google" size={24} color="black" />
                        <Text style={{ color: "#043142", fontSize: 14, fontFamily: "poppins-medium" }}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}
                        style={styles.googlebutton}
                    >
                        <FontAwesome name="apple" size={24} color="black" />
                        <Text style={{ color: "#043142", fontSize: 14, fontFamily: "poppins-medium" }}>Apple</Text>
                    </TouchableOpacity>
                </View>


                <View style={{color:"#999999",justifyContent:"center",alignItems:"center",marginTop:150}}><Text>Don't have an account! <Text style={{color:Colors.PRIMARY}}>Signup</Text></Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.PRIMARY,
        height: 100,
        padding: 40,
        paddingLeft: 16,
        paddingRight: 16,
    },
    design: {
        backgroundColor: Colors.lightyellow,
        height: 50,
        marginLeft: 16,
        marginRight: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -30,
    },
    main: {
        backgroundColor: 'white',
        height: 1070,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -30,
        padding: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
    tabContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 20,
        // marginLeft: 16,
        // marginRight: 16,
        height:50,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',

    },
    activeTab: {
        backgroundColor: Colors.PRIMARY, // Color from the image
        width: 103, // Width in px
        height: 40, // Height in px
        borderRadius: 7.5, // Rounded corners
        shadowColor: "#000000", // Drop shadow color with 10% opacity
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2, // For Android shadow support
    },
    tabText: {
        fontSize: 14,
        color: '#043142',
        fontFamily: 'poppins-medium',
    },
    activeTabText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'poppins-medium',
    },
    textinput: {
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 5,
        borderRadius: 10,
        borderColor: '#D6D6D6', // with 20% opacity
        borderWidth: 1,
        shadowColor: "#000000", // with 10% opacity
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    loginbutton: {
        backgroundColor: '#043142',
        height: 50,
        padding: 10,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googlebutton: {
        paddingRight: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 120,
        marginTop: 10,
        // marginLeft: 16,
        // marginRight: 16,
        borderRadius: 10,
        borderColor: '"black', // with 20% opacity
        borderWidth: 1,
        shadowColor: "#000000", // with 10% opacity
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2, // for Android shadow support
        justifyContent: 'space-evenly',
        gap: 20,
        
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16,
        marginRight: 16,
    }
})