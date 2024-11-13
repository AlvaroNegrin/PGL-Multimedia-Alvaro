import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { LIGHT_COLORS } from '../styles/colors/color';

export type CardProps = {
  info: string
  image: ImageSourcePropType
}
export const Card = ({image,info}: CardProps) => {
  return (
    <View style={styles.item}>
        <Image style={styles.imgItem} source={image}></Image>
        <Text style={styles.textItem}>{info}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row', 
        borderColor: LIGHT_COLORS.darkBlue,
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 20,
        color: "#262a2d",
        textAlign: 'center',
        backgroundColor: LIGHT_COLORS.white,
      },
      imgItem: {
        height: 110,
        width: 90,
        borderRadius: 10,
        borderColor: LIGHT_COLORS.darkBlue,
        borderWidth: 1,
      },
      textItem: {
        borderColor: LIGHT_COLORS.darkBlue,
        padding: 20,
        color: LIGHT_COLORS.lightPink,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16,
        margin: 'auto',
      }
  });