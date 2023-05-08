import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const CardDetailsScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={require('../assets/card.png')} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          <Text style={styles.cardName}>John Doe</Text>
          <Text style={styles.cardExpiry}>12/24</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled9");
      }}><Text style={styles.formTitle}>Add New Card</Text></Pressable>
        <TextInput style={styles.input} placeholder="Card Number" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Name on Card" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="MM/YY" keyboardType="numeric" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CVV" keyboardType="numeric" />
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  cardImage: {
    width: 60,
    height: 40,
    resizeMode: 'contain'
  },
  cardDetails: {
    marginLeft: 20
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  cardName: {
    fontSize: 16,
    marginBottom: 5
  },
  cardExpiry: {
    fontSize: 16
  },
  formContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  halfInput: {
    width: '48%'
  }
});
export default CardDetailsScreen;