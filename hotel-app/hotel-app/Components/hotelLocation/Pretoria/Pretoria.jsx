import React,{useEffect,useState} from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import BackendInfo from '../../service/service'


const PretoriaHotels = ({ navigation, route }) => {
  const [hotels, setHotels] = useState([]);
  const { hotelpic, des, name ,place,roomNo, dateIn, dateOut,guestNo,location,email,city} = route.params;
  const [isLoaded,setIsLoaded] = useState(false)


  const retrieveData = () => {
    BackendInfo.getAll()
      .then((res) => {
        console.log('sandton',res.data);
        setIsLoaded(true)
        setHotels(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveData();

  }, []);
  let searchString = city;
  const searchData = hotels.filter((data) =>
    data.city.includes(searchString)
  );
  return (
    <>
      <View style={{flex:1}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={"arrow-back"} size={25} color={"#1C5248"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, paddingLeft: "8%", color: "#1C5248" }}>
            {city} Hotels
          </Text>
        </View>
        <ScrollView>
          {
            searchData.map(data=>
              <View key={data._id}  style={{paddingRight:'18%'}}>
             
                  <View
                  style={{
                   
                    display: "flex",
                    flexDirection: "row",
                    padding: "2%",
                  }}
                 >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("hotelrooms", {
                         roomNo:roomNo,
                          main:hotelpic,
                          name:name,
                          dateIn:dateIn,
                          dateOut:dateOut,
                          guestNo:guestNo,
                          location:location,
                          email:data.email
                    
                      })
                    }
                  >
                    <Image
                      source={{ uri: data.image.image  }}
                      style={{
                        width: 140,
                        height: 150,
                        borderRadius: 30,
                        borderWidth: 2,
                        borderColor: "white",
                        marginTop:'11%'
                      }}
                    ></Image>
                  </TouchableOpacity>
                  <View style={{paddingRight:'2%',width: "80%",padding:'4%'}}>
                    <Text
                      style={{
                      
                        fontSize: 20,
                        color: "#1C5248",
                        fontWeight: "700",
                      }}
                    >
                      {data.name}
                    </Text>
                    <Text style={{  fontSize: 13,marginLeft:'-4%'}}>{data.text}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("review")}
                    >
                      <Text
                        style={{
                          color: "#F24C04",
                          fontSize: 15,
                        }}
                      >
                        Hotel Reviews
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
          </View>
              
              )
          }
         
        </ScrollView>
      </View>
    </>
  );
};
export default PretoriaHotels;
