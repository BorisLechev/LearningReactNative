import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';

const YELP_API_KEY =
  "i7EwHE9MMjYPBXMjhqhoYKtLUWqBPFag2W4o6WftTzDuwnn97SgoryMLbkWcf4NQHGtnjHyBIz9t2_7ySWUJl0-G7A5oyAmTa7U3uYegMk16RR2zYccm4kBh1gFXYXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) => setRestaurantData(json.businesses.filter((business) =>
             business.transactions.includes(activeTab.toLowerCase())
            ))
        );
    };

    // by default effects run after every completed render - similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        getRestaurantsFromYelp(); // callback
    }, [city, activeTab] /* dependency*/);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(238, 238, 238)',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30,
    },
    innerContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 15,
    }
});
