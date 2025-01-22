import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cards } from '../../../data/Cards'
import { Card } from '../../../components/Card'

const HobbiesPage = () => {
  return (
    <FlatList
          data={cards}
          renderItem={({ item }) => (
            <Card
              info={item.info}
              image={item.image}
            />
          )}
          keyExtractor={(item, index) => `${index}-${item.info}`}
        />
  )
}

export default HobbiesPage

const styles = StyleSheet.create({})