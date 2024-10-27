import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from "../../constants/Colors";

import SvgComponent from "../../assets/SVG/last-bro";
const Gradient = ({ children }) => {
    return (
        <LinearGradient
            colors={['#FFFFFF80', '#FFD000']}
            style={{ marginTop:-200,flex: 1 }}
        >
            {children}
        </LinearGradient>
    );
};

export default function Onboard4({ navigation }) {
    return (
        <Gradient>
            <SvgComponent />
            <View style={styles.main}>
                <Text style={styles.title}>Track Your Progress</Text>
                <Text style={styles.subtitle}>Use our analytics tools to monitor your</Text>
                <Text style={styles.subtitle}>learning journey, get detailed feedback,</Text>
                <Text style={styles.subtitle}>insights, celebrate your achievements and  </Text>
                <Text style={styles.subtitle}>identify areas for improvement.</Text>
                <TouchableOpacity 
                    style={styles.next} 
                    onPress={() => navigation.navigate('LoginScreen')}
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
        marginTop:-300,
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
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center",
    }
});

        // <Text style={{ color: "#043142", fontFamily: "poppins-bold", fontSize: 20 }}>Track Your Progress</Text>
        // <Text style={{ color: "#043142", fontFamily: "poppins-medium" }}>Use our analytics tools to monitor your</Text>
        // <Text style={{ color: "#043142", fontFamily: "poppins-medium" }}>learning journey, get detailed feedback, </Text>
        // <Text style={{ color: "#043142", fontFamily: "poppins-medium" }}>insights, celebrate your achievements and  </Text>
        // <Text style={{ color: "#043142", fontFamily: "poppins-medium" }}>identify areas for improvement.</Text>