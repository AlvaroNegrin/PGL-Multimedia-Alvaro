import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LIGHT_COLORS } from '../../styles/colors/color';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageService } from '../../services/user-management-service';
import {Image} from 'expo-image'
import { UserRegisData } from '../../types/UserType';
import { router } from 'expo-router';

const RegisterPage = () => {
  const initialUserData: UserRegisData = {
    fullName: "",
    email: "",
    pswd: ""
  }
  const [userData, setUserData] = useState<UserRegisData>(initialUserData);

  const handleFullName = (fullName: string) => {
    setUserData({
      ...userData,
      fullName: fullName,
    });
  };

  const handleEmail = (email: string) => {
    setUserData({
      ...userData,
      email: email,
    });
  };

  const handlePassword = (password: string) => {
    setUserData({
      ...userData,
      pswd: password,
    });
  };

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

    if (!userData.fullName.trim()) {
      Toast.show({ type: 'error', text1: 'Error', text2: 'El nombre completo es obligatorio.' });
      return false;
    }
    if (!emailRegex.test(userData.email)) {
      Toast.show({ type: 'error', text1: 'Error', text2: 'Introduce un correo electrónico válido.' });
      return false;
    }
    if (!passwordRegex.test(userData.pswd)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'La contraseña debe tener al menos 8 caracteres, incluyendo 1 letra y 1 número.',
      });
      return false;
    }
    return true;
  };

  const sendUserData = async () => {
    if (!validateInputs()) return; 
    await storageService.registerUser(userData);
  };

  return (
    <View style={styles.container}>
      <Image
        source={"https://media1.tenor.com/m/TSPV5XsTIssAAAAd/flcl.gif"}
        style={styles.image}
        
      />

      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#888"
        onChangeText={(e) => handleFullName(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        onChangeText={(e) => handleEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry={true}
        onChangeText={(e) => handlePassword(e)}
      />

      <TouchableOpacity style={styles.button} onPress={sendUserData}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <Text
        style={styles.linkText}
        onPress={() => router.navigate("user-management/login")}>
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
