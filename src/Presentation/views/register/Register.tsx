import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import RoundedButton from '../../../Presentation/components/RoundedButton';

const RegisterScreen = () => {

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}> Selecciona una imagen</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>

        <View style={styles.formImput}>
          <Image
            source={require('../../../../assets/user.png')}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextImput}
            placeholder='Nombres'
            keyboardType='default'
          />
        </View>

        <View style={styles.formImput}>
          <Image
            source={require('../../../../assets/my_user.png')}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextImput}
            placeholder='Apellidos'
            keyboardType='default'
          />
        </View>

        <View style={styles.formImput}>
          <Image
            source={require('../../../../assets/email.png')}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextImput}
            placeholder='Correo Electronico'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.formImput}>
          <Image
            source={require('../../../../assets/phone.png')}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextImput}
            placeholder='Telefono'
            keyboardType='numeric'
          />
        </View>

        <View style={styles.formImput}>
          <Image
            source={require('../../../../assets/password.png')}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextImput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
          />
        </View>

        <View style={styles.formImput}>
          <Image
            source={require('../../../../assets/confirm_password.png')}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextImput}
            placeholder='Confirmar Contraseña'
            keyboardType='default'
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('Acepted', ToastAndroid.SHORT)}
          />
        </View>
 
      </View>
    </View>
  );
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%'
  },

  form: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30
  },

  formImput: {
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
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 10
  },

  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center'
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

