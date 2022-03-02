import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Icon, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import ProfilePicture from 'react-native-profile-picture'
import * as ImagePicker from 'expo-image-picker'
import BackendInfo from './service/service'
import EditComponent from './editComponent';
import { Bones } from "react-bones/native"

const EditProfile = ({ navigation }) => {
    const [image, setImage] = useState()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [Client, setClient] = useState([])
    const [password, setPassword] = useState()
    const [userId, setId] = useState(0)
    const [isLoaded,setIsLoaded] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.cancelled) {
            setImage(result.uri)
        }
    
    }
    const retrieveData = () => {
        BackendInfo.getClient()
          .then((res) => {
            console.log(res.data);
            setIsLoaded(true)
            setClient(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      };

    useEffect(() => {
        retrieveData()
    },[])

    async function PostClient(e) {
        e.preventDefault()
        const newClient = {
            name,
            surname,
            image,
            email,
            password,
            userId
        };
        console.log(newClient)
        BackendInfo.updateClient(newClient)
            .then((res) => {
                console.log(res.data)
            }).catch((e) => {
                console.log(e)
            })
        navigation.goBack()
    }
    
    return (
        <>
            <ScrollView style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name={'arrow-back'} color={'white'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} /></TouchableOpacity>
                    <Text style={Styles.textHead}>Edit Profile</Text>
                    <TouchableOpacity onPress={PostClient}><Text style={Styles.subtext}>Done</Text></TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: '2%' }}>
                    {Client.map(data => <>
                        
                            <EditComponent data={data}/>
                      
                       
                    </>)}
    
                </View>
            </ScrollView>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61B0A2'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%',
        marginTop: '6%'
    },
    textHead: {
        color: 'white',
        paddingLeft: '30%',
        fontSize: 24,
        fontWeight: '700'
    },
    subtext: {
        color: 'white',
        paddingLeft: '20%', paddingTop: '1%'
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    }
})
export default EditProfile