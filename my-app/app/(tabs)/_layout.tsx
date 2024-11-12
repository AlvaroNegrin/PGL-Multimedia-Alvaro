import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Description from '../../components/Description'
import Ionicons from "@expo/vector-icons/Ionicons";
import { LIGHT_COLORS } from '../../styles/colors/color';

const TabsLayout = () => {
  return (
    <View>
        <Description/>
        <View style={styles.container}>
            <Tabs screenOptions={{ tabBarActiveTintColor: LIGHT_COLORS.darkBlue}}>
                <Tabs.Screen name="hobbies"  options={{headerShown: false, 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" color={color} size={size} /> )
                }} />
                <Tabs.Screen name="repository" options={{headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="qr-code-outline" color={color} size={size} /> )
                }} />
            </Tabs>
        </View>
    </View>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "87%"
    }
})