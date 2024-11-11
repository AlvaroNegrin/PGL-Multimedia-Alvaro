import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { LIGHT_COLORS } from '../../styles/colors/color'

const RepositoryPage = () => {
  return (
    <View style={styles.qrContainer}>
          <Text style={styles.qrText}>
            This my QR repository scan my code
          </Text>
          <QRCode
            value="https://github.com/AlvaroNegrin"
            logo={require("../../assets/icon.png")}
            logoSize={10}
            logoBackgroundColor="transparent"
          />
        </View>
  )
}

export default RepositoryPage

const styles = StyleSheet.create({
    qrContainer: {
        display: "flex",
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        marginTop: 12,
        backgroundColor: LIGHT_COLORS.white, 
      },
    qrText:{
        color: LIGHT_COLORS.lightPink,
        fontSize: 16
    }
})