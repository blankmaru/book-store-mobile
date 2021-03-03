import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import BooksHeader from "../components/Books/BooksHeader";
import ButtonGroup from "../components/Books/ButtonGroup";
import MyBookList from "../components/Books/MyBookList";
import CategoriesSection from "../components/Books/CategoriesSection";
import BookItemExt from "../components/Books/CategoriesSection/BookItemExt";
import BookCategoryList from "../components/Books/CategoriesSection/BookCategoryList";

export default function BooksScreen() {
  return (
    <ScrollView style={styles.container}>
      <BooksHeader />
      <View style={{padding: 20}}>
          <ButtonGroup />
          <MyBookList />
          <CategoriesSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
