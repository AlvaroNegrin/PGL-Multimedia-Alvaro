import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import Header from "../components/Header";
import Description from '../components/Description';

const Layout = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Header />
        </View>
        <View style={styles.content}>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}  />
            </Stack>
        </View>
    </View>
    
  )
}

export default Layout

const styles = StyleSheet.create({
    container:{
      flex: 18
    },
    header: {
        flex: 2
    },
    content: {
        flex: 15
    },
    footer: {
        flex: 1
    }
})