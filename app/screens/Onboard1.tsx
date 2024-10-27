import React from "react";
import { ImageBackground } from 'react-native';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SvgUri } from 'react-native-svg';
import Bro from "../../assets/SVG/learning-bro";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from "../../constants/Colors";

const Gradient = ({ children }) => {
    return (
        <LinearGradient
            colors={['#FFFFFF80', '#FFD000']}
            style={{ marginTop:-200, flex: 1 }}
        >
            {children}
        </LinearGradient>
    );
};

export default function Onboard1({ navigation }) {
    return (
            <Gradient>
                <Bro />
            <View style={styles.main}>
                <Text style={styles.title}>Welcome To ScaleUp!</Text>
                <Text style={styles.subtitle}>Your journey to focused, distraction-free</Text>
                <Text style={styles.subtitle}>learning starts here. Discover a platform</Text>
                <Text style={styles.subtitle}>designed to enhance your knowledge and</Text>
                <Text style={styles.subtitle}>keep you engaged.</Text>
                <TouchableOpacity
                    style={styles.next}
                    onPress={() => navigation.navigate('Onboard2')}
                >
                    <MaterialIcons name="navigate-next" size={24} color={Colors.PRIMARY} />
                </TouchableOpacity>
            </View>
            </Gradient>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -300,
    },
    title: {
        color: "#043142",
        fontFamily: "poppins-bold",
        fontSize: 16,
    },
    subtitle: {
        color: "#043142",
        fontFamily: "poppins-medium",
        fontSize: 12,
    },
    next: {
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        width: 40,
        height: 40,
        marginTop: 70,
        justifyContent: "center",
        alignItems: "center",
    }
});
