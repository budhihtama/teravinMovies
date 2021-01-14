import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function splashScreen() {
    return (
        <View>
            <Image source={require('../../assets/image/teravin.png')} />
        </View>
    )
}

const styles = StyleSheet.create({})
