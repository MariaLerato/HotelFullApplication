import React from 'react';
import {View,Text,} from 'react-native'
import MapView,{Marker,Callout} from 'react-native-maps'
import CallOut from './box';
import location from './location';
const Maps = ({data,route})=>{
   const {longitude,latitude,hotelname,price} = route.params
    return(
        <>
        <Text>{hotelname}</Text>
            <MapView
                initialRegion={
                    {
                        latitude:latitude,
                        longitude:longitude,
                        latitudeDelta:0.005,
                        longitudeDelta:0.005
                    }
                }
                showsUserLocation={true}
              
                style={{flex:1}}
           >
                 <Marker 
                    coordinate={{
                        latitude:-26.358055,
                        longitude:27.398056,
                    }}
                    identifier='Hotel'
                >
                    <Callout tooltip={true} >
                        <Text>{hotelname}</Text>
                    </Callout>
                </Marker>
            </MapView>
        </>
    )
}

export default Maps
