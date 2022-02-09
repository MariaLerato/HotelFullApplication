import React,{useState,useEffect} from 'react';
import BackendInfo from './service'
import {View,Text} from 'react-native'
import axios from 'axios';


const checkDatabase = () => {
    const [hotels,setHotels] = useState([])
    const [ name,setName] = useState()

    const retrieveData = ()=>{
      axios.get(`https://server-app-new.herokuapp.com/api/v1/hotels`)
        .then((res)=>{
            console.log(res.data)
            setHotels(res.data.hotels)
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
                {/* <Text>Maria</Text> */}
                <Text>{data.name}</Text>
            </View>
            )
      }
      </>
  );
};

export default checkDatabase;
