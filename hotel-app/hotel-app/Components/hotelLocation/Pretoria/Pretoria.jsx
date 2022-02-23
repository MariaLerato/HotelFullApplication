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
import { Icon,ListItem ,Avatar} from "react-native-elements";
import BackendInfo from '../../service/service'


const PretoriaHotels = ({ navigation, route }) => {
  const [hotels, setHotels] = useState([]);
  const { hotelpic, des, name ,place,roomNo, dateIn, dateOut,guestNo,location,days,city} = route.params;
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
      <View style={{flex:1, backgroundColor:'white'}}>
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
              <View key={data._id}>
             <ListItem key={data._id} >
                  <Avatar size={'xlarge'} source={{ uri: data.image.image }} onPress={() =>
                    navigation.navigate("hotelrooms", {
                      roomNo:roomNo,
                       main:data.image.image,
                       name:name,
                       dateIn:dateIn,
                       dateOut:dateOut,
                       guestNo:guestNo,
                       location:location,
                       email:data.email,
                       days:days
                 
                    })}></Avatar>
               
               <ListItem.Content  >
                  <ListItem.Title style={{ color: "#1C5248",fontSize:20}}>{data.name}</ListItem.Title>
                  <ListItem.Subtitle>{data.text}</ListItem.Subtitle>
                </ListItem.Content>
              
            
              </ListItem>
          </View>
              
              )
          }
         
        </ScrollView>
      </View>
    </>
  );
};
export default PretoriaHotels;
