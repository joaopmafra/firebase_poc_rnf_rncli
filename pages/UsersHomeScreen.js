// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import React from 'react';
import {View} from 'react-native';
import MyButton from './components/MyButton';
import MyText from './components/MyText';

const UsersHomeScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingHorizontal: 35,
      }}>
      <MyText text="Firebase Cloud Firestore Database Example" />
      <MyButton
        title="View All (View All Document Records)"
        customClick={() => props.navigation.navigate('ViewAllUser')}
      />
      <MyButton
        title="Register (Add a Document)"
        customClick={() => props.navigation.navigate('RegisterUser')}
      />
      <MyButton
        title="Update (Update any Field of Document)"
        customClick={() => props.navigation.navigate('UpdateUser')}
      />
      <MyButton
        title="View (View a Single Document Record)"
        customClick={() => props.navigation.navigate('ViewUser')}
      />
      <MyButton
        title="Delete (Remove a Document/Field)"
        customClick={() => props.navigation.navigate('DeleteUser')}
      />
      <MyButton
        title="Real Time Updates"
        customClick={() => props.navigation.navigate('RealTimeAddUpdateUser')}
      />
      <MyButton
        title="Add Collection Under Document"
        customClick={() => props.navigation.navigate('AddOrderSummary')}
      />
    </View>
  );
};

export default UsersHomeScreen;
