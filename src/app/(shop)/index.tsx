import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../../assets/products'
import { ProductListItem } from '../../components/productListItem'
import ListHeader from "../../components/listHeader";

const Home = () => {
  return (
    <View>
      <FlatList
       data={PRODUCTS} 
       renderItem={({ item }) =>  <ProductListItem product={item} />}
       keyExtractor={item => item.id.toString()}
       numColumns={2}
       ListHeaderComponent={() => <ListHeader />}
       contentContainerStyle={styles.flatListContainainer}
       columnWrapperStyle={styles.flatListColumn}
       style={{paddingHorizontal: 10, paddingVertical: 5}}
       />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainainer: {
    padding: 20,
  },
  flatListColumn: {
    justifyContent: "space-between"
  }
})