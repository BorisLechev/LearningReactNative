import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false);

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems); // get all items from cart state
    
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

    const checkoutModalContent = () => {
        return (
            <>
                <View style={ styles.modalContainer }>
                    <View style={ styles.modalCheckoutContainer }>
                        <Text style={ styles.restaurantName }>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={ styles.subtotalContainer }>
                            <Text style={ styles.subtotalText }>Subtotal</Text>
                            <Text>{totalUsd}</Text>
                        </View>
                        <View style={ styles.modalButtonContainer }>
                            <TouchableOpacity
                                style={ styles.modalButtonInnerContainer }
                                onPress={() => setModalVisible(false) }
                            >
                                <Text style={ styles.modalButtonText }>Checkout</Text>
                                <Text style={ styles.modalButtonTextDollars }>
                                    {total ? totalUsd : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
             </View>
          </>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                    {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={ styles.buttonContainer }>
                    <View style={ styles.buttonInnerContainer }>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)} 
                            style={ styles.button }>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalCheckoutContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    subtotalText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalButtonInnerContainer: {
        marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative",
    },
    modalButton: {
        alignItems: 'center',
        backgroundColor: 'rgb(0, 0, 0)',
        width: 150,
        padding: 10,
        borderRadius: 30,
    },
    modalButtonText: {
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
    },
    modalButtonTextDollars: {
        position: "absolute",
        top: 17,
        right: 20,
        fontSize: 15,
        color: 'rgb(255, 255, 255)',
    },
});
