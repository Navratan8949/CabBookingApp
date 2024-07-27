import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default function CallsScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.heading}>Calls</Text>
      <View style={Styles.callsContainer}>
        <View style={Styles.callsBoxes}>
          <Text style={Styles.callsContainertext}>
            Calls Recieved
          </Text>
          <Text style={Styles.callsContainertext}>0</Text>
        </View>
        <View style={Styles.blankLine}></View>
        <View style={Styles.callsBoxes}>
          <Text style={Styles.callsContainertext}>
            Calls Done
          </Text>
          <Text style={Styles.callsContainertext}>0</Text>
        </View>
      </View>
      <View style={Styles.RecentCallContainer}>
        <Text style={Styles.callsContainertext}>Recent Calls</Text>
      </View>
    </View >
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 30,
  },
  callsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.9,
    borderTopColor: "black",
    borderBottomWidth: 0.9,
    borderBlockColor: "black",
    // marginHorizontal: 20
    padding: 10,
    height: 100
  },
  callsBoxes: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  callsContainertext: {
    fontSize: 20,
    fontWeight: "300"
  },
  blankLine: {
    width: 0.8,
    height: 80,
    backgroundColor: "black"
  },
  RecentCallContainer: {
    alignItems: "center",
    margin: 20,
  }
})