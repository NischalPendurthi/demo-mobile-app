import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import { ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    // const navigation = useNavigation<NavigationProp<MyTabs>>();

    const announcements = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et more ...',
            tags: ['Design', 'Persona', 'User Flow'],
            author: 'alexjames',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et more ...',
            tags: ['Design', 'Persona', 'User Flow'],
            author: 'alexjames',
        },
        // Add more announcements here
    ];
    return (
        <ScrollView>
            {/* top yellow container */}
            <View style={styles.container1}>
                <View style={styles.flex1}>
                    <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="white" />
                    <View style={styles.flex2}>
                        <Ionicons name="notifications" size={24} color="white" />
                        <TouchableOpacity onPress={()=>navigation.navigate("ChatScreen")}><MaterialIcons name="chat" size={24} color="white" /></TouchableOpacity>
                        <FontAwesome name="bookmark" size={24} color="white" />
                    </View>
                </View>
            </View>
            {/* top lightyellow container */}
            <View style={styles.container3}>
            </View>
            {/* main container */}
            <View style={styles.container2}>
                <Text style={{ fontSize: 20,fontFamily:'poppins-bold' }}>Annoucements</Text>
                {/* scroll view of profile images */}
                <View style={styles.profileContainer}>

                    <Image source={require('../../assets/images/profiles.png')} style={styles.profile} />

                    <Image source={require('../../assets/images/profiles.png')} style={styles.profile} />

                    <Image source={require('../../assets/images/profiles.png')} style={styles.profile} />

                    <Image source={require('../../assets/images/profiles.png')} style={styles.profile} />

                    <Image source={require('../../assets/images/profiles.png')} style={styles.profile} />
                </View>

                <Text style={styles.post}>Posts</Text>
                {announcements.map((announcement) => (
                    <View key={announcement.id} style={{ marginBottom: 20 }}>
                        <View style={styles.flex3}>
                            <Image source={require('../../assets/images/favicon.png')} style={{ width: 24, height: 24 }} />
                            <Text style={{ fontWeight: 'bold' }}>{announcement.author}</Text>
                            <View style={{ justifyContent: 'flex-end' }}><Entypo name="dots-three-vertical" size={24} color="black" /></View>
                        </View>
                        <View style={styles.annoucementContainer}>
                            <Image style={styles.badge} source={require('../../assets/images/Group 1999.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <AntDesign name="like2" size={24} color="black" />
                                <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                                <AntDesign name="sharealt" size={24} color="black" />
                            </View>
                            <Feather name="bookmark" size={24} color="black" />
                        </View>

                        <Text style={{ fontSize: 18, marginVertical: 5 ,fontFamily:"poppins-medium"}}>{announcement.title}</Text>
                        <Text style={{ color: 'gray',fontFamily:'poppins-regular'}}>{announcement.content}</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
                            {announcement.tags.map((tag, index) => (
                                <Text key={index} style={styles.tag}>{tag}</Text>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container1: {
        padding: 10,
        height: 150,
        backgroundColor: Colors.PRIMARY,
    },
    flex1: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flex2: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container3: {
        marginTop: -50,
        height: 50,
        marginLeft: 16,
        marginRight: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Colors.lightyellow,

    },
    container2: {
        padding: 20,
        marginTop: -30,
        height: 1383,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "white",
    },
    flex3: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        alignItems: 'center',
    },
    annoucementContainer: {
        height: 175,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'grey',
    },
    post:{
        width: 50,
        height: 50,
        // marginRight: 10,
        // marginLeft: 10,
        marginBottom: 10,
        marginTop: 0,
        fontFamily:'poppins-bold',
        // fontWeight: 'bold',
        fontSize  : 20,
    },
    tag: {
        backgroundColor: "#F5BE0026",
        padding: 5,
        height: 30,
        borderRadius: 7.5,
        marginRight: 5
    },
    badge: {
        width: 20,
        height: 20,
        justifyContent: 'flex-end',
        outlineColor: '#043142',
        borderWidth: 10,
    },
    badgeContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#043142',
    },
    profile:{
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },
    profileContainer:{
        width: 359,
        height: 50,
        flexDirection: 'row',

        // backgroundColor: 'white',
        // borderWidth: 1,
        // borderColor: '#043142',
    }
});
