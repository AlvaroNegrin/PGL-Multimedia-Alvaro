import React, { useEffect, useRef, useState } from 'react';
import { storageService } from '../../../services/user-management-service';
import { Button, Dimensions, FlatList, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageData } from '../../../types/ImageType';
import { asyncStorageService } from '../../../services/async-storage-service';
import { LIGHT_COLORS } from '../../../styles/colors/color';
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import CameraModal from '../../../components/CameraModal';
import { useFocusEffect } from 'expo-router';
import { imageService } from '../../../services/image-management-service';

const { width } = Dimensions.get('window');
const imageSize = width / 3 - 15;

const GalleryPage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!cameraVisible) {
      fetchImages();
    }
  }, [cameraVisible]);

  const fetchImages = async () => {
    try {
      const token = await asyncStorageService.get();
      if (!token) throw new Error('No token found');
      const imagesData: ImageData[] = await imageService.getImages(token);
      setImages(imagesData);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleOpenCamera = async () => {
    console.log("Estado de permisos:", permission);

    if (!permission) {
      return;
    }

    if (!permission.granted) {
      const newPermission = await requestPermission();
      console.log("Nuevo estado de permisos:", newPermission);

      if (!newPermission.granted) {
        alert("Se requieren permisos de cámara para continuar.");
        return;
      }
    }

    setCameraVisible(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Imágenes</Text>

      {images.length === 0 ? (
        <Text style={styles.noImagesText}>No hay imágenes disponibles.</Text>
      ) : (
        <FlatList
          data={images}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.gallery}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedImage(item.encodedData)} onLongPress={() => imageService.deleteImage(item.id).then(fetchImages)}>
              <Image source={{ uri: `data:image/png;base64,${item.encodedData}` }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
      )}

      <Pressable style={styles.cameraButton} onPress={handleOpenCamera}>
        <Text style={styles.cameraButtonText}>Abrir Cámara</Text>
      </Pressable>

      <Modal visible={selectedImage !== null} transparent={true}>
        <TouchableOpacity style={styles.bigImage} onPress={() => setSelectedImage(null)}>
          <Image source={{ uri: `data:image/png;base64,${selectedImage}` }} style={{ width: '90%', height: '90%' }} />
        </TouchableOpacity>
      </Modal>

      <CameraModal visible={cameraVisible} onClose={() => setCameraVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: LIGHT_COLORS.lightPink,
    textAlign: 'center',
    marginBottom: 20,
  },
  noImagesText: {
    fontSize: 18,
    color: LIGHT_COLORS.lightPink,
    textAlign: 'center',
  },
  gallery: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D3D3D3',
  },
  cameraButton: {
    backgroundColor: LIGHT_COLORS.darkBlue,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin: "10%"
  },
  cameraButtonText: {
    color: LIGHT_COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  bigImage: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
});

export default GalleryPage;