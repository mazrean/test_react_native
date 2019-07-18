import React, { Component }  from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default class Footer extends Component {

    _onPressButton() {
        Alert.alert('ボタンが押された')
    }

    render() {
        return (
        <View style={styles.container}>
            <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="red"
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});