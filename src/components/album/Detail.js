import React from 'react'
import {StyleSheet, View, Text, Image, Linking} from 'react-native'
import Card from '../album-card/Card'
import Section from '../album-card/Section'
import Button from '../Button'

const Detail = ({album}) => {
  const {header, thumbnail, thumbnailContainer, headerTitle, albumImage} = styles

  const handlePress = () => {
    Linking.openURL(album.url)
  }

  return (
    <Card>
      <Section>
        <View style={thumbnailContainer}>
          <Image source={{uri: album.thumbnail_image}} style={thumbnail}/>
        </View>
        <View style={header}>
          <Text style={headerTitle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </Section>
      <Section>
        <Image source={{uri: album.image}} style={albumImage}/>
      </Section>
      <Section>
        <Button onPress={handlePress} btnText="Buy Now"/>
      </Section>
    </Card>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    fontSize: 18
  },
  thumbnail: {
    width: 50, 
    height: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null
  }
})

export default Detail