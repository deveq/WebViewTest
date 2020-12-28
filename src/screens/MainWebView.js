import React, { Component } from 'react';
import { View, Button } from 'react-native';
import WebView from 'react-native-webview';

class MainWebView extends Component {

    constructor(props) {
        super(props);
    }

    headerStyle = () => {
        this.props.navigation.setOptions({
            headerRight : () => (
                <Button
                 title='세팅'
                 onPress={()=>this.props.navigation.navigate('Setting')}
                />
            )
        })
    }

    render() {

        this.headerStyle();

        return (
            <View style={{flex:1}}>
                <WebView
                    source={{uri: 'https://wantit.real-seller.com/' }}
                />
            </View>
        )
    }
}

export default MainWebView;