import React, { Component }  from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        let pic = {
        uri: 'https://weblion303.net/wp-content/uploads/2019/04/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%AB%E3%83%B3%E3%83%9A.gif'
        };

        return (
        <View style={styles.container}>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Text>TECH 1000+ Native App</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});