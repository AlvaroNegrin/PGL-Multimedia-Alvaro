import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { LIGHT_COLORS } from '../../styles/colors/color';

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/magi-gordito.gif")}
        style={styles.image}
        
      />

      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <Text
        style={styles.linkText}>
        ¿Ya tienes una cuenta? Inicia sesión aquí
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLORS.white, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: LIGHT_COLORS.lightPink,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: LIGHT_COLORS.lightPink,
    color: '#000',
  },
  button: {
    width: '100%',
    backgroundColor: LIGHT_COLORS.darkBlue, 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: LIGHT_COLORS.darkBlue,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default RegisterPage;
