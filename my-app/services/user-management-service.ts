import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";
import { UserData } from "../types/UserType";

const API_URL = "http://192.168.1.18:5000/auth";

const registerUser = async (data: UserData) => {
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
export const storageService = {
    registerUser
  };