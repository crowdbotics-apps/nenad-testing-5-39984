import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.module}>
        <TouchableOpacity style={styles.moduleItem}>
          <Image source={require('../assets/icons/account.png')} style={styles.moduleIcon} />
          <Pressable onPress={() => {
          navigation.navigate("Untitled8");
        }}><Text style={styles.moduleText}>Account Settings</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleItem}>
          <Image source={require('../assets/icons/password.png')} style={styles.moduleIcon} />
          <Text style={styles.moduleText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleItem}>
          <Image source={require('../assets/icons/contact.png')} style={styles.moduleIcon} />
          <Text style={styles.moduleText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleItem}>
          <Image source={require('../assets/icons/faq.png')} style={styles.moduleIcon} />
          <Text style={styles.moduleText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleItem}>
          <Image source={require('../assets/icons/invite.png')} style={styles.moduleIcon} />
          <Pressable onPress={() => {
          navigation.navigate("Untitled10");
        }}><Text style={styles.moduleText}>Invite Friends</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleItem}>
          <Image source={require('../assets/icons/logout.png')} style={styles.moduleIcon} />
          <Text style={styles.moduleText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleItem}>
          <Image source={require('../assets/icons/feedback.png')} style={styles.moduleIcon} />
          <Text style={styles.moduleText}>Send Feedback</Text>
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
    height: 80,
    backgroundColor: '#2f80ed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  module: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  moduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5'
  },
  moduleIcon: {
    width: 24,
    height: 24,
    marginRight: 20
  },
  moduleText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default SettingsScreen;