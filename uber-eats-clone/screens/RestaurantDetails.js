import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'

export default function RestaurantDetails({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={ styles.divider } />
            <MenuItems restaurantName={route.params.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        marginVertical: 20,
    }
});
