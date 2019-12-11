import React from 'react'
import {View, StyleSheet} from 'react-native'

export default ({children}) => {
  
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#D4AA7D',
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#EFD09E',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
})