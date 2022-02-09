import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native'
import axios from 'axios';


const checkDatabase = () => {
    const [hotels,setHotels] = useState([])
    const [ name,setName] = useState()

    const retrieveData = ()=>{
      axios.get(`http://bc60-156-0-230-6.ngrok.io/api/v1/hotels`)
        .then((res)=>{
            console.log(res.data)
            setHotels(res.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        retrieveData()
    },[])
  return (
      <>
      {
          hotels.map(data=>
            <View>

                <Text>{data.name}</Text>
            </View>
            )
      }
      </>
  );
};

export default checkDatabase;
