import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import {Card} from 'react-native-elements'; 

import {styles} from '../Styles.js'; 

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.profileView}> 
    {/* <Image 
          style={styles.profileCardBackground}
          resizeMode={'cover'}
          source={require('../src/images/lightBackground.png')}
    /> */}
      <Card
        containerStyle={styles.profileCard} 
      > 
        <Image 
          style={styles.profileCardImage}
          resizeMode={'cover'}
          source={require('../src/images/lunaProfile.jpg')}
        />

         <View style={styles.profileCardTextView}> 
            <Text style={styles.profileCardText}> {this.props.name}  </Text> 
            <Text style={styles.profileCardScore}> {this.props.score}  </Text> 
         </View> 
      </Card> 

      
     
    </View>
    );
  }
}
