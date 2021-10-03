import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function ViewCart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items); // get all items from cart state
    
    // '$13. 50'
    // '13.50'
    // +'13.50' -> 13.5
    // [13.5, 20.5, 9.5]
    // reduce -> [13.5, 20.5, 9.5]
    // 43.5
    const total = items
    .map((item) => +(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUsd = total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <>
            {total ? (
                <View style={ styles.buttonContainer }>
                    <View style={ styles.buttonInnerContainer }>
                        <TouchableOpacity style={ styles.button }>
                            <Text style={ styles.buttonText }>View Cart</Text>
                            <Text style={ styles.totalPrice }>{totalUsd}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </>
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
        top: 100,
        zIndex: 999,
    },
    buttonInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        marginRight: 30,
        color: 'rgb(255, 255, 255)',
    },
    totalPrice: {
        justifyContent: 'flex-end',
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
    },
});
