import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native'
import axios from 'axios'
import Detail from './Detail'

const List = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(res => {
      if(res.status === 200) {
        setAlbums(res.data)
      }
    }).catch(err => {
      console.log('err', err)
    })
  }, [])

  const renderAlbums = () => {
    if(albums.length === 0) return <Text>There are no albums</Text>

    return albums.map((album, index) => <Detail album={album} key={album.title}/>)
  }
  
  return (
    <ScrollView>
      {renderAlbums()}
    </ScrollView>
  )
}

export default List