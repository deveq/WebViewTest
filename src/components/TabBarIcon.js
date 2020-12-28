import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({focused, name}) => {

    let iconSize;
    let iconName;

    if (name === 'Main') {
        iconName = 'home-outline'
    } else if (name === 'Setting') {
        iconName = 'settings-outline'
    } else {
        iconName = 'help-outline'
    }

    iconSize = focused ? 30 : 20;
    return (
        <Ionicons
            name={iconName}
            size={iconSize}
        />
    )
}

export default TabBarIcon;