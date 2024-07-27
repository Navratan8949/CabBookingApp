import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, StatusBar, SafeAreaView, TouchableOpacity, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CenterScreen() {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("#f5f5f5");

  const CommunityFeaturesData = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Drivers List"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      title: "Nearby Drivers "
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      title: "  Verify Account"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/50",
      title: " Top Routes"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/50",
      title: "Top Pickup Locations "
    },
    {
      id: 6,
      image: "https://via.placeholder.com/50",
      title: " Top Drop Locations "
    },
  ]

  const handleScroll = (event) => {
    const scrollOffsetY = event.nativeEvent.contentOffset.y;
    if (scrollOffsetY > 10) {
      setHeaderBackgroundColor("green")
    }
    else (
      setHeaderBackgroundColor("#f5f5f5")
    )
  };

  const handlecall = () => {
    const phonenumber = "tel:8949936535";
    Linking.openURL(phonenumber).catch(err =>
      console.error("failed to open dialer" + err)
    )
  }

  // const handleWhatsappCall = () => {
  //   const phonenumber = "tel:+918949936535";
  //   const url = `whatsapp://send?phone=${phonenumber}`;
  //   Linking.openURL(url).catch(err => console.error("failed to open whatsapp" + err))
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
        <Text style={styles.headerText}>Calls</Text>
      </View> */}
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <View style={styles.cardfirst}>
          <Image style={styles.cardImageFirst} source={{ uri: "https://via.placeholder.com/100" }} />
          <Text style={styles.cardTitleFirst}>CabsWale Community features are to help drivers and free to use  </Text>
        </View>

        <View style={styles.cardsContainer}>
          {
            CommunityFeaturesData.map((items) => (
              <Pressable style={styles.card} key={items.id}>
                <Image style={styles.cardImage} source={{ uri: items.image }} />
                <Text style={styles.cardTitle}>{items.title} </Text>
              </Pressable>
            ))
          }
        </View>

        <TouchableOpacity style={styles.callButton} onPress={handlecall} >
          <Icon name='call' color={"white"} size={18} />
          <Text style={styles.callButtontext}>Call Cabswale</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.callButton} onPress={handleWhatsappCall} >
          <Icon name='call' color={"white"} size={18} />
          <Text style={styles.callButtontext}>Whatsapp</Text>
        </TouchableOpacity> */}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    // marginBottom: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 70,
    marginBottom: 20,
  },
  cardfirst: {
    width: "100%",
    marginTop: 20,
  },
  cardTitleFirst: {
    fontSize: 22,
    textAlign: "center"
  },
  cardImageFirst: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  card: {
    width: '48%',
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
  },
  cardImage: {
    width: 70,
    height: 60,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
  },
  callButton: {
    backgroundColor: "blue",
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 30
  },
  callButtontext: {
    textAlign: "center",
    color: "white"
  },
});
