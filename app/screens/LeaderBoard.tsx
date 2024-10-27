import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function LeaderBoard() {
    const navigation = useNavigation();

    const leaderboardData = [
        { id: '1', name: 'John Doe', points: 10, designation: 'Software Engineer' },
        { id: '2', name: 'Jane Smith', points: 2, designation: 'UX Designer' },
        { id: '3', name: 'Bob Johnson', points: 8, designation: 'Product Manager' },
        { id: '4', name: 'Alice Brown', points: 7, designation: 'Data Scientist' },
        { id: '5', name: 'Charlie Davis', points: 6, designation: 'Marketing Specialist' },
        { id: '6', name: 'Eva Wilson', points: 5, designation: 'Frontend Developer' },
        { id: '7', name: 'George Martin', points: 4, designation: 'Backend Developer' },
        { id: '8', name: 'Hannah Lee', points: 3, designation: 'QA Engineer' },
        { id: '9', name: 'Ian Clark', points: 2, designation: 'DevOps Engineer' },
        { id: '10', name: 'Julia Adams', points: 1, designation: 'Project Manager' },
    ];
    const LeaderboardData = leaderboardData.sort((a, b) => b.points - a.points);
    const [activeTab, setActiveTab] = useState('Today');

    const renderLeaderboardItem = ({ item, index }) => (
        <View style={styles.scorecard}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: Colors.PRIMARY, fontFamily: "poppins-bold", fontSize: 16 }}>{index + 1}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 50, height: 50, marginLeft: 15 }} source={require('../../assets/images/p2.png')} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: "#043142", fontSize: 14, fontFamily: "poppins-bold" }}>{item.name}</Text>
                        <Text style={{ color: "#777777", fontSize: 12, fontFamily: "poppins-medium" }}>{item.designation}</Text>
                    </View>
                </View>
            </View>
            <Text style={{ color: "#043142", fontSize: 16, fontFamily: "poppins-medium" }}>{item.points} Points</Text>
        </View>
    );

    const renderPodium = () => (
        <View style={styles.podium}>
            {LeaderboardData.slice(0, 3).map((data, idx) => (
                <View key={data.id} style={styles.bar}>
                    <Image style={{ width: 100, height: 100 }} source={require(`../../assets/images/p7.png`)} />
                    <Text style={{ color: "#043142", fontSize: 14, fontFamily: "poppins-bold" }}>{data.name}</Text>
                    <Text style={{ color: "#043142", fontSize: 16, fontFamily: "poppins-medium" }}>{data.points} Points</Text>
                    <View style={[styles.bargrapgh, { height: data.points * 12, backgroundColor: `rgba(245, 190, 0, ${0.8 - idx * 0.2})` }]} />
                </View>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="back" size={24} color="white" /></TouchableOpacity>
                        <Text style={{ color: "white", fontFamily: "poppins-bold", fontSize: 20 }}>Leaderboard</Text>
                    </View>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                </View>
            </View>
            <View style={styles.design}></View>
            <View style={styles.main}>
                <View style={{flexDirection:'column',justifyContent:"flexend"}}>
                    <View style={styles.tabContainer}>
                        {['Today', 'All Time', 'Weekly'].map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.tab, activeTab === tab && styles.activeTab]}
                                onPress={() => setActiveTab(tab)}
                            >
                                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <FlatList
                    data={LeaderboardData}
                    ListHeaderComponent={renderPodium}
                    renderItem={renderLeaderboardItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.PRIMARY,
        height: 150,
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
        marginTop: -50,
    },
    main: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -30,
        paddingBottom: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 16,
        marginRight: 16,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#043142',
        width: 103,
        height: 40,
        borderRadius: 7.5,
        shadowColor: "#000000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
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
    scorecard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: 1,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        height: 75,
        backgroundColor: "white"
    },
    podium: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 20,

    },
    bar: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bargrapgh: {
        width: 100,
        marginTop: 10,
        borderRadius: 10,
    },
});
