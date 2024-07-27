import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HeaderScrollColorchanger() {
    const [headerBackgroundColor, setHeaderBackgroundColor] = useState("#f5f5f5");

    const handleScroll = (event) => {
        const scrollOffsetY = event.nativeEvent.contentOffset.y;
        if (scrollOffsetY > 10) {
            setHeaderBackgroundColor("green")
        }
        else {
            setHeaderBackgroundColor("#f5f5f5")
        }
    }

    return (
        <View>
            <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
                <Text style={styles.headerText}>CallsScreen</Text>
            </View>
            <ScrollView onScroll={handleScroll}>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    }
})