import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Product } from '../../assets/types/product'
import { Link } from 'expo-router'

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
        <Pressable style={styles.item} >
            <View style={styles.itemImageContainer}>
            <Image source={product.heroImage} style={styles.itemImage} />
            </View>
            <View style={styles.itemTextContent}>
            <Text style={styles.itemTitle} numberOfLines={1}>{product.title}</Text>
            <Text style={styles.itemPrice}>${product.price.toFixed(2)}</Text>
            </View>
        </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  item: { 
    width: '48%', 
    margin: 5, 
    marginVertical: 9, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 8, 
    overflow: 'hidden' 
  },
  itemImageContainer: { 
    width: '100%', 
    height: 150, 
    overflow: 'hidden',
    backgroundColor: '#eee'
  },
  itemImage: { 
    width: '100%', 
    height: '100%',   // ✅ make it fill container height
    resizeMode: 'cover', 
  },
  itemTextContent: { 
    padding: 10,
    alignItems: 'flex-start',
    gap: 5
  },
  itemTitle: { 
    fontSize: 16, 
    color: '#888' 
  },
  itemPrice: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#000'
  }
})
