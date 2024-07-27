import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import AllRoutes from './Routes/Routes'

export default function App() {
  return (
    <View style={Styles.container}>
      <AllRoutes />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight
  }
})