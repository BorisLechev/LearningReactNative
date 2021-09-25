import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderTabs />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30,
    },
})
