import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress(this.props.item.key)}>
                <Text style={styles.item}>{this.props.item.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbbbbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
});

export default ToDoItem;