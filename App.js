import React from 'react';
// import { Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {createSwitchNavigator} from 'react-navigation'; 
import {Icon} from 'react-native-elements'; 
import secret from './secret.js'; 

// Import Screens
import ProfileScreen from './ProfileScreen.js';
import LeaderboardScreen from './LeaderboardScreen.js';
import ChallengeScreen from './ChallengeScreen.js';
// import {styles} from './Styles.js'; 


import SignUpScreen from './signup.js';
import LoginScreen from './login.js';
import AuthScreen from './authscreen.js';
import Main from './Main.js'; 
import AuthTabs from './AuthTabs.js';


const App = createSwitchNavigator(
  {
    AuthScreen,
    SignUpScreen,
    LoginScreen,
    AuthTabs, 
    Main
  },
  {
    initialRouteName: 'AuthScreen'
  }
)
export default App


