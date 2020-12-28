import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import MainWebView from './screens/MainWebView';
import SettingScreen from './screens/SettingScreen';
import TabBarIcon from './components/TabBarIcon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App2 extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <NavigationContainer>
                    <Tab.Navigator 
                    initialRouteName='Main'
                    screenOptions={({route}) => ({
                        tabBarLabel : route.name,
                        tabBarIcon : ({focused}) => (
                            <TabBarIcon
                                name={route.name}
                                focused={focused}
                            />
                        )
                    })} 
                    >
                        <Tab.Screen
                        name='Main'
                        component={MainWebView}
                        />
                        <Tab.Screen
                        name='Setting'
                        component={SettingScreen}
                        />
                    </Tab.Navigator>

                </NavigationContainer>

            </View>
        )
    }
}

export default App2;