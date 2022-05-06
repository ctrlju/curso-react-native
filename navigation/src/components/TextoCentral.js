import React from 'react'
import { Text, View } from 'react-native'

export default props => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.corFundo || 'white'
    }}>
        <Text style={{
            fontSize: 50,
            color: props.corTexto || 'gray'
        }}>
            {props.children}
        </Text>
    </View>
)
