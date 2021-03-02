import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import BooksHeader from "../components/Books/BooksHeader";
import ButtonGroup from "../components/Books/ButtonGroup";
import MyBookList from "../components/Books/MyBookList";
import CategoriesSection from "../components/Books/CategoriesSection";

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <BooksHeader />
      <View style={{padding: 20}}>
          <ButtonGroup />
          <MyBookList />
          <CategoriesSection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
