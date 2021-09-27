import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'

export default function RestaurantDetails() {
    return (
        <View>
            <About />
            <Divider width={1.8} style={ styles.divider } />
            <MenuItems />
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        marginVertical: 20,
    }
});
