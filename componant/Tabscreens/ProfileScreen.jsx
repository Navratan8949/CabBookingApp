import { View, Text, Pressable, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BlurView } from 'expo-blur';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.drawerContainer}>
      <BlurView
        intensity={80}
        style={[
          styles.profileVerified,
          {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            overflow: 'hidden',
            backgroundColor: 'transparent',
          },
        ]}
      >
        <Text style={styles.profileText}>Profile</Text>
        <Pressable style={styles.profileVerifiedButton}>
          <Text style={styles.profileVerifiedButtonText}>NOT VERIFIED</Text>
        </Pressable>
      </BlurView>
      <ScrollView>
        <View style={styles.startMembership}>
          <Text style={styles.startMembershiptext}>Start Membership</Text>
          <TouchableOpacity style={styles.RechargenowButton}>
            <Text style={styles.RechargenowButtonText}>Recharge Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profilecontainer}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('MyProfile')}
          >
            <View style={styles.drawerContenttext}>
              <Ionicons name="person-outline" size={20} color={'black'} />
              <Text style={styles.InactiveItemText}>My Profile</Text>
            </View>
            <View>
              <MaterialIcons name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('CabsWalePremium')}
          >
            <View style={styles.drawerContenttext}>
              <Ionicons name="star-outline" size={20} color={'#333'} />
              <Text style={styles.InactiveItemText}>CabsWale Premium</Text>
            </View>
            <View>
              <MaterialIcons name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('MyAlerts')}
          >
            <View style={styles.drawerContenttext}>
              <Ionicons name="alert-outline" size={20} color={'#333'} />
              <Text style={styles.InactiveItemText}>My Alerts</Text>
            </View>
            <View>
              <MaterialIcons name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  profileVerified: {
    alignItems: 'center',
    padding: 20,
  },
  profileText: {
    fontSize: 24,
  },
  profileVerifiedButton: {
    backgroundColor: '#03A0FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  profileVerifiedButtonText: {
    color: 'white',
    letterSpacing: 1,
    fontSize: 15,
  },
  startMembership: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  startMembershiptext: {
    fontSize: 15,
  },
  RechargenowButton: {
    backgroundColor: '#03A0FF',
    paddingVertical: 2,
    paddingHorizontal: 7,
  },
  RechargenowButtonText: {
    color: 'white',
    fontSize: 15,
  },
  profilecontainer: {
    gap: 15,
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  drawerContenttext: {
    gap: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  drawerItemText: {
    fontSize: 18,
    marginLeft: 15,
    color: 'white',
  },
  activeItem: {
    backgroundColor: '#03A0FF',
  },
  InactiveItemText: {
    fontSize: 18,
    marginLeft: 15,
    color: 'black',
  },
});
