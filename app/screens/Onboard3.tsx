import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from "../../constants/Colors";
import SvgComponent from "../../assets/SVG/inter-bro";
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

export default function Onboard3({ navigation }) {
    return (
        <Gradient>
            <SvgComponent />
            <View style={styles.main}>
                <Text style={styles.title}>Interactive & Engaging Features</Text>
                <Text style={styles.subtitle}>Dive into a variety of interactive modules,</Text>
                <Text style={styles.subtitle}>quizzes, and community discussions. We</Text>
                <Text style={styles.subtitle}>make learning fun and interactive, ensuring</Text>
                <Text style={styles.subtitle}>you stay on track.</Text>
                <TouchableOpacity 
                    style={styles.next} 
                    onPress={() => navigation.navigate('Onboard4')}
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
