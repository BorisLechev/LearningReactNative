import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: "$$",
    reviews: "1500",
    rating: 4.5,
    categories: [
        { title: "Thai" },
        { title: "Comfort food" },
        { title: "Coffee" },
        { title: "Ice Cream" },
        { title: "Snacks" },
    ],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;
const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${
    price ? " • " + price : ""
} • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
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
