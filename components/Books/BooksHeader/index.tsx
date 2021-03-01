import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles'
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function BooksHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>Hello</Text>
                <Text style={styles.title}>Nikita Vozniuk</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <View style={styles.buttonInner}>
                    <MaterialCommunityIcons name={"star-four-points-outline"} size={15} color={"white"} />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>200 points</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
