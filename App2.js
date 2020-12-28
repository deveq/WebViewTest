import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const htmll = `<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
<h2>WebView Test</h2>
<h3>WebView -> RN</h3>
<p><input type="button" value="open new mail" onclick="openNewWindow();"></p>
<p><input type="button" value="close this" onclick="closeThis();"></p>

<script>
    function closeThis() {
        console.log('clicked close button');
        var payload = { command: 'close', text : '하이용' };
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
    }
    function openNewWindow() {
        console.log('clicked open button');
        var payload = { command: 'open', args: { target: 'mail' } };
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
    }
</script>


</body></html>`;


class App2 extends Component {

    constructor(){
        super();
        // this.onMessage = this.onMessage.bind(this);
    }

    onMessage(event) {
        // console.log('event.nativeEvent', event.nativeEvent);
        const data = event.nativeEvent.data;
        if (!data) {
            console.log('no data in nativeEvent');
            return;
        }

        const payload = JSON.parse(data);

        console.log(payload, '여기가 데이터')

        if (!payload) {
            console.log('no payload in nativeEvent.data');
            return;
        }

        console.log('payload', payload);
        console.log(payload.text, 57);

        switch (payload.command) {
            case 'close' :
                console.log('close');
                break;
            case 'open' :
                console.log('open');
                break;
            default :
                break;
        }
    }

    
    
    render() {

        const run = `
            document.body.style.background: 'red';
            console.log('3초');
        `;

        setTimeout(() => {
            this.webref.injectJavaScript(run);
        }, 3000);
        
        return (
            <View style={{ flex: 1 }}>
                <Text style={{width : 100, height: 100, borderColor: 'black', borderWidth: 1}}>으으으으으아아아아</Text>
                <WebView
                   source={{html: htmll}}
                   ref= {r => this.webref = r}
                   onMessage={this.onMessage}
                   injectedJavaScript={`function alal(){alert('load됨');} alal(); `}
                />
            </View>
        )
    }
}

export default App2;