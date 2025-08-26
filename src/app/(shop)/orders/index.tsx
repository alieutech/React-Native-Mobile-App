import { FlatList, Image, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { ORDERS } from '../../../../assets/orders'
import { Swipeable, RectButton } from 'react-native-gesture-handler'

const Orders = () => {
  const [orders, setOrders] = useState(ORDERS)

  const handleDelete = (id: string) => {
    Alert.alert('Delete Order', 'Are you sure you want to delete this order?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setOrders((prev) => prev.filter((o) => o.id !== id))
        },
      },
    ])
  }

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Completed':
        return styles.completed
      case 'Pending':
        return styles.pending
      case 'Shipped':
        return styles.shipped
      case 'InTransit':
        return styles.inTransit
      default:
        return styles.pending
    }
  }

  const renderRightActions = (id: string) => {
    return (
      <RectButton style={styles.deleteButton} onPress={() => handleDelete(id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </RectButton>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item.id)}>
            <RectButton
              style={styles.orderCard}
              onPress={() => Alert.alert('Order Pressed', `Order ${item.id}`)}
            >
              {/* Order Info */}
              <View style={styles.orderRow}>
                <Text style={styles.label}>Order ID:</Text>
                <Text style={styles.value}>{item.id}</Text>
              </View>

              <View style={styles.orderRow}>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{item.date}</Text>
              </View>

              <View style={styles.orderRow}>
                <Text style={styles.label}>Status:</Text>
                <Text style={[styles.status, getStatusStyle(item.status)]}>
                  {item.status}
                </Text>
              </View>

              {/* Products in the order */}
              <FlatList
                data={item.items}
                keyExtractor={(prod) => prod.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item: prod }) => (
                  <View style={styles.productCard}>
                    <Image source={prod.heroImage} style={styles.productImage} />
                    <Text style={styles.productTitle}>{prod.title}</Text>
                    <Text style={styles.productPrice}>
                      ${prod.price.toFixed(2)}
                    </Text>
                  </View>
                )}
              />
            </RectButton>
          </Swipeable>
        )}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  orderCard: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
  },
  completed: { color: 'green' },
  pending: { color: 'orange' },
  shipped: { color: 'blue' },
  inTransit: { color: 'purple' },

  productCard: {
    marginRight: 12,
    alignItems: 'center',
    width: 100,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 6,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },

  // Swipe-to-delete styles
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 16,
    borderRadius: 10,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
