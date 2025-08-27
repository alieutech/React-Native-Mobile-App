import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PRODUCTS } from '../../../assets/products'
import { Redirect, Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useToast } from 'react-native-toast-notifications'
import { useCartStore } from '../../store/cartStore'
import { useState } from 'react'

const ProductDetail = () => {
  const { slug } = useLocalSearchParams()
  const toast = useToast()
  const router = useRouter()

  const product = PRODUCTS.find(product => product.slug === slug)

  if(!product) return <Redirect href="/404" />

  const {items, addItem, incrementItem, decrementItem } = useCartStore();
  const cartItem = items.find(item => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0;
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  
  const handleAddToCart = () => {
    if(selectedQuantity === 0) {
      toast.show("Please select a quantity greater than zero", { type: "warning" });
      return;
    } 
    if(cartItem) {
      incrementItem(product.id);
    } else {
      addItem({
        ...product,
        quantity: selectedQuantity,
        heroImage: product.heroImage // or product.imagesUrl, depending on which image you want
      });
    }
    toast.show(`${selectedQuantity} ${product.title} added to cart`, { type: "success" });
    router.push('/cart');
  }
  const handleIncrement = () => {
    if(selectedQuantity < product.maxQuantity) {
      setSelectedQuantity(prev => prev + 1);
      incrementItem(product.id)
    }
  }
  const handleDecrement = () => {
    if(selectedQuantity > 1) {
      setSelectedQuantity(prev => prev - 1);
      decrementItem(product.id)
    }
  }
  const totalPrice = (product.price * selectedQuantity).toFixed(2);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.title }} />
      <Image source={product.heroImage} style={styles.heroImage} />
      <View style={{ padding: 16, flex: 1 }}>
        <Text style={styles.title}>Title: {product.title}</Text>
        <Text style={styles.slug}>Slug: {product.slug}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Price: ${totalPrice}</Text>
        </View>
      </View>
      <FlatList
        data={product.imagesUrl  ? [product.imagesUrl] : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Image source={item} style={styles.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imagesContainer}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{selectedQuantity}</Text>
        
        <TouchableOpacity 
        style={styles.quantityButton} 
        onPress={handleIncrement}
        disabled={selectedQuantity >= product.maxQuantity}

        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.addToCartButton} 
        onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  slug: {
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  price: {
    fontWeight: 'bold',
    color: '#000',
  },

  imagesContainer: {
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorMessage: {
    fontSize: 18,
    color: '#f00',
    textAlign: 'center',
    marginTop: 20,
  },
});