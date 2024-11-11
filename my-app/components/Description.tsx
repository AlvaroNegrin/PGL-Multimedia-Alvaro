import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LIGHT_COLORS } from '../styles/colors/color'

const Description = () => {
  return (
    <View>
        <View style={styles.profileWrapper}>
            <Image style={styles.bodyAvatar} source={require('../assets/images/ranita-feliz.png')} />
            <View style={styles.bodyDescription}>
                <Text style={styles.descriptionTitle}>
                    Descripción sobre mí!
                </Text>
                <Text style={styles.descriptionText}>
                    Soy alumno, me llamo Álvaro y me gusta la programacion y las ranas.
                </Text>
              </View>
            </View>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
    profileWrapper: {
        flexDirection: 'row', 
        alignItems: 'center',
      },
      bodyAvatar: {
        height: 90,
        width: 90,
        borderRadius: 100,
        borderColor: LIGHT_COLORS.darkBlue,
        borderWidth: 1,
      },
      bodyDescription: { 
        margin: 10, 
        backgroundColor: LIGHT_COLORS.lightPink, 
        padding: 10, 
        borderRadius: 10, 
        width: '70%',
      },
      descriptionTitle: { 
        textAlign: 'center', 
        fontWeight: '700', 
        fontSize: 20,
        color: LIGHT_COLORS.white,
      },
      descriptionText: {
        textAlign: 'center',
        color: LIGHT_COLORS.white,
      },
})