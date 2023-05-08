import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {// handle login logic here
  };

  const handleForgotPassword = () => {// handle forgot password logic here
  };

  const handleCancel = () => {// handle cancel logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoCompleteType="email" textContentType="emailAddress" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry autoCompleteType="password" textContentType="password" />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
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
    marginBottom: 32
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  button: {
    width: '80%',
    height: 48,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  forgotPasswordButton: {
    marginBottom: 16
  },
  forgotPasswordButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancelButton: {
    marginBottom: 16
  },
  cancelButtonText: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default LoginScreen;