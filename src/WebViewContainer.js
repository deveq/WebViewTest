import React, { useRef } from 'react';
import WebView from 'react-native-webview';

const onMessage = (e) => {
    const event = JSON.parse(e.nativeEvent.data);
    console.log('onMessage', event);
}

const onLoadProgress = ( { nativeEvent }) => {
    if (nativeEvent.progress === 1) {
        if (webViewRef.current) {
            webViewRef.current.postMessage(
                JSON.stringify({ changeText: 'World' }),
                '*'
            )
        }
    }
}

const WebViewContainer = () => (
    <WebView
        ref={webViewRef} 
        onMessage={onMessage}
        onLoadProgress={onLoadProgress}
    />
)

export default WebViewContainer;