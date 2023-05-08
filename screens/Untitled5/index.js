import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.item}>
          <Image source={require('../assets/settings.png')} style={styles.icon} />
          <Pressable onPress={() => {
          navigation.navigate("Untitled16");
        }}><Text style={styles.itemText}>Settings</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={require('../assets/user.png')} style={styles.icon} />
          <Pressable onPress={() => {
          navigation.navigate("Untitled15");
        }}><Text style={styles.itemText}>User Profile</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={require('../assets/legal.png')} style={styles.icon} />
          <Text style={styles.itemText}>Legal Agreement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={require('../assets/chat.png')} style={styles.icon} />
          <Text style={styles.itemText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={require('../assets/notifications.png')} style={styles.icon} />
          <Text style={styles.itemText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={require('../assets/logout.png')} style={styles.icon} />
          <Pressable onPress={() => {
          navigation.navigate("Untitled3");
        }}><Text style={styles.itemText}>Log Out</Text></Pressable>
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
    backgroundColor: '#2f95dc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%'
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width: 118,
    height: 24
  }
});
export default DashboardScreen;