import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" • ");
    const description = `${formattedCategories} ${
        price ? " • " + price : ""
    } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image}} style={ styles.image } />
);

const RestaurantName = (props) => (
    <Text style={ styles.title }>{props.name}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={ styles.description }>{props.description}</Text>
);

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 180,
    },
    title: {
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    },
    description: {
        fontSize: 15.5,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15,
    }
})
