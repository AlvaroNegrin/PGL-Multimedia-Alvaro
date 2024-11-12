import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Description from '../../components/Description'

const TabsLayout = () => {
  return (
    <View>
        <Description/>
        <View style={styles.container}>
            <Tabs>
                <Tabs.Screen name="hobbies" options={{headerShown: false}} />
                <Tabs.Screen name="repository" options={{headerShown: false}} />
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