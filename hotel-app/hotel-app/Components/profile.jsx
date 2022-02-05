import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Avatar } from 'react-native'
import { Icon } from 'react-native-elements';
import { img } from './gallery/reusables';
import ProfilePicture from 'react-native-profile-picture'

const Profile = ({ navigation ,route}) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <ProfilePicture
                  isPicture={false}
                  user='Maria Fenyane'
                    shape='circle'
                   width={90}
                   height={90}
                   backgroundColor='#d9d9d9'
                   userTextStyle={{fontWeight:'600',fontSize:25}}
                
                />
                <Text style={Styles.headText}>Maria Fenyane</Text>
                <TouchableOpacity onPress={() => navigation.navigate('editprofile')} style={Styles.edit}>
                    <Text  style={{ color: '#C4C4C4' }}>Edit Profile</Text>
                </TouchableOpacity >


            </View>
            <ScrollView style={Styles.history}>
                <View style={Styles.historyHead}>
                    <Icon name={'trash'} type={'font-awesome'} color='#4C9285' />
                    <Text style={{ color: '#1C5248', fontWeight: '700', fontSize: 18, marginLeft: '30%' }}>My History </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('searchHistory')}><Icon name={'search'} type={'font-awesome'} color='#4C9285' style={{ alignSelf: 'flex-end', marginLeft: '20%' }} /></TouchableOpacity>
                </View>
                <View style={{ width: '100%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', padding: '1%' }}>

                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/pretoria.png')} style={{ width: 180, height: 150, padding: '2%', margin: '2%', borderRadius: 40, overflow: 'hidden' }} >
                                <View style={Styles.textContainer}>
                                    <Text style={{ color: '#C4C4C4', fontSize: 20 }}>Hotel Name </Text>
                                    <Text style={{ color: '#FAA455' }} >Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={img.hotel10} style={{ width: 175, height: 180, padding: '2%', margin: '2%', borderRadius: 20,overflow:'hidden' }}>
                            <View style={Styles.textContainer}>
                                    <Text style={{ color: '#C4C4C4', fontSize: 20 }}>Hotel Name </Text>
                                    <Text style={{ color: '#FAA455' }} >Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', padding: '1%' }}>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/sandton.png')} style={{ width: 180, height: 226, marginTop: '-15%', margin: '2%', borderRadius: 20, overflow: 'hidden' }}>
                                <View style={Styles.textContainer}>
                                    <Text style={{ color: '#C4C4C4', fontSize: 20 }}>Hotel Name </Text>
                                    <Text style={{ color: '#FAA455' }} >Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/palm.png')} style={{ width: 185, height: 190, margin: '1%', borderRadius: 30 ,overflow:'hidden'}} >
                            <View style={Styles.textContainer}>
                            <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name </Text>
                            <Text style={{color:'#FAA455'}} >Reviews</Text>
                        </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    user: {
        width: 90,
        height: 90,
        borderRadius: 40
        , borderColor: 'white',
        borderWidth: 1
    },
    header: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '50%',
        width: '100%',
        alignItems: 'center'
    },
    headText: {
        color: '#1C5248',
        fontSize: 22,
        fontWeight: '600',
        marginBottom: '2%'
    },
    edit: {
        borderRadius: 20,
        borderColor: '#1C5248',
        borderWidth: 1,
        padding: '3%',
        width: '30%',
        alignItems: 'center',
        marginBottom: '2%'
    },
    history: {
        marginTop: '-15%',
        backgroundColor: '#EBE9E9',
        borderTopStartRadius: 40,
        borderTopEndRadius: 20,

    },
    historyHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '4%'
    },
    textContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: 65,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        padding: '4%',
        borderRadius: 15,
        marginBottom: '4%'
    }

})
export default Profile