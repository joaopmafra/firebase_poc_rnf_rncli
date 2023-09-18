// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import React, {useState} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import MyTextInput from './components/MyTextInput';
import MyButton from './components/MyButton';
import firestore from '@react-native-firebase/firestore';

const RegisterUser = props => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  const handleRegistration = () => {
    if (userName && userContact && userAddress) {
      /*
        "add()" method adds the new document with a random unique ID
        If you'd like to specify your own ID then use "set()" method
        firestore()
          .collection('Users')
          .doc('101')
          .set({
            name: userName,
            contact: userContact,
            address: userAddress,
          })
        .then(() => {
          console.log('User added!');
        });
      */
      firestore()
        .collection('Users')
        .add({
          name: userName,
          contact: userContact,
          address: userAddress,
        })
        .then(() => {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('UsersHomeScreen'),
              },
            ],
            {cancelable: false},
          );
        })
        .catch(error => {
          Alert.alert(
            'Exception',
            error,
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('UsersHomeScreen'),
              },
            ],
            {cancelable: false},
          );
        });

      /*
        You can also add the data using set instead of push
        but in that case you have to provide the user id by
        your own as NoSql DBs have no concept of auto increment
      */
      /*
        firebase.database()
          .ref("users/<You custome key for the User>")
          .set({
            name: userName,
            contact: userContact,
            address: userAddress
          }).then(()=>{
          Alert.alert(
            'Success','You are Registered Successfully',
            [{
              text: 'Ok',
              onPress:
              () => props.navigation.navigate('UsersHomeScreen')}
            ],{ cancelable: false });
      });*/
    } else {
      alert('Please fill all the details');
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 35,
      }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, justifyContent: 'space-between'}}>
          <MyTextInput
            placeholder="Enter Name"
            onChangeText={userName => setUserName(userName)}
            style={{padding: 10}}
          />
          <MyTextInput
            placeholder="Enter Contact No"
            onChangeText={userContact => setUserContact(userContact)}
            maxLength={10}
            keyboardType="numeric"
            style={{padding: 10}}
          />
          <MyTextInput
            placeholder="Enter Address"
            onChangeText={userAddress => setUserAddress(userAddress)}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{textAlignVertical: 'top', padding: 10}}
          />
          <MyButton title="Submit" customClick={handleRegistration} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default RegisterUser;
