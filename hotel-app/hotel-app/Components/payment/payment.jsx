import React,{useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {Icon,Input} from 'react-native-elements'
import {Formik} from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-native-datepicker';

const PaymentMethod = ({navigation,route})=>{
  const [number,setNumber] = useState('')
  const [name,setName] = useState('')
  const [date,setDate] = useState('')
  const [cvv,setCvv] = useState('')
  const [payment,setPayment] = useState([])

  const {hotelname,Totalprice,Roomname,Guestnumber} = route.params

  const NewMethod = ()=>{
    setPayment([...payment,{
      id:payment.length + 1,
      number:number,
      name:name,
      date:date,
      cvv:cvv
    }])
    alert('Details Saved')
    
  }
  const Validate = Yup.object({
    number: Yup.string().max(20,'Card Numbers Must Be Not More Than 20').required('Required'),
    name:Yup.string().required('Required'),
    date:Yup.string().required('Required'),
    cvv:Yup.string().required('Required')
  })
  
    return(
        <>
        <View  style={{marginTop:'10%'}}>
            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#C4C4C4'} style={{fontWeight:'700',marginTop:'20%'}} onPress={()=>navigation.goBack()} />
                <Text style={Styles.textHead}>Payment Methods</Text>
               
            </View>
           <Formik
           initialValues={{
             number:'',
             name:'',
             date:'',
             cvv:''
           }}
           onSubmit={NewMethod}
           validateOnMount={true}
           validationSchema={Validate}
           >
             {({errors,handleChange,handleSubmit,handleBlur,touched,values})=>(
               <View>
                  <View style={{marginTop:'20%'}}>
                <Input
                placeholder={'Card Number'}
                leftIcon={<Icon name={'cc-mastercard'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.number}
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
                />
                {errors.number && touched.number ? (
                  <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.number}</Text>
                ):null}
                  <Input
                placeholder={'Card Holder'}
                leftIcon={<Icon name={'user'} type={'font-awesome-5'} size={30} color={'#6DA399'}/>}
                style={Styles.textbox}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                />
                {errors.name && touched.name ? (
                  <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.name}</Text>
                ):null}
                  <Input 
                placeholder={'Expiry Date'}
                leftIcon={<Icon name={'calendar'} type={'font-awesome-5'} size={30} color={'#6DA399'}/>}
                style={Styles.textbox}
                value={values.date}
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}

                />
                {errors.date && touched.date ?(
                  <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.date}</Text>
                ):null}
                  <Input
                placeholder={'CVV'}
                leftIcon={<Icon name={'credit-card'} type={'font-awesome-5'} size={30} color={'#6DA399'} />}
                style={Styles.textbox}
                value={values.cvv}
                onChangeText={handleChange('cvv')}
                onBlur={handleBlur('cvv')}
                />
                {errors.cvv && touched.cvv?(
                  <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.cvv}</Text>
                ):null}
                
            </View>
            <TouchableOpacity style={{width:'80%',height:65,borderColor:'#61B0A2',borderWidth:4,borderRadius:40,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:'10%'}} onPress={()=>navigation.navigate('paymentmethod',{
              number :values.number,
              name:values.name,
              date:values.date,
              cvv:values.cvv,
              price:Totalprice,
              guests:Guestnumber,
              Room:Roomname,
              hotelname:hotelname
  
            })}><Text style={{color:'#61B0A2',fontSize:24}}>Save</Text></TouchableOpacity>
               </View>
             )}
           </Formik>
           
        </View>
        </>
    )
}
const Styles = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        padding:'2%'
      },
    textHead:{
        color:'#1C5248',
        fontSize:28,
        paddingLeft:'10%',
        fontWeight:'600',
        marginTop:'-2%'
      
      },
      textbox:{
        margin:'2%'
      }
})
export default PaymentMethod