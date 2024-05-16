import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, TouchableOpacity} from 'react-native';
import RoundedButton from '../../../Presentation/components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';


const HomeScreen = () => {

    const { email, password, onChange } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList> >();

return (
    <View style={styles.container}>
        <Image
        source={ require('../../../../assets/chef.jpg')}
        style={ styles.imageBackground }
        />

        <View style={ styles.logoContainer }> 
        <Image 
            source={ require('../../../../assets/logo.png')}
            style={ styles.logoImage }
        />
        <Text style={ styles.logoText }> FOOD APP</Text>
        </View>

        <View style={ styles.form }>
        <Text style={ styles.formText}>INGRESAR</Text>
        <View style={ styles.formImput }> 
            <Image 
            source={ require('../../../../assets/email.png')}
            style={ styles.formIcon }
            />
            <TextInput
            style={ styles.formTextImput}
            placeholder='Correo Electronico'
            keyboardType='email-address'
            value={ email }
            onChangeText={ text => onChange('email',text) }
            />
        </View>

        <View style={ styles.formImput }>
            <Image 
            source={ require('../../../../assets/password.png')}
            style={ styles.formIcon }
            />
            <TextInput
            style={ styles.formTextImput }
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            value={ password }
            onChangeText={ text => onChange('password',text) }
            />
        </View>

        <View style={{ marginTop: 30 }}>
            <RoundedButton text='LOGIN' onPress={ () => {
                console.log('Email:', email);
                console.log('password:', password);
                
            } }

            />
        </View>

        <View style={ styles.formRegister}>
            <Text> No tienes cuenta</Text>

            <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') }>
                <Text style={ styles.formRegisterText }> Registrate </Text>
            </TouchableOpacity>
        </View>


        </View>
    </View>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    imageBackground: {
        width: '100%',
        height:'100%',
        opacity: 0.7,
        bottom: '30%'
    },

    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },

    formImput:{
        flexDirection: 'row',
        marginTop: 30,

    },

    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },

    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },

    formTextImput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },

    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },

    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor : 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },

    logoImage: {
        width: 100,
        height: 100,

    },

    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold'
    },
})
