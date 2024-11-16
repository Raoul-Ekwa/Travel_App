import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favoris = () => {
  return (
    <View style={styles.Container}>
      <Text>Favoris</Text>
    </View>
  )
}

export default Favoris

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})