import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {useFonts} from 'expo-font';
import MyTabs from "./navigation/navigator";
import AppLoading from 'expo-app-loading';

export default function App() {

    const [fontsLoaded] = useFonts({
        'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <MyTabs />
    );
}