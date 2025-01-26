import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { LIGHT_COLORS } from '../../styles/colors/color';
import { UserLogData } from '../../types/UserType';
import Toast from 'react-native-toast-message';
import { storageService } from '../../services/user-management-service';

const LoginPage = () => {

    const initialUserData: UserLogData = {
        email: "",
        pswd: ""
      }

    const [userData, setUserData] = useState<UserLogData>(initialUserData);

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
    
        if (!emailRegex.test(userData.email)) {
          console.log("email")
          Toast.show({ type: 'error', text1: 'Error', text2: 'Introduce un correo electrónico válido.' });
          return false;
        }
        if (!passwordRegex.test(userData.pswd)) {
          console.log("password")
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
          await storageService.logUser(userData)
        };


  return (
    <View style={styles.container}>
        <Toast/>
      <Image
        source={{
          uri: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif', 
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Login</Text>

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
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text
        style={styles.linkText}
        onPress={() => router.navigate("user-management/register")}>
        ¿No tienes una cuenta? Regístrate aquí
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

export default LoginPage;
