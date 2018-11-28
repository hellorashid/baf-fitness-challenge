import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import {Card} from 'react-native-elements'; 

import {styles} from '../Styles.js'; 
const defaultImage = "https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png"

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
          resizeMode={'contain'}
          // source={require('../src/images/lunaProfile.jpg')}
          source={{uri: this.props.image || defaultImage}}

        />

         {/* <View style={styles.profileCardTextView}> 
         </View>  */}
            <Text style={styles.profileCardText}> {this.props.name}  </Text> 
            <Text style={styles.profileCardScore}> {this.props.score}  </Text> 
      </Card> 

      
     
    </View>
    );
  }
}
