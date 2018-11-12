import React from 'react';
import { Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {Header, Card, List, ListItem, Icon} from 'react-native-elements'; 
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import {styles} from './Styles.js'; 
import MyHeader from './components/Header.js'; 
import ProfileCard from './components/ProfileCard.js';
import ProfileListItem from './components/ProfileListItem.js';
import ProfileCardItem from './components/ProfileCardItem.js';

import LoginScreen from './login.js'; 
import SignUpScreen from './signup.js'; 

class TabsAuth extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'login', title: 'Login' },
      { key: 'signup', title: 'Sign Up' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          login: LoginScreen,
          signup: SignUpScreen,
        })}
        onIndexChange={index => this.setState({ index })}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#EFEEF6' }}
            style={{backgroundColor : '#52489C'}}
          />
        }
      />
    );
  }
}

export default class AuthTabs extends React.Component {
  render() {
    return (   
        <View style={styles.container}>
       

          <View style={{flex: 1, backgroundColor: '#52489C' }}> 
          < TabsAuth />
          </View> 


          
        </View>
    );
  }
}
