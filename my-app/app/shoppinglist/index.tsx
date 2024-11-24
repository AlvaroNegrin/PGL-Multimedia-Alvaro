import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LIGHT_COLORS } from '../../styles/colors/color';
import { products } from '../../data/Products';
import Product from '../../components/Product';

const ShoppingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
          <Text style={styles.title}>Lista de la compra</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>Precio total: 0€</Text>
      </View>
      <View style={styles.productsContainer}>
        {products.length == 0 ?  (
          <Text style={styles.emptyMessage}>La lista está vacía...</Text>
        ) : (
          <FlatList
              data={products}
              renderItem={({ item }) => (
                <Product
                  id = {item.id}
                  name={item.name}
                  category={item.category}
                  udPrice={item.udPrice}
                  quantity={item.quantity}
                  isObtained={item.isObtained}
                />
              )}
              keyExtractor={(item) => item.id}
            />
        )
        }
        <Pressable style={styles.addButton} >
          <Text style={styles.addButtonText}>Añadir producto</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ShoppingPage

const styles = StyleSheet.create({
    container: {
        flex: 15,
        flexDirection: "column",
        width: "100%" 
        
        
    },
    titleWrapper: {
        alignContent: "center",
        alignItems: "center",
        
        flex: 1
    },
    title: {
      color: LIGHT_COLORS.lightPink,
      fontSize: 34
    },
    priceWrapper: {
      backgroundColor: LIGHT_COLORS.lightBlue,
      justifyContent: "center",
      flex: 1
    },
    price: {
      color: LIGHT_COLORS.white,
      fontSize: 24,
      marginLeft: 10
    },
    productsContainer: {
      borderColor: LIGHT_COLORS.darkBlue,
      borderWidth: 3,
      borderRadius: 20,
      flex: 13,
      width: "95%",
      height : "95%",
      margin : "auto",
      justifyContent: "center"
      
    },
    emptyMessage: {
      fontSize: 24,
      color: LIGHT_COLORS.darkBlue,
      textAlign: "center"
    },
    addButton: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: LIGHT_COLORS.lightPink,
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    addButtonText: {
      color: LIGHT_COLORS.white,
      fontWeight: 'bold',
      fontSize: 16,
    },
})