import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

const Method = ({navigation,route}) => {
    const [checked, setChecked] = useState('first')

  
    const {hotelname,number,date,name,cvv,price,Room,guests} = route.params
    const PaymentCard = ()=>{
        return(
            <View style={{ width: '95%',borderRadius: 15,backgroundColor:'#1C5248',height:180,margin:'auto',padding:'auto',alignSelf:'center' }}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
                    <View style={{color:'white',padding:'4%',fontSize:25}}>
                        <Text style={{color:'white',fontSize:25}}>{name}</Text>
                        <Text  style={{color:'#C4C4C4',fontSize:17,paddingTop:'2%',paddingLeft:'4%',fontWeight:'100',}} >{number}</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',marginTop:'8%',marginRight:'4%'}}>
                        <View style={{borderRadius:40,backgroundColor:'#5190f5',width:40,height:40,marginRight:'-14%'}}></View>
                        <View  style={{borderRadius:40,backgroundColor:'#FAA455',width:40,height:40,marginRight:'12%'}}></View>
                    </View>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginLeft:'-24%'}}>
                   
                    <View style={{paddingLeft:'2%'}}>
                        <Text  style={{color:'white',fontSize:18,}}>Expired</Text>
                        <Text  style={{color:'white',fontSize:18,}}>{date}</Text>
                    </View>
                    <View style={{marginLeft:'-10%'}}>
                        <Text  style={{color:'white',fontSize:18}}>
                            Cvv
                        </Text>
                        <Text  style={{color:'white',fontSize:18}}>{cvv}</Text>
                    </View>
                </View>
                <Text  style={{color:'white',fontSize:17,alignSelf:'flex-end',fontWeight:'700',marginRight:'2%'}}>Visa</Text>
            </View>
        )
    }
    return (
        <View style={{ marginTop: '10%' }}>
            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#C4C4C4'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} />
                <Text style={Styles.textHead}>Payment Methods</Text>

            </View>
            <View style={{ padding: '2%' }}>
                <PaymentCard/>

            </View>
            <View>
                <View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '4%',margin:'1%', }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon name={'cc-mastercard'} type={'font-awesome-5'} size={30} color={'#64D3BF'} />
                        <Text style={{padding:'2%',fontSize:18,color:'#1C5248'}}> Credit/Debit Card </Text>
                    </View>
                    <RadioButton
                        value='first'
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '4%',margin:'1%', }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon name={'money-bill-alt'} type={'font-awesome-5'} size={30} color={'#64D3BF'} />
                        <Text style={{color:'#1C5248',padding:'2%'}}> EFT </Text>
                    </View>
                    <RadioButton
                        value='second'
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                </View>
                <Text style={{padding:'4%',textAlign:'center',fontSize:20,color:'#C4C4C4',marginTop:'1%'}}>Make Sure the details you provide are accurate,and can be used</Text>
                <TouchableOpacity style={{width:'80%',height:65,borderColor:'#61B0A2',borderWidth:4,borderRadius:40,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:'5%'}} onPress={()=>navigation.navigate('finalpayment',{
                    number:number,
                    name:name,
                    date:date,
                    cvv:cvv,
                    price:price,
                    Room:Room,
                    guests:guests,
                    hotelname:hotelname
                })}><Text style={{color:'#61B0A2',fontSize:24}}>Save</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%'
    },
    textHead: {
        color: '#1C5248',
        fontSize: 26,
        paddingLeft: '10%',
        fontWeight: '600',
        marginTop: '-2%'

    },
    touchable:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width:'98%',
        borderColor:'rgba(0,0,0,.2)',
        display: 'flex',
         flexDirection: 'row',
          justifyContent: 'space-between',
           padding: '4%',margin:'1%',borderBottomEndRadius:20,borderBottomLeftRadius:20,borderTopEndRadius:5
    }
})
export default Method