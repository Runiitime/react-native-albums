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
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
})