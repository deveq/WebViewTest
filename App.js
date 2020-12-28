/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Alert } from "react-native";
import { WebView } from "react-native-webview";

const html = `
    <script>
      function send(){
        window.postMessage('hello react-native!!');
      }
      function send2() {
        ReactNativeWebView.postMessage('hello react-native!');
      }


        window.__WEBVIEW_BRIDGE__ = {
          init : function() {
            try {
              alert('web에서 alert');
            } catch (err) {
              console.error(err);
            }
          }
        };

        window.__WEBVIEW_BRIDGE__.init();
    </script>
    <button onclick="send2()">Send</button>
`;

class App extends Component {

  constructor(){
    super();

  }

  onWebViewMessage = (e) => {

    //webView로부터 온 메세지는 event.nativeEvent.data로 !
    console.log(e);
    console.log(e.nativeEvent.data);
  }

  onLoadWebView = () => {
    this.webref.postMessage('Hi webView');
  };

  render() {
    return (
        <WebView style={{top:50}}
          ref={(r) => (this.webref = r)}
          source={{html}}
          // onMessage={this.onWebViewMessage}
          onLoad={this.onLoadWebView}
        />
    );
  }
}

export default App;
