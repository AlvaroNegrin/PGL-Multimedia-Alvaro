import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LIGHT_COLORS } from '../styles/colors/color';


export type ProductProps = {
    id: string,
    name : string,
    category: ImageSourcePropType,
    udPrice: number,
    quantity: number,
    isObtained: boolean,
    onDelete?: () => void
  }
const Product = ({
    name,
    category,
    udPrice,
    quantity,
    isObtained,
    onDelete
}: ProductProps) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={category} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Cantidad: {quantity}</Text>
        <Text style={styles.details}>{udPrice}€ ud</Text>
        <Text style={styles.details}>En Carrito: {isObtained ? 'Sí' : 'No'}</Text>
        <Pressable style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#73A9E5',
        borderRadius: 15,
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: LIGHT_COLORS.lightBlue,
      },
      info: {
        margin: 10,
      },
      name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: LIGHT_COLORS.darkBlue,
      },
      details: {
        fontSize: 14,
        color: LIGHT_COLORS.darkBlue,
      },
      imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: LIGHT_COLORS.darkBlue,
      },
      deleteButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: LIGHT_COLORS.lightPink,
        borderRadius: 8,
        marginTop: 5
      },
      deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
})