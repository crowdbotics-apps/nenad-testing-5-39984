import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogoutScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to Log Out?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.yesButton}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10
  },
  yesButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default LogoutScreen;