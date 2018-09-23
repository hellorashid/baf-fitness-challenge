import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import {Card} from 'react-native-elements'; 
import { styles } from '../Styles';

export default class ChallengeListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  
    return (
    
    // <Card containerStyle={styles.challengeListCard}>
    //     <Image source={this.props.coverImage} resizeMode={'cover'} style={{height: 100, borderRadius: 10}} />
    //     <Text style={styles.challengeListText} onPress={this.props.videoPress}> Burpees </Text> 
    // </Card>

    <Card containerStyle={styles.challengeListCard}> 
        <Image 
        style={styles.challengeListImage}
        resizeMode={'cover'}
        source={this.props.coverImage }
        />
        <Text onPress={this.props.videoPress}
        style={{fontSize: 30, fontWeight: '700', color: 'white', position: 'absolute', bottom: 5, left: 5}}> 
            {this.props.title} 
        </Text> 
    </Card>  
    
    );
  }
}
