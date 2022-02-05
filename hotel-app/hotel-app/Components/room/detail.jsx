import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { date } from 'yup';
import Info from '../info';

const Detail = ({ route, navigation }) => {

    const {name,main,number,des,price,id,longitude,latitude } = route.params


    return (
        <>
         <View style={styles.container}>
            <ImageBackground source={main} style={{width:'100%',height:'70%'}}>
                <View style={styles.head}>
                    <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
                        <Icon name={'arrow-back'} color={'white'} />
                    </TouchableOpacity>
                    <View  style={styles.back}>
                        <Icon name={'bookmark'}  color={'white'}/>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.name}>
               <View>
                   <Text style={styles.title}>
                     {name}
                   </Text>
                   <Text style={styles.sub}>{id}</Text>
                   <Text style={styles.price}>Price</Text>
                   <Text style={styles.type}>R {price}/Night</Text>
               </View>
               <View>
                   <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                   <Text style={{color:'#1C5248',}}>4.9</Text>
               </View>
            </View>
            <View style={{alignSelf:'center',width:'90%',padding:'2%'}} >
                <Text style={styles.title}>
                    Detail
                </Text>
                <Text style={styles.type}>
                {des}
                </Text>
                <Text style={styles.subText}>
                 On Map
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('map',{
                    longitude:longitude,
                    latitude:latitude,
                    hotelname:name,
                    price:price
                })}>
                    <ImageBackground source={require('../../assets/map.png')} style={{width:344,height:150,alignSelf:'center',marginTop:'5%',borderRadius:20,overflow:'hidden'}}>
                        <TouchableOpacity  onPress={()=>navigation.navigate('bookingDetails',{
                            name:id,
                            total:price,
                            about:des,
                            number:number  ,
                            main:main ,
                            hotelname:name
                        })} style={{backgroundColor:'#53B5A3',width:'92%',height:57,alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:'auto',borderRadius:10,marginBottom:'2%'}}>
                            <Text style={{color:'white',fontSize:24,fontWeight:'700'}}>Book Now</Text></TouchableOpacity>
                    </ImageBackground>
                </TouchableOpacity> 
            </View>
        </View>

              
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'white',
    },
    head:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'10%'
    },
    back:{
        width:40,
        height:42,
        borderRadius:40,
        backgroundColor:'black',
        opacity:0.3,
        margin:'4%',
        alignContent:'center',
        justifyContent:'center'
    },
    name:{
        backgroundColor:'white',
        width:'90%',
        display:'flex',
        flexDirection:'row',
        padding:'5%',
        marginTop:'-55%',
        alignSelf:'center',
        borderRadius:10,
        justifyContent:'space-between'
    },
    title:{
        color:'#1C5248',
        fontWeight:'700',
        fontSize:18
    },
    subText:{
        color:'#1C5248',
        fontWeight:'700',
        fontSize:18,
        marginTop:'2%'
    },
    sub:{
        color:'#B2B2B2'
    },
    price:{
        color:'#1C5248',
        fontWeight:'700',
    },
    type:{
        color:'#B2B2B2'
    }
})
export default Detail