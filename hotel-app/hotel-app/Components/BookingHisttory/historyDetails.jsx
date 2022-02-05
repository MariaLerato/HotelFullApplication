import React from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
import { Avatar,Icon } from 'react-native-elements';

const DetailsHistory = ({navigation,route}) =>{
    const hotel = route.params.hotel
   
    return(
        <>
        <View style={{flex:1,padding:'8%'}}>
            <TouchableOpacity style={{ alignContent:'flex-start',width:'100%',marginLeft:'-52%'}} >
                <Icon name={'arrow-back'} color={'#C4C4C4'} onPress={() =>navigation.goBack()} />
            </TouchableOpacity>
       
           <View style={{alignItems:'center',marginTop:'15%'}}>
               <Avatar size={'xlarge'} rounded source={hotel}></Avatar>
               <Text style={{color:'#4C9285',fontSize:30,padding:'2%'}}>Hotel Name</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',marginTop:'10%'}}>
               <View style={{padding:'2%'}}>
                    <Text style={{fontSize:20}}>Guest</Text>
                    <Text style={{fontSize:20}}>Number of Rooms</Text>
                    <Text style={{fontSize:20}}>Check In</Text>
                    <Text style={{fontSize:20}}>Check Out</Text>
                    <Text style={{fontSize:20}}>Total</Text>
               </View>
               <View style={{padding:'2%',marginLeft:'2%'}}>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>Maria Fenyane</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>1</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>02 Dec 2021</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>10 Dec 2021</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>R1500.00</Text>
               </View>
           </View>
           <View>
           <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchableText}>Delete from history</Text></TouchableOpacity>
           </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: '#80D8C8',
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