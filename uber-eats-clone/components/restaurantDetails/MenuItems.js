import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel.",
        price: "$13.50",
        image: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw=",
    },
    {
        title: "Musaka",
        description: "With butter lettuce, tomato and sauce bechamel.",
        price: "$23.50",
        image: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw=",
    },
    {
        title: "Lorem Ipsum",
        description: "With butter lettuce, tomato and sauce bechamel.",
        price: "$33.50",
        image: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw=",
    },
    {
        title: "Banitsa",
        description: "With butter lettuce, tomato and sauce bechamel.",
        price: "$3.50",
        image: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw=",
    }
];

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={ styles.menuItem }>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation="vertical " />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={ styles.foodInfoContainer }>
        <Text style={ styles.title }>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View style={ styles.foodInfoContainer }>
        <Image source={{ uri: props.food.image }} style={ styles.image } />
    </View>
);

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    foodInfoContainer: {
        width: 240,
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 19,
        fontWeight: "900",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    }
});
