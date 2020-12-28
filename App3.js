import React, { Component, createRef} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import WebView from 'react-native-webview';

class App3 extends Component {

    input2 = createRef();

    focusOn = () => {
        console.log(this.input2);
        this.input2.current.focus();
    }

    render() {
        return (
            <View style={{flex:1,}}>
                <Button
                    title='button'
                    onPress={this.focusOn}
                />

                <TextInput
                    ref={this.input2}
                    placeholder='input input input'
                />
                <TextInput
                    placeholder='input2'
                />

            </View>
        )
    }
}

export default App3;