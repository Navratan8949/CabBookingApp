// NotFoundScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 Page Not Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default NotFoundScreen;
