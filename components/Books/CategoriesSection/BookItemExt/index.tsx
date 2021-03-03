import React, {FC} from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Book} from "../../../../types";
import {defaultImage} from "../../../../constants/image";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface CategoryItemStyleProps {
    bgColor: object,
    color: object
}

const CategoryItem: (props: { name: string, style: CategoryItemStyleProps }) => JSX.Element = (props: {name: string, style: CategoryItemStyleProps}) => {
    return (
        <TouchableOpacity style={[styles.category, props.style.bgColor]}>
            <Text style={[styles.categoryTitle, props.style.color]}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const Category: (props: { name: string }) => JSX.Element = (props: {name: string}) => {
    const renderSwitch = () => {
        switch(props.name) {
            case 'Romantic':
                return <CategoryItem name={props.name} style={ { bgColor: {backgroundColor: '#800014'}, color: { color: '#f092a1' }} } />
            case 'Adventure':
                return <CategoryItem name={props.name} style={ { bgColor: {backgroundColor: '#006a4e'}, color: { color: '#b8d5cd' }} } />
            case 'Drama':
                return <CategoryItem name={props.name} style={ { bgColor: {backgroundColor: '#03254c'}, color: { color: '#2a9df4' }} } />
            case 'Action':
                return <CategoryItem name={props.name} style={ { bgColor: {backgroundColor: 'white'}, color: { color: 'black' }} } />
            case 'Fantasy':
                return <CategoryItem name={props.name} style={ { bgColor: {backgroundColor: '#3c1361'}, color: { color: '#b491c8' }} } />
            case 'Comedy':
                return <CategoryItem name={props.name} style={ { bgColor: {backgroundColor: '#efa536'}, color: { color: '#ffff9c' }} } />
            default:
                return <TouchableOpacity style={styles.category}>
                    <Text style={styles.categoryTitle}>{props.name}</Text>
                </TouchableOpacity>
        }
    }

    return renderSwitch()
}

export default function BookItemExt(props: Book) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={{uri: props.image || defaultImage}} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                    <Text style={styles.title}>{props.name}</Text>
                    <MaterialCommunityIcons name={"bookmark-outline"} size={30} color={"#666666"} />
                </View>
                    <Text style={styles.subTitle}>{props.author}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <MaterialCommunityIcons name={"book-open"} size={20} color={"#666666"} />
                            <Text style={styles.pages}> {props.pages}p</Text>
                        </View>
                    </View>
                    <View style={styles.categoriesContainer}>
                        {props.category?.map((item) => <Category name={item} />)}
                    </View>
            </View>
        </View>
    )
}