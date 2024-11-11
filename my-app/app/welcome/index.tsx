import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { DARK_COLORS, LIGHT_COLORS } from '../../styles/colors/color'

const WelcomePage = () => {
  return (
    <View  style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}  source={require("../../assets/images/happy.jpg")}></Image>
      </View>
      <Text style={styles.welcomeText} >Welcome</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText} > ¡Bienvenido a mi App! Explora mi portfolio y descubre mis proyectos
          </Text> 
      </View>
      <View style={styles.circlesContainer}>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.button} > 
        <Link style={styles.buttonText} href={"#"}>My-Portfolio</Link>
      </View>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_COLORS.white,
    borderWidth: 3,
    borderColor: LIGHT_COLORS.lightPink, 
  },
  imageContainer: {
    width: "80%",
    height: "40%",
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: LIGHT_COLORS.lightPink, 
  },
  descriptionContainer:{
    borderWidth: 3,
    borderColor: LIGHT_COLORS.lightPink,
    borderRadius: 5,
    width: "70%",
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: LIGHT_COLORS.lightBlue, 
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: LIGHT_COLORS.darkBlue, 
    paddingVertical: 10,
    paddingHorizontal: "25%",
    borderRadius: 10,
  },
  buttonText: {
    color: LIGHT_COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})