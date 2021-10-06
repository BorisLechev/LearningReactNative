import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Image } from "react-native-elements";
import { auth } from '../firebase';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // do something after render
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);

            if (authUser) {
                navigation.replace("Home");
            }
        });
    
        return unsubscribe;
    }, []);

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={ styles.container }>
            <StatusBar style="light" />
            <Image
                source={{ uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png" }}
                style={ styles.logo }
            />
            <View style={ styles.inputContainer }>
            <Input
                placeholder="Email"
                autoFocus
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
                onSubmitEditing={signIn}
            />
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn} />
            <Button
                onPress={() => navigation.navigate("Register")}
                containerStyle={styles.button}
                title="Register"
                type="outline"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    logo: { 
        width: 200, 
        height: 200 
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
