import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Icon, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import ProfilePicture from 'react-native-profile-picture'
import * as ImagePicker from 'expo-image-picker'
import User from './user'

const EditProfile = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [userId,setId] = useState(0)

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
    const EditUser = (e)=>{
        const user =  {name,surname,email,password,userId,image}
        console.log(user)
        User.createUser(user)
        .then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
         
    }
    return (
        <>
            <ScrollView style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name={'arrow-back'} color={'white'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} /></TouchableOpacity>
                    <Text style={Styles.textHead}>Edit Profile</Text>
                    <TouchableOpacity onPress={EditUser}><Text style={Styles.subtext}>Done</Text></TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: '2%' }}>

                    {image ? (
                    // <Image source={{ uri: image }} style={Styles.image} />
                    <ProfilePicture
                    isPicture={true}
                    source={{ uri: image }}
                    shape='circle'
                    width={90}
                    height={90}
                    backgroundColor='#d9d9d9'
                    userTextStyle={{ fontWeight: '600', fontSize: 25 }}
                    pictureStyle={Styles.image}

                />
                    ) : (
                        <ProfilePicture
                            isPicture={false}
                            user='Maria Fenyane'
                            shape='circle'
                            width={90}
                            height={90}
                            backgroundColor='#d9d9d9'
                            userTextStyle={{ fontWeight: '600', fontSize: 25 }}
                            pictureStyle={Styles.image}

                        />
                    )}
                    <TouchableOpacity onPress={pickImage}>

                        <Text style={{ color: 'white', fontSize: 24, marginBottom: '2%' }}>Change Profile Picture</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TextInput placeholder={'Maria'} label={'First Name'} value={name} onChange={(e)=>setName(e.target.value)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput placeholder={'Fenyane'} label={'Last Name'} value={surname} onChange={(e)=>setSurname(e.target.value)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput placeholder={'@fenyane02'} label={'User Name'} value={name} onChange={(e)=>setName(e.target.value)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput placeholder={'fenyane02@gmail.com'} label={'Email Address'} value={email} onChange={(e)=>setEmail(e.target.value)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput placeholder={'*******'} label={'Old Password'} value={password} onChange={(e)=>setPassword(e.target.value)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput placeholder={' '} label={'New Password'} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
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