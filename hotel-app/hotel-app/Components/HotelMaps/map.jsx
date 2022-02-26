import React, { useState,useEffect } from 'react';
import {View,Text,} from 'react-native'
import MapView,{Marker,Callout} from 'react-native-maps'
import {Icon,Avatar} from 'react-native-elements'
import CallOut from './box';
import location from './location';
import BackendInfo from '../service/service'

const Maps = ({data,route})=>{
   const {id} = route.params
   const [hotels,setHotels] = useState([])
   const [isLoaded,setIsLoaded] = useState(false)

   const retrieveHotels = () => {
    BackendInfo.getAll()
      .then((res) => {
        console.log('maps',res.data);
        setIsLoaded(true);
        setHotels(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
   useEffect(()=>{
       retrieveHotels()
   },[])

   const HotelLocation = hotels.filter((data)=>
   data.hotel_id === id
   )
    return(
        <>
        {HotelLocation.map(data=>
            <>
             <MapView
                initialRegion={
                    {
                        latitude:data.latitude,
                        longitude:data.longitude,
                        latitudeDelta:0.005,
                        longitudeDelta:0.005
                    }
                }
                showsUserLocation={true}
                style={{flex:1}}
           >
                 <Marker 
                    coordinate={{
                        latitude:data.latitude,
                        longitude:data.longitude,
                    }}
                    identifier='Hotel'
                >
                    <Callout tooltip={true} >
                        <View style={{flexDirection:'row'}}>
                        <Avatar source={{uri:data.image}} size={'small'} rounded/>
                        <Text>{data.name}</Text>
                        </View>
                      
                    </Callout>
                </Marker>
            </MapView>
            
            </>
            
            )}
           
        </>
    )
}

export default Maps
