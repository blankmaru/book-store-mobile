import React, {FC} from 'react'
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import styles from "./styles";
import BookItem from "./BookItem";

const books = [
    {
        id: '1',
        img: 'https://ae01.alicdn.com/kf/HTB1cPzlOFXXXXctXpXXq6xXFXXX1/094-Tokyo-Ghoul-Manga-Series-Sui-Ishida-Japanese-Anime-14-x20-Poster.jpg_Q90.jpg_.webp',
        timeReading: '10d 4h',
        prcRead: '80%'
    },
    {
        id: '2',
        img: 'https://pbs.twimg.com/media/ETgXBmHUEAAzl2U.jpg',
        timeReading: '1d 2h',
        prcRead: '10%'
    },
    {
        id: '3',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81R7VAVXM9L.jpg',
        timeReading: '3d 7h',
        prcRead: '90%'
    }
]

const BooksList: FC = () => {
    return <FlatList showsHorizontalScrollIndicator={false} horizontal data={books} renderItem={({item}) => <BookItem id={item.id} image={item.img} prcRead={item.prcRead} timeReading={item.timeReading} />}/>
}

export default function MyBookList() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.headerTitle}>
                    My Book
                </Text>
                <TouchableOpacity>
                    <Text style={styles.headerButton}>see more</Text>
                </TouchableOpacity>
            </View>
            <BooksList />
        </View>
    )
}