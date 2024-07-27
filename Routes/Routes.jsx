



import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, useNavigation, DrawerActions, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SettingsScreen from '../Componants/SettingsScreen';
import CenterScreen from '../componant/Tabscreens/CenterScreen';
import ProfileScreen from '../componant/Tabscreens/ProfileScreen';
import MyProfile from '../componant/SideDrawerComponant/MyProfile';
import CabsWalePremium from '../componant/SideDrawerComponant/CabsWalePremium';
import MyAlerts from '../componant/SideDrawerComponant/MyAlerts';
import HomeScreen from '../componant/Tabscreens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DriverList from '../Componants/CenterTaB/DriverList';
import CallsScreen from '../componant/Tabscreens/CallsScreen';
import LocationScreen from '../componant/Tabscreens/LocationScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const drawerItems = [
    // { name: 'HomeScreen', label: 'Home', icon: 'home-outline' },
    { name: 'MyProfile', label: 'My Profile', icon: 'person-outline' },
    { name: 'CabsWalePremium', label: 'CabsWale Premium', icon: 'star-outline' },
    { name: 'MyAlerts', label: 'My Alerts', icon: 'alert-outline' },
];

function DrawerContent(props) {
    const [activeItem, setActiveItem] = React.useState(null);

    const handlePress = (routeName) => {
        setActiveItem(routeName);
        props.navigation.navigate(routeName);
    };

    return (
        <View style={styles.drawerContainer}>
            <ScrollView>
                {/* <View style={styles.profileSection}>
                    <Image
                        source={require('../assets/Profile.jpg')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>John Doe</Text>
                    <Pressable style={styles.profileVerifiedButton}>
                        <Text style={styles.profileVerifiedButtonText}>NOT VERIFIED</Text>
                    </Pressable>
                </View> */}
                <View style={styles.profileVerified}>
                    <Text style={styles.profileText}>Profile</Text>
                    <Pressable style={styles.profileVerifiedButton}>
                        <Text style={styles.profileVerifiedButtonText}>NOT VERIFIED</Text>
                    </Pressable>
                </View>
                <View style={styles.startMembership}>
                    <Text style={styles.startMembershiptext}>Start Membership</Text>
                    <TouchableOpacity style={styles.RechargenowButton}>
                        <Text style={styles.RechargenowButtonText}>Recharge Now</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.drawerItem, styles.activeItem]}
                    onPress={() => handlePress('HomeScreen')}
                >
                    <View style={styles.drawerContenttext}>
                        <Ionicons name="home-outline" size={20} color={'white'} />
                        <Text style={[styles.drawerItemTextHome]}>Home</Text>
                    </View>
                    <View>
                        <MaterialIcons
                            name="chevron-right"
                            size={24}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
                {drawerItems.map((item) => (
                    <TouchableOpacity
                        key={item.name}
                        style={[styles.drawerItem]}
                        onPress={() => handlePress(item.name)}
                    >
                        <View style={styles.drawerContenttext}>
                            <Ionicons name={item.icon} size={20} color={'black'} />
                            <Text style={[styles.drawerItemText]}>{item.label}</Text>
                        </View>
                        <View>
                            <MaterialIcons
                                name="chevron-right"
                                size={24}
                                color={'black'}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Logging out')}>
                    <Ionicons name="log-out-outline" size={20} color="white" />
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function DrawerNavigator() {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{
            headerRight: () => (
                navigation.canGoBack() ? null : (
                    <Entypo
                        name='menu'
                        size={30}
                        color="black"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                )
            ),
            headerLeft: () => (
                navigation.canGoBack() ? (
                    <Ionicons
                        name="arrow-back-outline"
                        size={30}
                        color="white"
                        onPress={() => navigation.goBack()}
                    />
                ) : (
                    <Text style={{ fontSize: 27, color: 'black', fontStyle: 'italic', width: 100 }}>Flipcart</Text>
                )
            )
        }}>
            <Drawer.Screen name="Stack" component={StackNav} options={{
                headerShown: false
            }} />
        </Drawer.Navigator>
    );
}

function StackNav() {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: "center"
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                // headerShown: false
            }} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="CabsWalePremium" component={CabsWalePremium} />
            <Stack.Screen name="MyAlerts" component={MyAlerts} />
        </Stack.Navigator>
    );
}

function ProfileStackNav() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: "center"
        }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="CabsWalePremium" component={CabsWalePremium} />
            <Stack.Screen name="MyAlerts" component={MyAlerts} />
        </Stack.Navigator>
    );
}

function CenterStackNav() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: "center"
        }}>
            <Stack.Screen name="CenterScreen" component={CenterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DriverList" component={DriverList} />
        </Stack.Navigator>
    );
}

function getTabBarVisibility(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    if (routeName === 'MyProfile' || routeName === 'CabsWalePremium' || routeName === 'MyAlerts' || routeName === 'DriverList') {
        return 'none';
    }
    return 'flex';
}

function MainNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Location') {
                        iconName = 'location-outline';
                    } else if (route.name === 'Center') {
                        return <Image source={require('../assets/Profile.jpg')} style={{ width: 60, height: 60, borderRadius: 30, bottom: 20 }} />;
                    } else if (route.name === 'Calls') {
                        iconName = 'call-outline';
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    display: getTabBarVisibility(route),
                }
            })}
        >
            <Tab.Screen name="Home" component={DrawerNavigator} options={{
            }} />
            <Tab.Screen name="Location" component={LocationScreen} />
            <Tab.Screen name="Center" component={CenterStackNav} options={{
                // tabBarShowLabel: false,  ---->>>  ye tab use karte hai jab hamko sabi tab ke name hide karne ko tab isko tab navigater me lagte hai
                tabBarLabel: () => null,
            }} />
            <Tab.Screen name="Calls" component={CallsScreen} />
            <Tab.Screen name="Profile" component={ProfileStackNav} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f5f5f5',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    profileVerified: {
        alignItems: "center",
        padding: 20,
    },
    profileText: {
        fontSize: 24,
    },
    profileVerifiedButton: {
        backgroundColor: "#03A0FF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    profileVerifiedButtonText: {
        color: "white",
        letterSpacing: 1,
        fontSize: 15,
    },
    startMembership: {
        backgroundColor: '#4CAF50',
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    startMembershiptext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    RechargenowButton: {
        backgroundColor: '#FF9800',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        // backgroundColor: '#388E3C',
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        // borderRadius: 10,
        // marginTop: 10,
    },
    RechargenowButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    drawerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        marginVertical: 5,
    },
    activeItem: {
        backgroundColor: '#4CAF50',
    },
    drawerContenttext: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerItemTextHome: {
        marginLeft: 10,
        fontSize: 16,
        color: "white"
    },
    drawerItemText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
    },
    activeItemText: {
        color: 'white',
    },
    bottomContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    logoutButtonText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'white',
    },
});
