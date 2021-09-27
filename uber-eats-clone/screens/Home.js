import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) => setRestaurantData(json.businesses));
    };

    // by default effects run after every completed render - similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        getRestaurantsFromYelp(); // callback
    }, [city] /* dependency*/);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <HeaderTabs />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
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
