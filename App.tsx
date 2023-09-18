/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import HomeScreen from './pages/HomeScreen';
import UsersHomeScreen from './pages/UsersHomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewAllUser from './pages/ViewAllUser';
import ViewUser from './pages/ViewUser';
import DeleteUser from './pages/DeleteUser';
import RealTimeAddUpdateUser from './pages/RealTimeAddUpdateUser';
import AddOrderSummary from './pages/AddOrderSummary';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

/* Main Navigator */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 2 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator which include Login Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="UsersHomeScreen"
          component={UsersHomeScreen}
          options={{title: 'Users Home'}}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{title: 'Register User'}}
        />
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUser}
          options={{title: 'Update User'}}
        />
        <Stack.Screen
          name="ViewAllUser"
          component={ViewAllUser}
          options={{title: 'View All Users'}}
        />
        <Stack.Screen
          name="ViewUser"
          component={ViewUser}
          options={{title: 'View User'}}
        />
        <Stack.Screen
          name="DeleteUser"
          component={DeleteUser}
          options={{title: 'Delete User'}}
        />
        <Stack.Screen
          name="RealTimeAddUpdateUser"
          component={RealTimeAddUpdateUser}
          options={{title: 'Real Time User Updates'}}
        />
        <Stack.Screen
          name="AddOrderSummary"
          component={AddOrderSummary}
          options={{title: 'Add Order Summary'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
