import React from 'react';
import { Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {Header, Card, List, ListItem, Icon} from 'react-native-elements'; 
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import {styles} from './Styles.js'; 
import MyHeader from './components/Header.js'; 

export default class ChallengeScreen extends React.Component {
  render() {
    return (   
        <View style={styles.container}>
          <MyHeader title="Challenge" />
          <ScrollView style={{flex: 1}}> 
          <View style={{ height: 250,  backgroundColor: '#EFEEF6' }}> 
            <ScrollView style={{flex: 1 }} horizontal={true}> 
                <Card title="Challenge Dates" containerStyle={styles.challengeCard}> 
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron/>
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron/>
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron/>
                </Card> 

                <Card title="Challenge Dates" containerStyle={styles.challengeCard}> 
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron/>
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron/>
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron/>
                </Card>           
            </ScrollView>
          </View>      

        <View style={{flex: 1}}> 
        
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Burpees </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Bike </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Fitness Test </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Free Throw </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Plank </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Push Ups </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Rope Pull </Text> 
            </Card> 
        </View>               
        </ScrollView>
        </View>
    );
  }
}
