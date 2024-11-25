import { ImageSourcePropType, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DARK_COLORS, LIGHT_COLORS } from '../styles/colors/color'
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProductProps } from './Product';
import { CATEGORIES } from '../data/Categories';
import uuid from 'react-native-uuid';
import { Picker } from '@react-native-picker/picker';

type FormularyProps = {
  closeFormulary: () => void
  onSave: (product: ProductProps) => void
  editingProduct?: ProductProps | null
}

const ModalFormulary = ({closeFormulary, onSave, editingProduct}: FormularyProps) => {

const [name, setName] = useState('');
const [category, setCategory] = useState<ImageSourcePropType>(CATEGORIES.others);
const [quantity, setQuantity] = useState(0);
const [udPrice, setUdPrice] = useState(0.00);

const [product, _setProduct] = useState<ProductProps>();

useEffect(() => {
if (product) {
setName(product.name);
setCategory(product.category);
setQuantity(product.quantity);
setUdPrice(product.udPrice);
} else {
setName('');
setCategory(CATEGORIES.others);
setQuantity(0);
setUdPrice(0.00);
}
}, [product]);

useEffect(() => {
  if (editingProduct) {
    setName(editingProduct.name);
    setCategory(editingProduct.category);
    setQuantity(editingProduct.quantity);
    setUdPrice(editingProduct.udPrice);
  } else {
    setName('');
    setCategory(CATEGORIES.others);
    setQuantity(0);
    setUdPrice(0.00);
  }
}, [editingProduct]);

const handleSave = () => {
  if (name == "" || quantity == 0 || udPrice == 0.00) return;
  onSave({
    id: editingProduct?.id || uuid.v4().toString(),
    name,
    category,
    quantity,
    udPrice,
    isObtained: false,
  });
};
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.formularyWrapper}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{editingProduct ? "Editar el producto :" : "Añadir un producto :"}</Text>
            <Pressable onPress={closeFormulary}>
              <Ionicons style={{bottom: 20, left: 10}} name='close' size={25} ></Ionicons>
            </Pressable>
          </View>
          <View style={styles.dataRow}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10 }]}
              placeholder="Nombre:"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              keyboardType= "decimal-pad"
              placeholder="Precio:"
              value={udPrice.toString()}
              onChangeText={(text) => setUdPrice(parseFloat(text) || 0.00)}
            />
          </View>
          <Text style={styles.label}>Categoría :</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(value) => setCategory(value)}
              style={styles.picker}
            >
              <Picker.Item label="Seleccione una categoría" value={CATEGORIES.others} />
              <Picker.Item label="Panadería" value={CATEGORIES.bakery} />
              <Picker.Item label="Bebidas" value={CATEGORIES.drinks} />
              <Picker.Item label="Enlatados" value={CATEGORIES.cannedFood} />
              <Picker.Item label="Carnes" value={CATEGORIES.meats} />
              <Picker.Item label="Pescados" value={CATEGORIES.fish} />
              <Picker.Item label="Frutas/Verduras" value={CATEGORIES.fruitsVegetables}  />
              <Picker.Item label="Otros" value={CATEGORIES.others} />
            </Picker>
          </View>
          <Text style={styles.label}>Cantidad :</Text>
          <TextInput 
            style={styles.input} 
            placeholder="0" 
            keyboardType="numeric"
            value={quantity.toString()}
            onChangeText={(text) => setQuantity(parseInt(text) || 0)}
            />
          <Pressable style={styles.confirmButton} onPress={handleSave}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ModalFormulary

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  formularyWrapper: {
    width: '80%',
    backgroundColor: LIGHT_COLORS.lightBlue,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_COLORS.black,
    marginBottom: 15,
  },
  dataRow: {
    flexDirection: 'row',
    width: '100%',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: LIGHT_COLORS.darkBlue,
    borderRadius: 10,
    width: "100%",
    backgroundColor: LIGHT_COLORS.white
  },
  picker: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#3C4858',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: LIGHT_COLORS.darkBlue,
    borderRadius: 10,
    backgroundColor: LIGHT_COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: DARK_COLORS.black,
    width: '100%',
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: LIGHT_COLORS.lightPink,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: LIGHT_COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
})