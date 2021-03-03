import React from 'react'
import {View} from "react-native";
import styles from "./styles";
import BookItemExt from "../BookItemExt";
import {Book} from "../../../../types";

interface BookCategoryProps {
    books: Array<Book>
}

export default function BookCategoryList(props: BookCategoryProps) {
    return (
        <View style={styles.container}>
            {props.books.map((item) => <BookItemExt id={item.id} image={item.image} category={item.category}
                                                    pages={item.pages} author={item.author} name={item.name}/>)}
        </View>
    )
}