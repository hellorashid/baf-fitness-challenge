import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ListItem} from 'react-native-elements'; 
import { styles } from '../Styles';

export default class LeaderboardCardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const light = this.props.light
    let lightColor = ''
    if  (light == true) { 
        lightColor = '#EFEEF6'
    } else { 
        lightColor = '#52489C'
    }
    return (
    <View>
     <ListItem
        hideChevron
        title={this.props.title}
        badge={{ 
            value: this.props.score, 
            containerStyle: styles.profileListBadge, 
            textStyle : styles.profileListBadgeText
        }}
        titleStyle={{ color: 'white'}}
        containerStyle={{backgroundColor: '#EFEEF6', borderTopWidth: 0, borderBottomWidth: 0}}
      />
    </View>
    );
  }
}
