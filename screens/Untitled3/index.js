import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LogOutScreen = () => {
  return <View style={styles.container}>
      
      <Text style={styles.title}>Are you sure you want to log out?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default LogOutScreen;