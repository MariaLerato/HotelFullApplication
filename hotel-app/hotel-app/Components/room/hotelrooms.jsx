import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import HotelRooms from "./maping";
import axios from "axios";

const hotelroom = ({ navigation, route }) => {
  const { roomNo, main, name, longitude, latitude, dateIn, dateOut, guestNo,location } =
    route.params;
  const [hotelrooms, setHotelRoom] = useState([]);

  const retrieveData = () => {
    axios
      .get(`http://b244-156-0-230-6.ngrok.io/api/v1/hotelRoom`)
      .then((res) => {
        console.log(res.data);
        setHotelRoom(res.data.hotelrooms);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.header}>
        <Icon
          name={"arrow-back"}
          color={"#1C5248"}
          style={{ fontWeight: "700", marginTop: "17%" }}
          onPress={() => navigation.goBack()}
        />
        <Text style={Styles.textHead}>Our Rooms</Text>
      </View>
      <View>
        {hotelrooms.map((data) => (
          <View key={data.id}>
            <View style={Styles.subHead}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("detail", {
                    hotelname: data.name,
                    price: data.price,
                    des: data.text,
                    roomNo: roomNo,
                    main: main,
                    name: name,
                    dateIn: dateIn,
                    dateOut: dateOut,
                    roomName: data.name,
                    longitude: longitude,
                    latitude: latitude,
                    guestNo: guestNo,
                    location:location
                  })
                }
              >
                <Text style={Styles.RoomHead}>{data.name}</Text>
              </TouchableOpacity>
              <Text style={Styles.price}>R {data.price}</Text>
            </View>
            <View>
              <Text style={Styles.subtext}>{data.text}</Text>
            </View>
            <ScrollView horizontal style={{ padding: "2%" }}>
              <TouchableOpacity
                style={Styles.touchable}
                onPress={() =>
                  navigation.navigate("roomA", { pic: data.image.image })
                }
              >
                <Image
                  source={{ uri: data.image.image }}
                  style={{ width: 200, borderRadius: 20, height: 150 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.touchable}
                onPress={() =>
                  navigation.navigate("roomA", { pic: data.lounge.lounge })
                }
              >
                <Image
                  source={{ uri: data.lounge.lounge }}
                  style={{ width: 200, borderRadius: 20, height: 150 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.touchable}
                onPress={() =>
                  navigation.navigate("roomA", { pic: data.image.image })
                }
              >
                <Image
                  source={{ uri: data.image.image }}
                  style={{ width: 180, borderRadius: 20, height: 150 }}
                />
              </TouchableOpacity>
              <Text>           </Text>
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    paddingHorizontal: "2%",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingVertical:'2%'
    // padding: '2%'
  },
  textHead: {
    color: "#1C5248",
    fontSize: 24,
    paddingLeft: "5%",
    fontWeight: "700",

  },
  subHead: {
    display: "flex",
    flexDirection: "row",
    // padding: '2%',
    justifyContent: "space-between",
  },
  RoomHead: {
    color: "#1C5248",
    fontSize: 20,
    paddingVertical: "2%",
    paddingHorizontal:'2%'
  },
  price: {
    color: "#06AC8E",
    fontSize: 17,
    margin: "1%",
  },
  subtext: {
    color: "#B2B2B2",
    // padding: '2%',
    fontSize: 15,
    paddingVertical: "2%",
    paddingHorizontal: "1.5%",
  },
  facilities: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    paddingHorizontal: "2%",
  },
  text: {
    width: "60%",
    marginLeft: "17%",
    textAlign: "center",
    color: "#8BA9A3",
  },
  touchable: {
    paddingHorizontal: "1%",
  },
});

export default hotelroom;
