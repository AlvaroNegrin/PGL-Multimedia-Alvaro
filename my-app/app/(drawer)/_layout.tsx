import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import Header from "../../components/Header";
import Description from '../../components/Description';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const Layout = () => {
  return (
            <Drawer screenOptions={{
                header: () => <Header  />
            
            }}>
                <Drawer.Screen
                    name='welcome/index'
                    options={{
                        drawerLabel: "Welcome",
                        title: "Welcome"
                    }
                    }
                />
                <Drawer.Screen
                    name='(tabs)'
                    options={{
                        drawerLabel: "Portfolio",
                        title: "Portfolio"
                    }
                    }
                />
                <Drawer.Screen
                    name='shoppinglist/index'
                    options={{
                        drawerLabel: "ShoppingList",
                        title: "ShoppingList"
                    }
                    }
                />
            </Drawer>
    
  )
}

export default Layout

const styles = StyleSheet.create({
    container:{
      flex: 10
    },
    header: {
        flex: 2
    },
    content: {
        flex: 8
    }
})