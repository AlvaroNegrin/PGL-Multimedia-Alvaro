import React, { useRef, useState } from 'react';
import { View, Modal, Pressable, StyleSheet, Text, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { asyncStorageService } from '../services/async-storage-service';
import { storageService } from '../services/user-management-service';
import { LIGHT_COLORS } from '../styles/colors/color';

type CameraModalProps = {
    visible: boolean;
    onClose: () => void;
};

const CameraModal = ({ visible, onClose }: CameraModalProps) => {
    const cameraRef = useRef<CameraView | null>(null);
    const [flash, setFlash] = useState(false);
    const [facing, setFacing] = useState<'front' | 'back'>('back');

    const toggleFlash = () => setFlash((prev) => !prev);
    const toggleFacing = () => setFacing((prev) => (prev === 'back' ? 'front' : 'back'));

    const uploadImage = async (base64: string) => {
        try {
            const token = await asyncStorageService.get();
            if (!token) throw new Error('No token found');
            await storageService.uploadImage(base64, token);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            const data = await cameraRef.current.takePictureAsync({ base64: true });
            if (data?.base64) {
                await uploadImage(data.base64);
                onClose();
            } else {
                alert("Ocurrió un error al tomar la foto.");
            }
        }
    };

    return (
        <Modal visible={visible} animationType="slide">
            <CameraView
                enableTorch={flash}
                style={styles.camera}
                facing={facing}
                mode="picture"
                ref={cameraRef}
                onCameraReady={() => console.log("Camera ready!")}
            >
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.iconButton} onPress={toggleFlash}>
                        <Ionicons name={flash ? "flash-off" : "flash"} size={32} color="black" />
                    </Pressable>
                    <Pressable style={styles.pictureButton} onPress={takePicture} />
                    <Pressable style={styles.iconButton} onPress={toggleFacing}>
                        <Ionicons name="camera-reverse" size={32} color="black" />
                    </Pressable>
                </View>
            </CameraView>
            <Pressable style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" size={32} color="white" />
            </Pressable>
        </Modal>
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
    camera: { flex: 1 },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    iconButton: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
    },
    pictureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 50,
    },
});

export default CameraModal;
