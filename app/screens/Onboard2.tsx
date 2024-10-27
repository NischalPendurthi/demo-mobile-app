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

export default function Onboard2({ navigation }) {
    return (
        <Gradient>
            <SvgComponent />
            <View style={styles.main}>
                <Text style={styles.title}>Personalized Learning Paths</Text>
                <Text style={styles.subtitle}>Set your goals and interests to receive tailored</Text>
                <Text style={styles.subtitle}>course recommendations. We curate content</Text>
                <Text style={styles.subtitle}>just to help you stay motivated and achieve</Text>
                <Text style={styles.subtitle}>your objectives.</Text>
                <TouchableOpacity
                    style={styles.next}
                    onPress={() => navigation.navigate('Onboard3')}
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
