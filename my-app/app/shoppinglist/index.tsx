import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LIGHT_COLORS } from '../../styles/colors/color';
import Product, { ProductProps } from '../../components/Product';
import ModalFormulary from '../../components/ModalFormulary';

const ShoppingPage = () => {

  const [products, setProducts] = useState<ProductProps[]>([])
  const [isFormularyOpen, setIsFormularyOpen] = useState<boolean>(false)

  const totalPrice = products.reduce((acc, product) => acc + (product.udPrice * product.quantity), 0);

  const addProduct = (product:ProductProps) => {
    setProducts((elto) => [
      ...elto,
      {...product},
    ])
    setIsFormularyOpen(false)
  }
  const deleteProduct = (id:String) => setProducts((prev) => prev.filter((product) => product.id !== id));
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
          <Text style={styles.title}>Lista de la compra</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>Precio total: {totalPrice.toFixed(2)}€</Text>
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
                  onDelete={() => deleteProduct(item.id)}
                />
              )}
              keyExtractor={(item) => item.id}
            />
        )
        }
        <Pressable style={styles.addButton} onPress={() => setIsFormularyOpen(true)}>
          <Text style={styles.addButtonText}>Añadir producto</Text>
        </Pressable>
        <Modal id='Formulary' visible={isFormularyOpen} transparent={true}>
          <ModalFormulary closeFormulary={() => setIsFormularyOpen(false)} onSave={addProduct}></ModalFormulary>
        </Modal>
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