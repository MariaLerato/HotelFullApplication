import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

const Confirm = ({ navigation, route }) => {
  const {
    name,
    main,
    roomNo,
    price,
    hotelname,
    roomName,
    dateIn,
    dateOut,
    guestNo,
    location
  } = route.params;
  let total = (roomNo + guestNo) * price;

  const TotalPrice = () => {
    return <Text>R {total}</Text>;
  };
  console.log("Total", TotalPrice);

  return (
    <View style={{ marginTop: "10%", flex: 1 }}>
      <TouchableOpacity
        style={Styles.header}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name={"arrow-back"}
          color={"#1C5248"}
          style={{ fontWeight: "700" }}
        />
        <Text style={Styles.textHead}>Booking</Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          padding: "2%",
          borderRadius: 20,
          paddingTop: "-2%",
        }}
      >
        <ImageBackground
          source={{ uri: main }}
          style={{
            width: "100%",
            height: 220,
            borderRadius: 20,
            overflow: "hidden",
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
          }}
        >
          <View style={Styles.textContainer}>
            <Text style={{ color: "#C4C4C4", fontSize: 20 }}>
              JI, Makua -Johannesburg
            </Text>
            <Text style={{ color: "#1C5248", fontSize: 22, fontWeight: "700" }}>
              {hotelname}, {roomName}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            alignItems: "flex-start",
            width: "100%",
            marginTop: "2%",
            paddingHorizontal: "2%",
          }}
        >
          <Text
            style={{
              color: "#C4C4C4",
              alignSelf: "center",
              fontSize: 20,
              width: "100%",
            }}
          >
            Facility
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "flex-start",
          }}
        >
          <View>
            <Icon
              name={"wifi"}
              size={28}
              color="#1C5248"
              style={{ marginLeft: "-18%" }}
            />
            <Text
              style={{
                color: "#C4C4C4",
                fontSize: 15,
                width: "70%",
                textAlign: "center",
              }}
            >
              Unlimited Wifi
            </Text>
          </View>
          <View>
            <Icon
              name={"bath"}
              type={"font-awesome"}
              color="#1C5248"
              style={{ marginLeft: "-25%" }}
            />
            <Text
              style={{
                color: "#C4C4C4",
                fontSize: 15,
                width: "60%",
                textAlign: "center",
              }}
            >
              Personal Bathroom
            </Text>
          </View>
          <View style={{ marginLeft: "-8%" }}>
            <Icon
              name={"swimming-pool"}
              type={"font-awesome-5"}
              color="#1C5248"
              style={{ marginLeft: "-18%" }}
            />
            <Text
              style={{
                color: "#C4C4C4",
                fontSize: 15,
                width: "70%",
                textAlign: "center",
              }}
            >
              {" "}
              Swimming Pool
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#C4C4C4",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: "2%",
          }}
        >
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 18 }}>Check In</Text>
            <Text
              style={{ color: "#1C5248", fontWeight: "700", paddingLeft: "2%" }}
            >
              {dateIn}
            </Text>
          </View>
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 18 }}>Check Out</Text>
            <Text
              style={{
                color: "#1C5248",
                fontWeight: "700",
                paddingLeft: "-2%",
              }}
            >
              {dateOut}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#C4C4C4",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: "2%",
          }}
        >
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 18 }}>Guest Name</Text>
            <Text
              style={{
                color: "#1C5248",
                fontWeight: "700",
                paddingLeft: "2%",
                fontSize: 20,
              }}
            >
              Maria Fenyane
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: "2%",
          }}
        >
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 18 }}>Total Price</Text>
            <Text
              style={{ color: "#1C5248", fontWeight: "700", paddingLeft: "2%" }}
            >
              {" "}
              {roomNo} Rooms, {guestNo} Guests
            </Text>
          </View>
          <View style={{ marginTop: "7%" }}>
            <Text
              style={{
                color: "#06AC8E",
                fontWeight: "700",
                paddingLeft: "-2%",
              }}
            >
             R {total}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "2%",
            width: "100%",
            marginBottom: "2%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#75BFB2",
              margin: "2%",
              width: "50%",
              height: 60,
              justifyContent: "center",
              borderRadius: 10,
            }}
            onPress={() =>
              navigation.navigate("payment", {
                Totalprice:total,
                Roomname: roomName,
                Guestnumber: guestNo,
                roomNo: roomNo,
                hotelname: hotelname,
                dateIn: dateIn,
                dateOut: dateOut,
                location:location,
                image:main
              })
            }
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                alignSelf: "center",
                fontWeight: "700",
              }}
            >
              Confirm Booking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#75BFB2",
              margin: "2%",
              width: "40%",
              justifyContent: "center",
              borderRadius: 10,
              marginLeft: "6%",
            }}
            onPress={() => navigation.navigate("booking")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                alignSelf: "center",
                fontWeight: "700",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    padding: "2%",
    marginTop: "1%",
  },
  textHead: {
    color: "#1C5248",
    fontSize: 24,
    paddingLeft: "5%",
    fontWeight: "700",
    marginBottom: "1%",
  },
  textContainer: {
    backgroundColor: "white",
    width: "90%",
    height: 90,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "auto",
    padding: "4%",
    borderRadius: 20,
    marginBottom: "2%",
  },
});
export default Confirm;
