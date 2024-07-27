import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from '../componant/SettingsScreen';
import ProfileScreen from '../componant/ProfileScreen';
import MoreScreen from '../componant/MoreScreen';
import CenterScreen from '../componant/CenterScreen';


const Tab = createBottomTabNavigator();

function OtherTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Center') {
            return <Ionicons name="add-circle" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'More') {
            iconName = 'ellipsis-horizontal';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: route.name !== 'Center',
        tabBarStyle: { display: route.name === 'Center' ? 'none' : 'flex' },
      })}
    >
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Center"
        component={CenterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default OtherTabNavigator;
