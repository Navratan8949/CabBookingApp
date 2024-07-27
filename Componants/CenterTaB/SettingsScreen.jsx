import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SettingsScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    })
  })
  return (
    <ScrollView style={Styles.container} >
      <View>
        <Text>SettingsScreen</Text>
      </View>
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray"
  }
})
