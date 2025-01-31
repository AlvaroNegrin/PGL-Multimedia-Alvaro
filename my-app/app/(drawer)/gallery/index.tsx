import React, { useEffect, useState } from 'react'
import { storageService } from '../../../services/user-management-service';
import Toast from 'react-native-toast-message';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ImageData } from '../../../types/ImageType';
import { asyncStorageService } from '../../../services/async-storage-service';
import { LIGHT_COLORS } from '../../../styles/colors/color';

const { width } = Dimensions.get('window'); 
const imageSize = width / 3 - 15;

const GalleryPage = () => {

  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {

    const fetchImages = async () => {
        const token = await asyncStorageService.get();
        const imagesData: ImageData[] = await storageService.getImages(token!);
        setImages(imagesData);
    };

    fetchImages();
  }, []);

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
            <Image
              source={{ uri: `data:image/png;base64,${item.encodedData}` }}
              style={styles.image}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLORS.white, // Fondo rosa claro
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
    borderColor: '#D3D3D3', // Borde gris suave
  },
});

export default GalleryPage