import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import Header from "../components/Header";

const Layout = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Header />
        </View>
        <View style={styles.content}>
            <Slot/>
        </View>
    </View>
    
  )
}

export default Layout

const styles = StyleSheet.create({
    container:{
      flex: 1
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