import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';
import BackendInfo from '../service/service'

const  Pay=({navigation,route})=> {
    const {hotelname,dateIn,dateOut,roomPrice,name,hotelImage,guests,rooms,Room,roomId} = route.params
    console.log(rooms,guests,hotelImage,hotelname)
    async function BookRoom(e){
        // e.preventDefault()
        const newGuest = {
            name,
            guests,
            rooms,
            Room,
            roomPrice,
            dateIn,
            dateOut,
            hotelImage,
            hotelname
          };
        console.log(newGuest)
        BackendInfo.createGuest(newGuest)
        .then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
        navigation.navigate("historyDetails",{hotelname:hotelname,dateIn:dateIn,dateOut:dateOut,roomNo:rooms,Totalprice:roomPrice,name:name,image:hotelImage})
    }
    return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_a32884e2cf099621f5eaa59f570898762882fa4b"
        amount={roomPrice}
        billingEmail="fenyane02@gmail.com"
        billingName={name}
        billingMobile="0793879978"
        activityIndicatorColor="green"
        onCancel={(e) => {
            alert('Unable To Complete Payment')
            navigation.goBack()
        }}
        onSuccess={BookRoom}
        autoStart={true}
        currency="ZAR"
      />
    </View>
  );
}
export default Pay;
