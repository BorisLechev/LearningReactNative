import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
];
  
export default function RestaurantItems({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
               <TouchableOpacity 
                    key={index}
                    activeOpacity={1} 
                    style={ styles.restaurantContainer }
                    onPress={() => navigation.navigate('RestaurantDetails', {
                        // route in RestaurantDetails
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })}
                >
                    <View style={ styles.restaurantInnerContainer }>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
           ))}
        </>
    )
}

const RestaurantImage = (props) => (
    // TouchableOpacity must have parent element
    <>
        <Image source={{ uri: props.image }} style={styles.image} />
        <TouchableOpacity style={styles.heartWrapper}>
            <MaterialCommunityIcons name="heart-outline" size={25} style={ styles.heart } />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View>
        <View>
            <Text style={ styles.name }>{props.name}</Text>
            <Text style={ styles.time }>30-45 • min</Text>
        </View>
        <View style={ styles.ratingWrapper }>
            <Text>{props.rating}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    restaurantContainer: {
        marginBottom: 30,
    },
    restaurantInnerContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    image: {
        width: "100%",
        height: 180,
    },
    heartWrapper: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    heart: {
        color: 'rgb(255, 255, 255)',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 13,
        color: 'gray',
    },
    ratingWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgb(238, 238, 238)',
    }
})
