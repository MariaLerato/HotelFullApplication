import React,{useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Icon, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'

const EditComponent = ({data})=>{
    const [image, setImage] = useState(data.image)
    const [name, setName] = useState(data.name)
    const [surname, setSurname] = useState(data.surname)
    const [email, setEmail] = useState(data.email)
    const [Client, setClient] = useState([])
    const [password, setPassword] = useState(data.password)
    const [userId, setId] = useState(data.userId)

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
        setImage({localUri:pickerResult.uri})
        console.log(pickerResult)
    }
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

return(
    <>
     <Avatar source={{uri:data.image.localUri}} rounded style={{ width: 100, height: 100,borderRadius:50}}></Avatar>
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
    </>
)
}
export default EditComponent