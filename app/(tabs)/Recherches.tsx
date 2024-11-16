import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Recherches = () => {
  return (
    <View style={styles.Container}>
      <Text>Recherches</Text>
    </View>
  )
}

export default Recherches

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})