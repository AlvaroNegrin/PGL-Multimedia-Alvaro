import React from 'react'
import PropTypes from 'prop-types'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot } from 'expo-router'

const AppLayout = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
        <Slot/>
    </GestureHandlerRootView>
  )
}


export default AppLayout