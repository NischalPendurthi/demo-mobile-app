import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function QuizScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container1}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>

                    <View style={{ flexDirection: 'row', gap: 5, }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="back" size={24} color="white" /></TouchableOpacity>
                        <Text style={{ color: "white", fontFamily: "poppins-bold", fontSize: 20 }}>Quiz</Text>
                    </View>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                </View>
            </View>
            <View style={styles.container2} >

            </View>
            <View style={styles.container3}>
                <View style={styles.ranking}>
                    <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/reward.png')} />
                    <View >
                        <Text style={{ color: "white", fontFamily: "poppins-bold" }}>20</Text>
                        <Text style={{ color: "white", fontFamily: "poppins-medium" }}>World Ranking</Text>
                    </View>
                    <View style={{ height: 40, width: 1, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Image source={require('../../assets/images/favourites.png')} />
                    <View>
                        <Text style={{ color: "white", fontFamily: "poppins-bold" }}>12000</Text>
                        <Text style={{ color: "white", fontFamily: "poppins-medium" }}>Points earned</Text>
                    </View>
                </View>
                <View style={styles.lastquiz}>
                    <Text style={{ color: "black", fontFamily: "poppins-bold", fontSize: 12 }}>LAST QUIZ</Text>
                    <Text style={{ color: "white", fontFamily: "poppins-bold", fontSize: 14 }}>UI/UX Design</Text>
                    <Text style={{ color: "white", fontFamily: "poppins-medium", fontSize: 12 }}>Points:150</Text>
                    <View style={{ flexDirection: 'row', gap: 5, marginTop: 5 }}>
                        <Image source={require('../../assets/images/gold-medal.png')} />
                        <Text style={{ color: "white", fontFamily: "poppins-medium", fontSize: 12 }}>Rank: 1</Text>
                    </View>
                </View>
                <View style={styles.featured}>
                    <Text style={{ color: Colors.PRIMARY, fontFamily: "poppins-bold", fontSize: 12 }}>FEATURED</Text>
                    <Text style={{ color: "white", fontFamily: "poppins-bold", fontSize: 14 }}>Amazing Quizzes lined up for you all in</Text>
                    <Text style={{ color: "white", fontFamily: "poppins-bold", fontSize: 14 }}>Upcoming Monts</Text>
                    <Text style={{ color: "white", fontFamily: "poppins-medium", fontSize: 12, marginTop: 7 }}>Stay Tuned..!</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: "white", fontFamily: "poppins-medium", fontSize: 12 }} >Turn on Notifications</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.allquizzes}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Allquizzes')}
                    >
                        <Text style={{ color: "white", fontFamily: "poppins-bold", fontSize: 16, }}>View All Quizzes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
        height: 150,
        backgroundColor: Colors.PRIMARY,
    },
    container2: {
        padding: 20,
        backgroundColor: Colors.lightyellow,
        marginTop: -90,
        marginLeft: 16,
        marginRight: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container3: {
        // padding: 20,
        paddingTop: 10,

        backgroundColor: 'white',
        height: "100%",
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    ranking: {
        padding: 20,
        // paddingTop: 10,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        height: 75,
        opacity: 100,
        backgroundColor: "#043142",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastquiz: {
        padding: 10,
        height: 111,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY,
        flexDirection: 'column',
        alignItems: 'center',
    },
    featured: {
        height: 190,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        padding: 30,
        borderRadius: 10,
        backgroundColor: "#043142",
        flexDirection: 'column',
        alignItems: 'center',

    },
    allquizzes: {
        height: 111,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 7,
        backgroundColor: '#F5BE00',
        width: 160,
        height: 30,
        borderRadius: 10, // Set border radius here
        alignItems: 'center',
        justifyContent: 'center',
    },
});