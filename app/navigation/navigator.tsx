import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from "../screens/HomeScreen";
import Onboard1 from "../screens/Onboard1";
import Onboard2 from "../screens/Onboard2";
import Onboard3 from "../screens/Onboard3";
import Onboard4 from "../screens/Onboard4";
import Allquizzes from '../screens/Allquizzes';
import QuizScreen from "../screens/QuizScreen";
import LoginScreen from '../screens/LoginScreen';
import LeaderBoard from '../screens/LeaderBoard';
import ChatScreen from '../screens/ChatScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const isSignedIn = true;
export default function MyTabs() {
    if (isSignedIn) {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeScreen" component={HomeScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="home" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="Allquizzes" component={Allquizzes}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="search" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="Quiz" component={QuizScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="pluscircleo" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="ChatScreen" component={ChatScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="book" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="LeaderBoard" component={LeaderBoard}
                    options={{
                        tabBarLabel: "",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
                        ),
                    }} />
            </Tab.Navigator>
        );
    } else {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboard1">
                <Stack.Screen name="Onboard1" component={Onboard1} />
                <Stack.Screen name="Onboard2" component={Onboard2} />
                <Stack.Screen name="Onboard3" component={Onboard3} />
                <Stack.Screen name="Onboard4" component={Onboard4} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        );
    }
}