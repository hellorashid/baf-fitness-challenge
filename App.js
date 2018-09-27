import React from 'react';
// import { Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements'; 

// Import Screens
import ProfileScreen from './ProfileScreen.js';
import LeaderboardScreen from './LeaderboardScreen.js';
import ChallengeScreen from './ChallengeScreen.js';
// import {styles} from './Styles.js'; 

import * as firebase from 'firebase';
import SignUpScreen from './signup.js';
import LoginScreen from './login.js';
import secret from './secret.js'; 

// Initialize Firebase
var config = {
  apiKey: secret.FIREBASE_KEY,
  authDomain: "fitnesschallenge-26de6.firebaseapp.com",
  databaseURL: "https://fitnesschallenge-26de6.firebaseio.com",
  projectId: "fitnesschallenge-26de6",
  storageBucket: "fitnesschallenge-26de6.appspot.com",
  messagingSenderId: "706151436086"
};
firebase.initializeApp(config);

export default createMaterialBottomTabNavigator({
  Profile: { screen: ProfileScreen },
  Leaderboards: { screen: LeaderboardScreen },
  Challenge: { screen: ChallengeScreen },
  Login : { screen: LoginScreen}
}, {
  initialRouteName: 'Profile',
  activeTintColor: '#EFEEF6',
  inactiveTintColor: '#EFEEF6',
  barStyle: { backgroundColor: '#694fad' },
  shifting: true, 
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Profile') {
        iconName = `ios-contact${focused ? '' : '-outline'}`;
      } else if (routeName === 'Leaderboards') {
        iconName = `ios-podium${focused ? '' : '-outline'}`;
      } else if (routeName === 'Challenge') {
        iconName = `ios-trophy${focused ? '' : '-outline'}`;
      } 

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name={iconName} type='ionicon' size={25} color={tintColor} />;
    },
  }),
});

