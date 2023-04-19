import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
const bookings = [{
  id: '1',
  name: 'Hotel ABC',
  location: 'New York, USA',
  image: require('../assets/hotel1.jpg'),
  checkIn: '2022-08-01',
  checkOut: '2022-08-05',
  price: '$500'
}, {
  id: '2',
  name: 'Resort XYZ',
  location: 'Bali, Indonesia',
  image: require('../assets/resort1.jpg'),
  checkIn: '2022-09-10',
  checkOut: '2022-09-15',
  price: '$800'
}, {
  id: '3',
  name: 'Hotel DEF',
  location: 'Paris, France',
  image: require('../assets/hotel2.jpg'),
  checkIn: '2022-10-20',
  checkOut: '2022-10-25',
  price: '$700'
}];

const NewBookingsScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
        <Text style={styles.itemDate}>{item.checkIn} - {item.checkOut}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>New Bookings</Text>
      <FlatList data={bookings} renderItem={renderItem} keyExtractor={item => item.id} style={styles.list} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  list: {
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20
  },
  itemDetails: {
    flex: 1
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  itemLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  itemDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00bfff'
  }
});
export default NewBookingsScreen;