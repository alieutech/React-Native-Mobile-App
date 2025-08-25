import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../../assets/products'

const Home = () => {
  return (
    <View>
      <FlatList
       data={PRODUCTS} 
       renderItem={({ item }) => (
         <View>
        <Text>{item.title}</Text>
       </View>
       )}
       keyExtractor={item => item.id.toString()}
       numColumns={2}
       ListHeaderComponent={<Text>Product</Text>}
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