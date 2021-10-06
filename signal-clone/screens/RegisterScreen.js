import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from "react-native-elements";
import { auth } from '../firebase';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("https://censur.es/wp-content/uploads/2019/03/default-avatar.png");

    // will be flushed synchronously, before the browser has a chance to paint
    useLayoutEffect(() => {
        navigation.setOptions({
          headerBackTitle: "Login", // This only appears in iOS
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: image,
            });
            console.log(image);
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={ styles.container }>
            <StatusBar style="light" />

            <Text h2 style={ styles.title }>
                Create a Signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Button raised containerStyle={ styles.button } type="solid" title="Register" onPress={register} />
            <Button
                onPress={() => navigation.navigate("Login")}
                containerStyle={ styles.button }
                title="Login"
                type="outline"
            />
            {/* <View style={{ height: 100 }} /> */}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        marginVertical: 30,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
