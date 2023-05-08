import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const CartScreen = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('Alabama');
  const [phone, setPhone] = useState('');
  const products = [{
    id: 1,
    name: 'Product 1',
    price: 10,
    quantity: 1,
    image: require('../assets/product1.jpg')
  }, {
    id: 2,
    name: 'Product 2',
    price: 20,
    quantity: 2,
    image: require('../assets/product2.jpg')
  }, {
    id: 3,
    name: 'Product 3',
    price: 30,
    quantity: 1,
    image: require('../assets/product3.jpg')
  }];
  const totalPrice = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return <View style={styles.container}>
      <Image source={require('../assets/background.jpg')} style={styles.background} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <ScrollView style={styles.productsContainer}>
        {products.map(product => <View key={product.id} style={styles.product}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{product.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
              <Image source={require('../assets/delete.png')} style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>)}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>${totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TextInput style={styles.input} placeholder="Street address" value={address} onChangeText={setAddress} />
        <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
        <TextInput style={styles.input} placeholder="ZIP" value={zip} onChangeText={setZip} />
        <Picker style={styles.input} selectedValue={state} onValueChange={setState}>
          <Picker.Item label="Alabama" value="Alabama" />
          <Picker.Item label="Alaska" value="Alaska" />
          <Picker.Item label="Arizona" value="Arizona" />
          <Picker.Item label="Arkansas" value="Arkansas" />
          <Picker.Item label="California" value="California" />
          <Picker.Item label="Colorado" value="Colorado" />
          <Picker.Item label="Connecticut" value="Connecticut" />
          <Picker.Item label="Delaware" value="Delaware" />
          <Picker.Item label="Florida" value="Florida" />
          <Picker.Item label="Georgia" value="Georgia" />
          <Picker.Item label="Hawaii" value="Hawaii" />
          <Picker.Item label="Idaho" value="Idaho" />
          <Picker.Item label="Illinois" value="Illinois" />
          <Picker.Item label="Indiana" value="Indiana" />
          <Picker.Item label="Iowa" value="Iowa" />
          <Picker.Item label="Kansas" value="Kansas" />
          <Picker.Item label="Kentucky" value="Kentucky" />
          <Picker.Item label="Louisiana" value="Louisiana" />
          <Picker.Item label="Maine" value="Maine" />
          <Picker.Item label="Maryland" value="Maryland" />
          <Picker.Item label="Massachusetts" value="Massachusetts" />
          <Picker.Item label="Michigan" value="Michigan" />
          <Picker.Item label="Minnesota" value="Minnesota" />
          <Picker.Item label="Mississippi" value="Mississippi" />
          <Picker.Item label="Missouri" value="Missouri" />
          <Picker.Item label="Montana" value="Montana" />
          <Picker.Item label="Nebraska" value="Nebraska" />
          <Picker.Item label="Nevada" value="Nevada" />
          <Picker.Item label="New Hampshire" value="New Hampshire" />
          <Picker.Item label="New Jersey" value="New Jersey" />
          <Picker.Item label="New Mexico" value="New Mexico" />
          <Picker.Item label="New York" value="New York" />
          <Picker.Item label="North Carolina" value="North Carolina" />
          <Picker.Item label="North Dakota" value="North Dakota" />
          <Picker.Item label="Ohio" value="Ohio" />
          <Picker.Item label="Oklahoma" value="Oklahoma" />
          <Picker.Item label="Oregon" value="Oregon" />
          <Picker.Item label="Pennsylvania" value="Pennsylvania" />
          <Picker.Item label="Rhode Island" value="Rhode Island" />
          <Picker.Item label="South Carolina" value="South Carolina" />
          <Picker.Item label="South Dakota" value="South Dakota" />
          <Picker.Item label="Tennessee" value="Tennessee" />
          <Picker.Item label="Texas" value="Texas" />
          <Picker.Item label="Utah" value="Utah" />
          <Picker.Item label="Vermont" value="Vermont" />
          <Picker.Item label="Virginia" value="Virginia" />
          <Picker.Item label="Washington" value="Washington" />
          <Picker.Item label="West Virginia" value="West Virginia" />
          <Picker.Item label="Wisconsin" value="Wisconsin" />
          <Picker.Item label="Wyoming" value="Wyoming" />
        </Picker>
        <TextInput style={styles.input} placeholder="Phone number" value={phone} onChangeText={setPhone} />
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover'
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  productsContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 80
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 10
  },
  productDetails: {
    flex: 1
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityButton: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10
  },
  deleteButton: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteIcon: {
    width: 20,
    height: 20
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  orderButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 30,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  nextButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backButton: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20
  },
  backButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default CartScreen;