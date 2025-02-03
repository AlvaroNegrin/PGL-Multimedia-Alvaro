import axios from "axios";
import { asyncStorageService } from "./async-storage-service";
import Toast from "react-native-toast-message";

const API_URL_IMAGE = "http://192.168.1.18:5000/images";

const getImages = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL_IMAGE}/get-all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.object;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud:", error.response?.data || error.message);
      Toast.show({ type: 'error', text1: 'Error', text2: error.response?.data?.message || 'No se pudieron obtener las imágenes' });
    } else {
      console.log('Error fetching images:', error);
      Toast.show({ type: 'error', text1: 'Error', text2: 'Ocurrió un error inesperado' });
    }
    return [];
  }
};

const uploadImage = async (base64: string, token: string) => {
  try {
    const payload = {
      width: 1920,
      height: 1080,
      encodedData: base64,
    };
    await axios.post(`${API_URL_IMAGE}/save`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    Toast.show({ type: 'success', text1: 'Éxito', text2: 'Imagen subida correctamente' });
  } catch (error) {
    console.error('Error uploading image:', error);
    Toast.show({ type: 'error', text1: 'Error', text2: 'No se pudo subir la imagen' });
    throw error;
  }
};

const deleteImage = async (id: number) => {
  try {
    const token = await asyncStorageService.get();
    await axios.delete(`${API_URL_IMAGE}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    Toast.show({ type: 'success', text1: 'Éxito', text2: 'Imagen eliminada correctamente' });
  } catch (error) {
    console.error('Error deleting image:', error);
    Toast.show({ type: 'error', text1: 'Error', text2: 'No se pudo eliminar la imagen' });
    throw error;
  }
};

export const imageService = {
  getImages,
  uploadImage,
  deleteImage,
};
