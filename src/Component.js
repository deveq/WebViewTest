import React, { useEffect, useState } from 'react';

const [ textValue, setTextValue ] = useState('Hello');

const Component = () => {
    const onMessageHandler = (e) => {
        const event = JSON.parse(e.data);
        window.ReactNativeWebView.postMessage(JSON.stringify({event: event}))
        if (event.changeText) {
            setTextValue(event.changeText);
        }
    }

    const onClick = (e) => {
        e.preventdefault();
        window.ReactNativeWebView.postMessage(JSON.stringify({ method: 'click'}))
    }

    useEffect(() => {
        const isUIWebView = () => {
            return navigator.userAgent
                .toLowerCase()
                .match(/\(ip.*applewebkit(?!.*(version|crios))/)
        }

        const receiver = isUIWebView() ? window : document

        receiver.addEventListener('message', onMessageHandler)
        return () => {
            receiver.removeEventListener('message', onMessageHandler)
        }
    })


    return (
        <div>
        <p>Hello</p>
        <button>Button</button>
      </div>
    )
}

export default Component;