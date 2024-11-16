import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={styles.Container}>
      <Text>Categories</Text>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})