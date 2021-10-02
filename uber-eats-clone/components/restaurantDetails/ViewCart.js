import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ViewCart() {
    return (
        <View style={ styles.buttonContainer }>
            <View style={ styles.buttonInnerContainer }>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonText }>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 100,
        zIndex: 999,
    },
    buttonInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        alignItems: 'center',
        position: 'relative',
        width: 300,
        marginTop: 20,
        padding: 13,
        backgroundColor: 'rgb(0, 0, 0)',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
    },
});
