import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const InviteFriendsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Invite Friends</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/invite_friends.png')} style={styles.image} />
        <Text style={styles.title}>Invite your friends to join</Text>
        <Text style={styles.subtitle}>
          Share your referral code and earn rewards
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Invite Friends</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default InviteFriendsScreen;