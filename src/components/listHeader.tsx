import { Link } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import Swiper from 'react-native-swiper';
import { CATEGORIES } from '../../assets/categories';

const heroImages = [
  require('../../assets/images/iphone_.jpg'),
  require('../../assets/images/dell-1.jpg'),
  require('../../assets/images/playstation.jpg'),
];

const ListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Top Bar */}
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: 'https://i.pravatar.cc/40' }} style={styles.avatarImage} />
            <Text style={styles.avatarText}>Hello, Alieutech</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Link style={styles.cartContainer} href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <View>
                  <FontAwesome
                    name="shopping-cart"
                    size={24}
                    color="green"
                    style={{ marginLeft: 2, opacity: pressed ? 0.5 : 1 }}
                  />
                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{3}</Text>
                  </View>
                </View>
              )}
            </Pressable>
          </Link>
          <TouchableOpacity style={styles.signOutButton} onPress={() => { /* Handle sign out */ }}>
            <FontAwesome name="sign-out" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Hero Carousel */}
      <View style={styles.heroContainer}>
        <Swiper autoplay={true} showsPagination={true} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
          {heroImages.map((img, index) => (
            <Image key={index} source={img} style={styles.heroImage} />
          ))}
        </Swiper>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <Link asChild href={`/categories/${item.slug}`}>
              <Pressable style={styles.category}>
                <Image source={{uri: item.imageUrl}} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{item.name}</Text>
              </Pressable>
            </Link>
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 5 }}
        />
      </View>
    </View>
  )
}

export default ListHeader;

const styles = StyleSheet.create({
  headerContainer: { gap: 20 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatarImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  avatarText: { fontSize: 16 },
  cartContainer: { padding: 10 },
  signOutButton: { padding: 10 },
  heroContainer: { width: '100%', height: 200 },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 20 },
  categoriesContainer: {},
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: 10,
    backgroundColor: '#1BC464',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  dot: { backgroundColor: 'rgba(255,255,255,0.4)', width: 8, height: 8, borderRadius: 4, margin: 3 },
  activeDot: { backgroundColor: '#1BC464', width: 8, height: 8, borderRadius: 4, margin: 3 },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    width: 100,
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 10,

  },
  categoryImage: {
    width: 75,
    height: 70,
    borderRadius: 30,
    marginBottom: 8,
  },
  
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
