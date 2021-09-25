import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="Search" 
                styles={{
                    textInput: {
                        backgroundColor: 'rgb(238, 238, 238)',
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: 'rgb(238, 238, 238)',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    },
                }} 
                renderLeftButton={() => (
                    <View style={ styles.leftButton }>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={ styles.rightButton }>
                        <AntDesign name="clockcircle" style={ styles.clockIcon } size={11} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
    },
    leftButton: {
        marginLeft: 10,
    },
    rightButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
        padding: 9,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 30,
    },
    clockIcon: {
        marginRight: 6,
    }
})
