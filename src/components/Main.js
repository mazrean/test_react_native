import React, { Component }  from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
// axiosのインポート
import axios from 'axios';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }

    _onPressButton() {
        // ボタンが押されたときに、入力した番号をパラメータにし
        // APIリクエストを送る
        axios.get('http://zipcloud.ibsnet.co.jp/api/search', {
            params: {
                zipcode: this.state.code
            }
        })
        .then(response => {
            let address = response.data.results
            var addList = ''
            for(i=0;address.length>i;i++){
                addList += address[i].address1 + address[i].address2 + address[i].address3
            }

            Alert.alert(addList)
            return

        }).catch(err => {
            console.log('err:', err);
            return
        })
        
    }

    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{padding: 10, fontSize: 20}}>
                    郵便番号を入れてね
                </Text>
                <TextInput
                    style={{height: 50}}
                    placeholder="例）0010001"
                    onChangeText={(code) => this.setState({code})}
                />
                <Text>
                    プレビュー：{this.state.code}
                </Text>
                <Button
                    onPress={this._onPressButton.bind(this)}
                    title="Press Me"
                    color="red"
                />
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