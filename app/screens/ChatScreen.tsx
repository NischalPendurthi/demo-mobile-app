import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
    const navigation = useNavigation();
    const quizzes = [
        // { id: '1', name: 'IMO quiz', category: 'Category', date: '10/09/2024', time: '10:00 am', reward: 'Surprise Reward for Top 3 Winners' },
        // { id: '2', name: 'RMO quiz', category: 'Category', date: '10:00 am', time: '10/09/2024', reward: 'Surprise Reward for Top 3 Winners' },
        // { id: '3', name: 'DAI quiz', category: 'Category', date: '10:00 am', time: '10/09/2024', reward: 'Surprise Reward for Top 3 Winners' },
        // { id: '4', name: 'DSA quiz', category: 'Category', date: '10:00 am', time: '10/09/2024', reward: 'Surprise Reward for Top 3 Winners' },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('UPCOMING');

    const filteredQuizzes = quizzes.filter(quiz =>
        quiz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quiz.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderQuizItem = ({ item }: { item: { id: string, name: string, category: string, date: string, time: string, reward: string } }) => (
        <View style={styles.quizcard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Image style={{ width: 45, height: 45, marginLeft: 15 }} source={require('../../assets/images/devices.png')} />
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <Text style={{ color: "#043142", fontSize: 14, fontFamily: "poppins-bold" }}>{item.name}</Text>
                        <Text style={{ color: "#777777", fontSize: 12, fontFamily: "poppins-medium" }}>{item.category}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ color: "#043142", fontSize: 14, fontFamily: "poppins-bold" }}>{item.date}</Text>
                    <Text style={{ color: "#777777", fontSize: 12, fontFamily: "poppins-medium" }}>{item.time}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 5, marginTop: 20 }}>
                <Image style={{ width: 20, height: 20, marginLeft: 15 }} source={require('../../assets/images/gift.png')} />
                <Text style={{ color: "#777777", fontSize: 12, fontFamily: "poppins-medium" }}>{item.reward}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={filteredQuizzes}
            renderItem={renderQuizItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={
                <>
                    <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="back" size={24} color="white" /></TouchableOpacity>
                                <Text style={{ color: "white", fontFamily: "poppins-bold", fontSize: 20 }}>Chats</Text>
                            </View>
                            <Entypo name="dots-three-vertical" size={24} color="white" />
                        </View>
                    </View>
                    <View style={styles.searchbar}>
                        <AntDesign name="search1" size={24} color="grey" />
                        <TextInput
                            style={{ width: 250 }}
                            placeholder="Search"
                            placeholderTextColor="grey"
                            onChangeText={(text) => setSearchQuery(text)}
                        />
                    </View>
                    <View style={styles.tabContainer}>
                        {['UPCOMING', 'ACTIVE', 'COMPLETED'].map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.tab, activeTab === tab && styles.activeTab]}
                                onPress={() => setActiveTab(tab)}
                            >
                                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            }
            ListFooterComponent={
                filteredQuizzes.length === 0 ? (
                    <View style={styles.noquiz}>
                        <Text style={{ color: "#043142", fontSize: 20, fontFamily: "poppins-bold", marginTop: 200 }}>No Upcoming Quizzes</Text>
                        <Text style={{ color: "#999999", fontFamily: "poppins-medium", marginTop: 10 }}>You're all set for now! No quizzes</Text>
                        <Text style={{ color: "#999999", fontFamily: "poppins-medium" }}> are scheduled. Keep exploring and stay sharp!</Text>
                        <TouchableOpacity style={styles.explore}>
                            <Text style={{ color: "white", fontFamily: "poppins-bold" }}>Explore Content</Text>
                        </TouchableOpacity>
                    </View>
                ) : null
            }
        />
    );
}

const styles = StyleSheet.create({
    header: {
        // padding: 10,
        paddingTop: 20,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: Colors.PRIMARY,
        height: 100,
        marginTop: 0,

    },
    searchbar: {
        marginTop: -40,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
    },
    tabContainer: {
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'row',
        marginBottom: 10,
    },
    tab: {
        flex: 1,
        paddingVertical: 2,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 4,
        borderBottomColor: Colors.PRIMARY,
    },
    tabText: {
        color: 'grey',
        fontFamily: 'poppins-bold',
    },
    activeTabText: {
        color: Colors.PRIMARY,
        fontFamily: 'poppins-bold',
    },
    noquiz: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    explore: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#043142",
        borderRadius: 10,
        width: 300,
        marginLeft: 16,
        marginRight: 16,
        height: 50,
        marginTop: 20,
    },
    quizcard: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: '#D6D6D6',
        borderWidth: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    }
});
