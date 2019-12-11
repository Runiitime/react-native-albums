import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/album/List'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Albums!"/>
      <AlbumList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222235',
    flex: 1,
    paddingBottom: 5
  }
});

export default App;
