import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Main from './src/components/Main';
import Footer from './src/components/Footer';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Header />
        <Main />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
