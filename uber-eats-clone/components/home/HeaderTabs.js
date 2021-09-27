import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HeaderTabs(props) {
    return (
        <View style={styles.container}>
            <HeaderButton 
                text="Delivery" 
                btnColor="black" 
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab} 
            />
            <HeaderButton 
                text="Pickup" 
                btnColor="white" 
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab} 
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity 
        style={[styles.button, { backgroundColor: props.activeTab === props.text ? "black" : "white" }]} 
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={styles.buttonText, { color: props.activeTab === props.text ? "white" : "black" }}>
            {props.text}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    button: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "900",
        color: "rgb(255, 255, 255)",
    }
})
