import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawerlist = [
    { icon: "home-outline", label: "Home", NavigateTo: "Home" },
    { icon: "account-multiple", label: "Profile", NavigateTo: "Profile" },
    { icon: "account-group", label: "MyAlerts", NavigateTo: "MyAlerts" },
    // { icon: "bookshelf", label: "Cart", NavigateTo: "Cart" },
    // { icon: "qrcode-scan", label: "QR-Code", NavigateTo: "QRCode" },
    // { icon: "map-marker", label: "Location Management", NavigateTo: "LocationManagment" },
    // { icon: "map-marker", label: "Employee Manager", NavigateTo: "EmployeeManager" },
    // { icon: "bookshelf", label: "ItemKitsTab", NavigateTo: "ItemKitsTab" },
    // { icon: "tools", label: "Tools-Dashboard", NavigateTo: "Tools-Dashboard" }
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
    const navigation = useNavigation();

    return (
        <DrawerItem
            icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
            label={label}
            onPress={() => {
                navigation.navigate(navigateTo);
            }}
            style={styles.drawerItem}
            labelStyle={styles.drawerItemLabel}
        />
    );
};

const DrawerItems = () => {
    return Drawerlist.map((el, i) => {
        return (
            <DrawerLayout
                key={i}
                icon={el.icon}
                label={el.label}
                navigateTo={el.NavigateTo}
            />
        );
    });
};

export default function DrawerContent(props) {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity style={styles.profileContainer}>
                    <View style={styles.profileContent}>
                        <Ionicons name='person' size={30} color='gray' />
                        <View>
                            <Text>Navratan</Text>
                            <Text>Navratan0442@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <DrawerItems />
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity style={styles.signOutContainer} onPress={() => navigation.navigate('Login')}>
                <Ionicons name='log-out-outline' size={24} color='black' />
                <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        marginTop: 15,
        paddingLeft: 23,
        marginBottom: 20,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    drawerItem: {
        marginVertical: 0,
        paddingHorizontal: 10,
    },
    drawerItemLabel: {
        marginLeft: -16, // Adjust this value to align with the icon
        fontSize: 17
    },
    signUpContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    signUpText: {
        fontSize: 16
    },
    signOutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    signOutText: {
        fontSize: 16,
        marginLeft: 10
    }
});
