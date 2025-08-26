import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { PRODUCTS } from '../../../assets/products'
const Category = () => {
  const { slug } = useLocalSearchParams() 
  const router = useRouter()

  // Filter products by category
  const categoryProducts = PRODUCTS.filter(
    (product) => product.category.slug === slug
  )

  // Get category name from first product in that category
  const categoryName = categoryProducts[0]?.category.name || 'Category'

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>{categoryName}</Text>

      <FlatList
        data={categoryProducts}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ gap: 16, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => router.push(`/products/${item.slug}`)} // navigate to product detail
          >
            <Image source={item.heroImage} style={styles.image} />
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
})
