import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function MyProfile() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    })
  }, [])
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.MyProfilecontainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name='arrow-back' size={32} color={"black"} />
        </TouchableOpacity>
        <Text>My Profile</Text>
      </View>
      {/* <Button title='go to Cabs Wale Premium Page' onPress={() => navigation.navigate('CabsWalePremium')} /> */}
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight

  },
  MyProfilecontainer: {
    flexDirection: "row",
    alignItems: "center"
  }
})