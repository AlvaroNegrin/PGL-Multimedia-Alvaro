import React from 'react'
import PropTypes from 'prop-types'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'

const AppLayout = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
        <Slot/>
        <Toast/>
    </GestureHandlerRootView>
  )
}


export default AppLayout