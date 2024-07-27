import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../componant/HomeScreen';
import MyProfile from '../componant/SideDrawerComponant/MyProfile';
import CabsWalePremium from '../componant/SideDrawerComponant/CabsWalePremium';
import MyAlerts from '../componant/SideDrawerComponant/MyAlerts';

const Drawer = createDrawerNavigator();

function DrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.drawerItem} onPress={() => navigation.navigate('My Profile')}>My Profile</Text>
      <Text style={styles.drawerItem} onPress={() => navigation.navigate('CabsWalePremium')}>CabsWalePremium</Text>
      <Text style={styles.drawerItem} onPress={() => navigation.navigate('MyAlerts')}>My Alerts</Text>
    </View>
  );
}

function HomeDrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My Profile" component={MyProfile} />
      <Drawer.Screen name="CabsWalePremium" component={CabsWalePremium} />
      <Drawer.Screen name="MyAlerts" component={MyAlerts} />
    </Drawer.Navigator>
  );
}

export default HomeDrawerNavigator;

const styles = StyleSheet.create({
  drawerItem: {
    padding: 20,
    fontSize: 18,
  },
});
