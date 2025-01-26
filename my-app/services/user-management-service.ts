import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";
import { UserLogData, UserRegisData } from "../types/UserType";
import { asyncStorageService } from "./async-storage-service";
import { router } from "expo-router";

const TOKEN_KEY = "aSecretExample123";
const API_URL = "http://192.168.1.18:5000/auth";

const registerUser = async (data: UserRegisData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {fullname: data.fullName, email: data.email, pswd: data.pswd},
            {headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            
            Toast.show({ type: 'success', text1: 'Registro exitoso', text2: '¡Bienvenido!' });
          } else if (response.status === 400) {
            Toast.show({ type: 'error', text1: 'Error', text2: 'No se enviado el cuerpo de la petición correctamente' });
          } else {
            Toast.show({ type: 'error', text1: 'Error', text2: 'Ya existe un usuario con estos datos' });
          }
        return response.data.data;
    } catch (error) {
        Toast.show({ type: 'error', text1: 'Error', text2: 'No se pudo conectar con el servidor.' });
    }
} 

const logUser = async (data: UserLogData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {email: data.email, pswd: data.pswd},
            {headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            const token = response.data.object.token;
            if (token) {
                Toast.show({ type: 'success', text1: 'Logueo exitoso', text2: '¡Bienvenido!' });
                await asyncStorageService.save(asyncStorageService.KEYS.userToken, token);
                router.navigate("/")
            } else {
                Toast.show({ type: 'error', text1: 'Error', text2: 'No se ha recibido un token válido'});
            }
            
          } else if (response.status === 400) {
            Toast.show({ type: 'error', text1: 'Error', text2: 'No se enviado el cuerpo de la petición correctamente' });
          } else {
            Toast.show({ type: 'error', text1: 'Error', text2: 'El email o la contraseña son incorrectos' });
          }
        return response.data;
    } catch (error) {
        Toast.show({ type: 'error', text1: 'Error', text2: 'No se pudo conectar con el servidor.' });
    }
}
export const storageService = {
    registerUser,
    logUser
  };