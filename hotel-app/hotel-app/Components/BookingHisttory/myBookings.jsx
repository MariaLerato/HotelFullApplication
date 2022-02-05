import React from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,ScrollView,StyleSheet} from 'react-native'
import {Icon,Input,Avatar} from 'react-native-elements'
import { img } from '../gallery/reusables';

const MyBookings = ({navigation})=>{
    const palm = require('../../assets/palm.png')
    const maslow = require('../../assets/maslow.png')
    
    const SearchInput =()=>{
        return(
            <View style={{marginTop:'2%'}}>
                <Input
                placeholder={'Search Bookings'}
                containerStyle={{borderBottomColor:'#C4C4C4'}}
                />
            </View>
        )
    }
    return(
        <>
        <ScrollView style={{marginTop:'5%',flex:1,padding:'1%'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2%',borderBottomColor:'#C4C4C4',borderBottomWidth:0.5}}>
            <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                <Avatar rounded size={'medium'} source={require('../../assets/users.jpeg')} />
                <Text style={{fontSize:22,color:'#1C5248',paddingLeft:'4%',marginTop:'3%'}}>My Bookings</Text>
            </View>
           <TouchableOpacity style={{marginRight:'8%',marginTop:'2%'}} onPress={SearchInput}>
                <Icon name={'search'} type={'font-awesome'} color='#4C9285'/>
           </TouchableOpacity>
        </View>
        <View style={{width:'100%',marginTop:'2%',alignItems:'center'}}>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                      
                      <TouchableOpacity onPress={()=>navigation.navigate('historyDetails',{hotel:img.hotel10})}>
                        <ImageBackground source={img.hotel10} style={{width:180,height:170,borderRadius:30,marginTop:'4%',overflow:'hidden'}}>
                        <View style={styles.textContainer}>
                            <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name </Text>
                            <Text style={{color:'#FAA455'}} >Reviews</Text>
                        </View>
                        </ImageBackground>
                      </TouchableOpacity>
                     <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:img.hotel11})}>
                        <ImageBackground source={img.hotel11} style={{width:180,height:210,marginLeft:'4%',borderRadius:30,overflow:'hidden'}}>
                        <View style={styles.textContainer}>
                            <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name </Text>
                            <Text style={{color:'#FAA455'}}>Reviews</Text>
                        </View>
                        </ImageBackground>
                     </TouchableOpacity>
                       
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:img.sand})}>
                       <ImageBackground source={img.sand} style={{width:180,height:226,marginTop:'-15%',margin:'2%',borderRadius:20,overflow:'hidden'}}>
                       <View style={styles.textContainer}>
                            <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name </Text>
                            <Text style={{color:'#FAA455'}}>Reviews</Text>
                        </View>
                       </ImageBackground>
                       </TouchableOpacity>
                       <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:palm})}>
                            <ImageBackground source={palm} style={{width:180,height:140,margin:'1%',borderRadius:30,overflow:'hidden'}}>
                                <View style={styles.textContainer}>
                                    <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name </Text>
                                    <Text style={{color:'#FAA455'}}>Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                        <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:maslow})}>
                            <ImageBackground source={maslow} style={{width:180,height:150,padding:'2%',margin:'2%',borderRadius:40,overflow:'hidden'}}>
                                <View style={styles.textContainer}>
                                    <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name </Text>
                                    <Text style={{color:'#FAA455'}}>Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                       <TouchableOpacity  onPress={()=>navigation.navigate('historyDetails',{hotel:img.hotel3})}>
                            <ImageBackground source={img.hotel3} style={{width:180,height:210,margin:'2%',borderRadius:20,marginTop:'-30%',overflow:'hidden'}}>
                                <View style={styles.textContainer}>
                                    <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name</Text>
                                    <Text style={{color:'#FAA455'}}>Reviews</Text>
                                </View>
                            </ImageBackground>
                       </TouchableOpacity>
                     
                   </View>
        </View>
            </ScrollView>
            <TouchableOpacity style={{alignSelf:'flex-end',backgroundColor:'#4C9285',width:70,height:70,alignContent:'center',justifyContent:'center',borderRadius:40,marginTop:'-18%'}}>
                <Icon name={'trash'} type={"font-awesome-5"} color={'#FFFFFF'} size={25} />
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    textContainer:{
        backgroundColor:'white',
        width:'90%',
        height:65,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:'auto',
        padding:'4%',
        borderRadius:20,
        marginBottom:'4%'
    }
})
export default MyBookings
