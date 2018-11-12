import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Header, Icon} from 'react-native-elements';
import { styles } from '../Styles';

import firebase from 'firebase'; 

class LogoutButton extends Component { 
  handleLogout = () => { 
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }

  render() { 
    return(
      <Icon
      // raised
      // underlayColor={'transparent'}
      type='ionicon'
      name='ios-log-out'
      color='#52489C'
      size={30}
      onPress={this.handleLogout} />
    ) 
  }
}

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View>
        <Header
            outerContainerStyles={styles.headerContainer}
            statusBarProps={{ barStyle: 'default', backgroundColor: "#334393" }}
            innerContainerStyles={styles.headerInnerContainer}
            centerComponent={{ text: this.props.title, style: styles.headerText }}
            rightComponent={<LogoutButton />}
        />      
    </View>
    );
  }
}
