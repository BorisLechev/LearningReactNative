import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const image = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai • Comfort Food • $$ • 🎫 • 4 ⭐ (2913+)";

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image}} style={ styles.image } />
);

const RestaurantTitle = (props) => (
    <Text style={ styles.title }>{props.title}</Text>
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
