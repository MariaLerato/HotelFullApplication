import React from 'react';
import { useState } from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
import { Avatar,Icon } from 'react-native-elements';
import BackendInfo from '../service/service'

const DetailsHistory = ({navigation,route}) =>{
    const {name,Totalprice,dateIn,dateOut,roomNo,image,hotelname,guestId} = route.params
 const [hotelGuests,setHotelGuests] = useState([])
 const [isLoading,setLoading] = useState(true)
    const [status,setStatus] = useState('Booked')
    const ChangeStatus = () => {
        if(status === true){
            return status
        }else{
            setStatus('Payment Unsuccessful')
            return;
        }
    }
    const deleteBooking = (guestId,index)=>{
        BackendInfo.deleteBooking(guestId)
        .then(response=>{
            setHotelGuests((e)=>{
               e.hotelGuests.splice(index, 1)
                return({
                    ...e
                })
            })
            console.log(guestId ,' deleted')
        }).catch((e)=>{
            console.log(e)
        })
    }
    return(
        <>
        <View style={{flex:1,padding:'8%'}}>
            <View style={{justifyContent:'space-between',width:'100%',flexDirection:'row',paddingHorizontal:'-4%',paddingVertical:'2%'}}>
            <TouchableOpacity  >
                <Icon name={'arrow-back'} color={'#C4C4C4'} onPress={() =>navigation.goBack()} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Icon name={'times'} type={'font-awesome-5'} color={'#C4C4C4'} onPress={() =>navigation.navigate('message')} />
            </TouchableOpacity>
            </View>
           <View style={{alignItems:'center',marginTop:'15%',justifyContent:'center'}}>
               <Avatar size={'xlarge'} rounded style={{borderColor:'white',borderWidth:0.5}} source={{uri:image}}></Avatar>
               <Text style={{color:'#4C9285',fontSize:30,padding:'2%'}}>{hotelname}</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',marginTop:'10%'}}>
               <View style={{padding:'2%'}}>
                    <Text style={{fontSize:20}}>Guest</Text>
                    <Text style={{fontSize:20}}>No. of Rooms</Text>
                    <Text style={{fontSize:20}}>Check In</Text>
                    <Text style={{fontSize:20}}>Check Out</Text>
                    <Text style={{fontSize:20}}>Total</Text>
                    <Text style={{fontSize:20}}>Status</Text>
               </View>
               <View style={{padding:'2%',marginLeft:'2%'}}>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{name}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{roomNo}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{dateIn}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{dateOut}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>R {Totalprice}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{status}</Text>
               </View>
           </View>
           <View>
               
           <TouchableOpacity style={styles.touchableOpacity} onPress={deleteBooking}>
               <Text style={styles.touchableText}>Delete Booking</Text>
            </TouchableOpacity>
           </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: 'red',
        height: 60,
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width: '100%',
        borderColor: 'rgba(0,0,0,.2)',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8
    },
    touchableText: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '700'


    },
})
export default DetailsHistory