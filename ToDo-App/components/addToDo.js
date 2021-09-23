import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    changeHandler = (text) => {
        this.setState({ text: text });
        // console.log(text);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Add your ToDo here..."
                    onChangeText={this.changeHandler}
                />
                <Button
                    title="Press me"
                    color="coral"
                    onPress={() => this.props.onSubmit(this.state.text)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#dddddd',
    },
});

export default AddToDo;