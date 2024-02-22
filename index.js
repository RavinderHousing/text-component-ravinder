import { View, Text } from 'react-native'
import React from 'react'

const MagicText = ({
    width, height, bgColor,
    title, titleColors,
    titleSize, borderRadius}) => 
{
    return (
        <View 
            style={{width: width, height: height,
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }}
        >
            <Text 
                style={{color: titleColors, fontSize: titleSize}}
            >
                {title}
            </Text>
            
        </View>
    )
}

export default MagicText