import React, {useState} from 'react'
import {View} from "react-native";
import styles from "./styles";
import {Book} from '../../../types'

export default function CategoriesSection() {
    const [best, setBest] = useState<Array<Book>>([])
    const [latest, setLatest] = useState<Array<Book>>([])
    const [coming, setComing] = useState<Array<Book>>([])

    return (
        <View/>
    )
}