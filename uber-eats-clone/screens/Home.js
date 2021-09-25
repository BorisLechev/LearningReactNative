import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <HeaderTabs />
                <SearchBar />
            </View>
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
})
