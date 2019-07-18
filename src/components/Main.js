import React, { Component }  from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{padding: 10, fontSize: 20}}>
                    一言どうぞ
                </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="ここにメッセージを入れてね!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text>
                    プレビュー：{this.state.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});