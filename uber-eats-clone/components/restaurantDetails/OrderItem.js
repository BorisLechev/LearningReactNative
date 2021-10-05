import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrderItem({ item }) {
    const { title, price } = item;

    return (
        <View style={ styles.orderRowContainer }>
            <Text style={ styles.orderTitle }>{title}</Text>
            <Text style={ styles.orderPrice }>{price}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    orderRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
    },
    orderTitle: {
        fontWeight: "600",
        fontSize: 16,
    },
    orderPrice: {
        opacity: 0.7, fontSize: 16,
    },
});
