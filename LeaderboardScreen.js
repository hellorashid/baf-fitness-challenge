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
import LeaderboardCardItem from './components/LeaderboardCardItem.js';


const TabBest = () => (
  <View style={[styles.container, { backgroundColor: '#EFEEF6' }]}>
  <ScrollView style={{flex: 1}}> 

  <ProfileCard name="Luna Lovegood" score="56" />
  
    <Card containerStyle={styles.profileTabCard} title={'Burpees'} > 
        <LeaderboardCardItem 
          avatar={require('./src/images/lunaProfile.jpg')}
          title="Luna Lovegood"
          score={10}
          />
    </Card> 
 
  </ScrollView>
  </View>
);
const TabAttempts = () => (
  <View style={[styles.container, { backgroundColor: '#EFEEF6' }]}>
  <ScrollView style={{flex: 1}}> 
  <ProfileCard name="Luna Lovegood" score="56" />
      <Card containerStyle={styles.profileTabCard} title={'Burpees'} > 
        <ProfileCardItem title={'12/03/2018'} score={10}/>
        <ProfileCardItem title={'12/03/2018'} score={12}/>
        <ProfileCardItem title={'12/03/2018'} score={15}/>
      </Card> 
      <Card containerStyle={styles.profileTabCard} title={'Burpees'} > 
        <ProfileCardItem title={'12/03/2018'} score={10}/>
        <ProfileCardItem title={'12/03/2018'} score={12}/>
        <ProfileCardItem title={'12/03/2018'} score={15}/>
      </Card> 

  </ScrollView>
  </View>);

class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'best', title: 'Best' },
      { key: 'attempts', title: 'Attempts' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          best: TabBest,
          attempts: TabAttempts,
        })}
        onIndexChange={index => this.setState({ index })}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#52489C',  }}
            style={{backgroundColor : '#EFEEF6'}}
            labelStyle={{color: '#52489C'}}
          />
        }
      />
    );
  }
}

export default class LeaderboardScreen extends React.Component {
  render() {
    return (   
        <View style={styles.container}>
          <MyHeader title="Leaderboard" />

          <View style={{flex: 1, backgroundColor: '#52489C' }}> 
          < TabViewExample />
          </View> 
                    
        </View>
    );
  }
}
