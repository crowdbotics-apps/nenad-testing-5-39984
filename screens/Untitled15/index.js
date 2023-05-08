import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {// Save changes made in edit mode
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return <View style={styles.container}>
      
      <View style={styles.body}>
        <View style={styles.field}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} editable={editMode} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} value={username} onChangeText={setUsername} editable={editMode} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={editMode} keyboardType="email-address" />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Bio</Text>
          <TextInput style={[styles.input, styles.bioInput]} value={bio} onChangeText={setBio} editable={editMode} multiline />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput style={styles.input} value={dob} onChangeText={setDob} editable={editMode} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input} value={gender} onChangeText={setGender} editable={editMode} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} value={streetAddress} onChangeText={setStreetAddress} editable={editMode} />
        </View>
        <View style={styles.field}>
          <TextInput style={[styles.input, styles.cityInput]} value={city} onChangeText={setCity} editable={editMode} />
          <TextInput style={[styles.input, styles.zipCodeInput]} value={zipCode} onChangeText={setZipCode} editable={editMode} />
        </View>
        <View style={styles.field}>
          <TextInput style={[styles.input, styles.stateInput]} value={state} onChangeText={setState} editable={editMode} />
          <TextInput style={[styles.input, styles.countryInput]} value={country} onChangeText={setCountry} editable={editMode} />
        </View>
      </View>
      {!editMode ? <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity> : <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  field: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top'
  },
  cityInput: {
    flex: 2,
    marginRight: 10
  },
  zipCodeInput: {
    flex: 1
  },
  stateInput: {
    flex: 2,
    marginRight: 10
  },
  countryInput: {
    flex: 3
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ProfileScreen;