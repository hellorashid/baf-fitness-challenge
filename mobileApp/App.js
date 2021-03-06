import React from 'react';
// import { Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {createSwitchNavigator} from 'react-navigation'; 
// import {Icon} from 'react-native-elements'; 

// Import Screens
// import ProfileScreen from './ProfileScreen.js';
// import LeaderboardScreen from './LeaderboardScreen.js';
// import ChallengeScreen from './ChallengeScreen.js';
// import {styles} from './Styles.js'; 


import SignUpScreen from './signup.js';
import LoginScreen from './login.js';
import AuthScreen from './authscreen.js';
import Main from './Main.js'; 
import AuthTabs from './AuthTabs.js';
import OnboardingScreen from './onboarding.js';


const App = createSwitchNavigator(
  {
    AuthScreen,
    SignUpScreen,
    OnboardingScreen,
    LoginScreen,
    AuthTabs, 
    Main
  },
  {
    initialRouteName: 'AuthScreen'
  }
)
export default App


