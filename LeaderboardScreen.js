import React from 'react';
import { Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {Header, Card, List, ListItem, Icon} from 'react-native-elements'; 
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import {styles} from './Styles.js'; 
import MyHeader from './components/Header.js'; 
import ProfileCard from './components/ProfileCard.js';
import ProfileCardItem from './components/ProfileCardItem.js';
import LeaderboardCardItem from './components/LeaderboardCardItem.js';

let profile_Luna = { 
  name: 'Luna Lovegood', 
  score: 22, 
  avatar : 'https://vignette.wikia.nocookie.net/harrypotter/images/4/49/Luna_profile.jpg/revision/latest?cb=20160902165706'
}

const TabOverall = () => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
  <ScrollView style={{flex: 1}}> 
  <ProfileCard name="Luna Lovegood" score="56" />

      <Card containerStyle={styles.leaderboardCard} title={'Burpees'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>
      </Card> 
  </ScrollView>
  </View>
);

const TabMale = () => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
  <ScrollView style={{flex: 1}}> 
  <ProfileCard name="Luna Lovegood" score="56" />

      <Card containerStyle={styles.leaderboardCard} title={'Burpees'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>
      </Card> 
  </ScrollView>
  </View>
);

const TabFemale = () => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
  <ScrollView style={{flex: 1}}> 
  <ProfileCard name="Luna Lovegood" score="56" />

      <Card containerStyle={styles.leaderboardCard} title={'Burpees'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>
      </Card> 
  </ScrollView>
  </View>
);

class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'overall', title: 'Overall' },
      { key: 'female', title: 'Female' },
      { key: 'male', title: 'Male' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          overall: TabOverall,
          female: TabFemale,
          male: TabMale
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
