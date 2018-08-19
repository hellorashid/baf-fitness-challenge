import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../Styles';

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
            rightComponent={{ icon: 'home', color: '#52489C' }}
        />      
    </View>
    );
  }
}
