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
  const [isFormValid, setIsFormValid] = useState(false);

  const handleUpdate = () => {// handle update logic here
  };

  const handleFirstNameChange = text => {
    setFirstName(text);
    setIsFormValid(validateForm());
  };

  const handleLastNameChange = text => {
    setLastName(text);
    setIsFormValid(validateForm());
  };

  const handleAddressLine1Change = text => {
    setAddressLine1(text);
    setIsFormValid(validateForm());
  };

  const handleAddressLine2Change = text => {
    setAddressLine2(text);
    setIsFormValid(validateForm());
  };

  const handleCityChange = text => {
    setCity(text);
    setIsFormValid(validateForm());
  };

  const handleStateChange = value => {
    setState(value);
    setIsFormValid(validateForm());
  };

  const handleZipCodeChange = text => {
    setZipCode(text);
    setIsFormValid(validateForm());
  };

  const handleCardNumberChange = text => {
    setCardNumber(text);
    setIsFormValid(validateForm());
  };

  const handleExpirationDateChange = text => {
    setExpirationDate(text);
    setIsFormValid(validateForm());
  };

  const handleCvvChange = text => {
    setCvv(text);
    setIsFormValid(validateForm());
  };

  const validateForm = () => {
    // validate form logic here
    return true;
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={handleFirstNameChange} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={handleLastNameChange} />
      <TextInput style={styles.input} placeholder="Address Line 1" value={addressLine1} onChangeText={handleAddressLine1Change} />
      <TextInput style={styles.input} placeholder="Address Line 2 (optional)" value={addressLine2} onChangeText={handleAddressLine2Change} />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={handleCityChange} />
      <Picker style={styles.input} selectedValue={state} onValueChange={handleStateChange}>
        <Picker.Item label="Select State" value="" />
        <Picker.Item label="Alabama" value="AL" />
        <Picker.Item label="Alaska" value="AK" />
        <Picker.Item label="Arizona" value="AZ" />
        <Picker.Item label="Arkansas" value="AR" />
        <Picker.Item label="California" value="CA" />
        <Picker.Item label="Colorado" value="CO" />
        <Picker.Item label="Connecticut" value="CT" />
        <Picker.Item label="Delaware" value="DE" />
        <Picker.Item label="Florida" value="FL" />
        <Picker.Item label="Georgia" value="GA" />
        <Picker.Item label="Hawaii" value="HI" />
        <Picker.Item label="Idaho" value="ID" />
        <Picker.Item label="Illinois" value="IL" />
        <Picker.Item label="Indiana" value="IN" />
        <Picker.Item label="Iowa" value="IA" />
        <Picker.Item label="Kansas" value="KS" />
        <Picker.Item label="Kentucky" value="KY" />
        <Picker.Item label="Louisiana" value="LA" />
        <Picker.Item label="Maine" value="ME" />
        <Picker.Item label="Maryland" value="MD" />
        <Picker.Item label="Massachusetts" value="MA" />
        <Picker.Item label="Michigan" value="MI" />
        <Picker.Item label="Minnesota" value="MN" />
        <Picker.Item label="Mississippi" value="MS" />
        <Picker.Item label="Missouri" value="MO" />
        <Picker.Item label="Montana" value="MT" />
        <Picker.Item label="Nebraska" value="NE" />
        <Picker.Item label="Nevada" value="NV" />
        <Picker.Item label="New Hampshire" value="NH" />
        <Picker.Item label="New Jersey" value="NJ" />
        <Picker.Item label="New Mexico" value="NM" />
        <Picker.Item label="New York" value="NY" />
        <Picker.Item label="North Carolina" value="NC" />
        <Picker.Item label="North Dakota" value="ND" />
        <Picker.Item label="Ohio" value="OH" />
        <Picker.Item label="Oklahoma" value="OK" />
        <Picker.Item label="Oregon" value="OR" />
        <Picker.Item label="Pennsylvania" value="PA" />
        <Picker.Item label="Rhode Island" value="RI" />
        <Picker.Item label="South Carolina" value="SC" />
        <Picker.Item label="South Dakota" value="SD" />
        <Picker.Item label="Tennessee" value="TN" />
        <Picker.Item label="Texas" value="TX" />
        <Picker.Item label="Utah" value="UT" />
        <Picker.Item label="Vermont" value="VT" />
        <Picker.Item label="Virginia" value="VA" />
        <Picker.Item label="Washington" value="WA" />
        <Picker.Item label="West Virginia" value="WV" />
        <Picker.Item label="Wisconsin" value="WI" />
        <Picker.Item label="Wyoming" value="WY" />
      </Picker>
      <TextInput style={styles.input} placeholder="Zip Code" value={zipCode} onChangeText={handleZipCodeChange} />
      <Text style={styles.title}>Payment Information</Text>
      <TextInput style={styles.input} placeholder="Card Number" value={cardNumber} onChangeText={handleCardNumberChange} />
      <TextInput style={styles.input} placeholder="Expiration Date (MM/YY)" value={expirationDate} onChangeText={handleExpirationDateChange} />
      <TextInput style={styles.input} placeholder="CVV" value={cvv} onChangeText={handleCvvChange} />
      <TouchableOpacity style={[styles.button, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]} onPress={handleUpdate} disabled={!isFormValid}>
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
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonEnabled: {
    backgroundColor: 'blue'
  },
  buttonDisabled: {
    backgroundColor: 'gray'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default PersonalInfoScreen;