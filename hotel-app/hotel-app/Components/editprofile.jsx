import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Icon, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import ProfilePicture from 'react-native-profile-picture'
import * as ImagePicker from 'expo-image-picker'
import EditComponent from './editComponent';
import BackendInfo from './service/service'

const EditProfile = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [Client, setClient] = useState([])
    const [password, setPassword] = useState()
    const [userId, setId] = useState(0)

        let openImagePickerAsync = async ()=>{
            let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(permissionResult.granted===false){
                alert("Permissionn to access camera roll is required")
                return;
            }
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            if(pickerResult.cancelled===true){
                return;
            }
            setImage({localUri:pickerResult.base64})
            console.log(pickerResult)
        }
    async function PostClient(e) {
        e.preventDefault()
        const newClient = {
            name,
            surname,
            image,
            email,
            password
        };
        console.log(newClient)
        BackendInfo.postClient(newClient)
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
                <Avatar source={{uri:image.localUri}} rounded style={{ width: 100, height: 100,borderRadius:50}}></Avatar>
                    <TouchableOpacity onPress={openImagePickerAsync}>
                        <Text style={{ color: 'white', fontSize: 24, marginBottom: '2%' }}>Change Profile Picture</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TextInput  label={'First Name'} value={name} onChangeText={(e) => setName(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput  label={'Last Name'} value={surname} onChangeText={(e) => setSurname(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput  label={'Email Address'} value={email} onChangeText={(e) => setEmail(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput type={'password'} label={'Old Password'} value={password} onChangeText={(e) => setPassword(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput  label={'New Password'} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                    </View>
    
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