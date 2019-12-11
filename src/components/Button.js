import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

export default ({onPress, btnText}) => {
  const {button, text} = styles

  return (
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={text}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#E57A44',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E57A44',
    marginRight: 5,
    marginLeft: 5
  },
  text: {
    alignSelf: 'center',
    color: '#222235',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})