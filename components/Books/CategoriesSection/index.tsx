import React, {useEffect, useState} from 'react'
import {TouchableOpacity, View, Text, TouchableWithoutFeedback} from "react-native";
import styles from "./styles";
import {Book} from '../../../types'
import BookCategoryList from "./BookCategoryList";

const bestBooks: Array<Book> = [
    {
        id: '1',
        category: ["Romantic", "Drama"],
        author: "Manga author",
        name: "Love and lies EP 9",
        image: "https://manga.tokyo/wp-content/uploads/2017/08/59a7a32c0c821.jpg",
        pages: 98
    }
]

const latestBooks: Array<Book> = [
    {
        id: '1',
        category: ["Romantic", "Drama", "Comedy"],
        author: "Movic",
        name: "OREGAIRU EP 2",
        image: "https://pbs.twimg.com/media/ETgXBmHUEAAzl2U.jpg",
        pages: 144
    }
]

const comingBooks: Array<Book> = [
    {
        id: '1',
        category: ["Action", "Fantasy"],
        author: "Manga creator",
        name: "Solo Levelling",
        image: "https://fsb.zobj.net/crop.php?r=-A19ByvkZRF_XGSo1H5J-SRn4SjjHywpm7Mb1fGtLC8rI9rTbx2R3mavCflfiRreDKh94ZrOWnsD51JD5mxhUukLt_GgJsnVl4-7jXDQPgJ4zcexSgOh90K9NYKyuaPv6PwoJaGGPx0Sxd52",
        pages: 357
    }
]

export default function CategoriesSection() {
    const [best, setBest] = useState<Array<Book>>([])
    const [latest, setLatest] = useState<Array<Book>>([])
    const [coming, setComing] = useState<Array<Book>>([])
    const [selected, setSelected] = useState<number>(1)
    const [renderBooks, setRenderBooks] = useState<Array<Book>>([])

    useEffect(() => {
        setBest(bestBooks)
        setLatest(latestBooks)
        setComing(comingBooks)
        setRenderBooks(bestBooks)
    }, [])

    useEffect(() => {
        switch (selected) {
            case 1: setRenderBooks(best)
                break;
            case 2: setRenderBooks(latest)
                break;
            case 3: setRenderBooks(coming)
                break;
        }
    }, [selected])

    return (
        <View>
            <View style={styles.textContainer}>
                <TouchableWithoutFeedback onPress={() => setSelected(1)}>
                    <Text style={(selected == 1) ? styles.btnSelected : styles.btnNotSelected}>Best Seller</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setSelected(2)}>
                    <Text style={(selected == 2) ? styles.btnSelected : styles.btnNotSelected}>The Latest</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setSelected(3)}>
                    <Text style={(selected == 3) ? styles.btnSelected : styles.btnNotSelected}>Coming Soon</Text>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <BookCategoryList books={renderBooks} />
            </View>
        </View>
    )
}