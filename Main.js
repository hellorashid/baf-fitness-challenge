import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements'; 
import secret from './secret.js'; 


// Import Screens
import ProfileScreen from './ProfileScreen.js';
import LeaderboardScreen from './LeaderboardScreen.js';
import ChallengeScreen from './ChallengeScreen.js';
// import {styles} from './Styles.js'; 

// import * as firebase from 'firebase';
// import SignUpScreen from './signup.js';
// import LoginScreen from './login.js';
// import AuthScreen from './authscreen.js';


export default createMaterialBottomTabNavigator({
  Profile: { screen: ProfileScreen },
  Leaderboards: { screen: LeaderboardScreen },
  Challenge: { screen: ChallengeScreen },
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
