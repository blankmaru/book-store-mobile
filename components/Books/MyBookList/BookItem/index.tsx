import React from 'react'
import {Image, View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Book} from "../../../../types";

export default function BookItem(props: Book) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={{uri: props.image}}
                    style={styles.image}/>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name={"clock"} size={20} color={"gray"} />
                    <Text style={{color: 'gray'}}> {props.timeReading}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name={"file-multiple"} size={20} color={"gray"} />
                    <Text style={{color: 'gray'}}> {props.prcRead}</Text>
                </View>
            </View>
        </View>
    )
}