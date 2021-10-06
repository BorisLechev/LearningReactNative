import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function CustomListItem() {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={ styles.itemTitle }>
                    YouTube Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"> // ellipsesizeMode dots at the end xxxxx...
                    This is a test sub
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    itemTitle: {
        fontWeight: 'bold',
    },
});
