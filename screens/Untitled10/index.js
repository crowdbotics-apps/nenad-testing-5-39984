import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const PersonalInfoScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleUpdate = () => {// handle update logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Address Line 1" value={addressLine1} onChangeText={setAddressLine1} />
      <TextInput style={styles.input} placeholder="Address Line 2 (optional)" value={addressLine2} onChangeText={setAddressLine2} />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
      <Picker style={styles.input} selectedValue={state} onValueChange={setState}>
        <Picker.Item label="Select State" value="" />
        <Picker.Item label="California" value="CA" />
        <Picker.Item label="New York" value="NY" />
        <Picker.Item label="Texas" value="TX" />
      </Picker>
      <TextInput style={styles.input} placeholder="Zip Code" value={zipCode} onChangeText={setZipCode} />
      <Text style={styles.title}>Payment Information</Text>
      <TextInput style={styles.input} placeholder="Card Number" value={cardNumber} onChangeText={setCardNumber} />
      <TextInput style={styles.input} placeholder="Expiration Date (MM/YY)" value={expirationDate} onChangeText={setExpirationDate} />
      <TextInput style={styles.input} placeholder="CVV" value={cvv} onChangeText={setCvv} />
      <TouchableOpacity style={[styles.button, !isValid && styles.disabledButton]} onPress={handleUpdate} disabled={!isValid}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  disabledButton: {
    opacity: 0.5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
export default PersonalInfoScreen;