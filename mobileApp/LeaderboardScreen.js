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
import LeaderboardCard from './components/LeaderboardCard.js';
let profile_Luna = { 
  name: 'Luna Lovegood', 
  score: 22, 
  avatar : 'https://vignette.wikia.nocookie.net/harrypotter/images/4/49/Luna_profile.jpg/revision/latest?cb=20160902165706'
}

let profile_Ron = { 
  name: 'Ron Weasley', 
  score: 18, 
  avatar : 'https://amp.businessinsider.com/images/579f5daddd0895f33d8b475c-750-563.jpg'
}

let profile_Harry = { 
  name: 'Harry Potter', 
  score: 15, 
  avatar : 'https://nerdist.com/wp-content/uploads/2017/01/harry-potter.jpg'
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
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 


      <Card containerStyle={styles.leaderboardCard} title={'Bike'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Fitness Test'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Free Throw'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Plank'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 

      <Card containerStyle={styles.leaderboardCard} title={'Push Ups'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 

      <Card containerStyle={styles.leaderboardCard} title={'Rope Pull'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 


  </ScrollView>
  </View>
);

const TabMale = () => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
  <ScrollView style={{flex: 1}}> 
  <LeaderboardCard name="Ron Weasley" score="54" image={profile_Ron.avatar} />

      <Card containerStyle={styles.leaderboardCard} title={'Burpees'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 


      <Card containerStyle={styles.leaderboardCard} title={'Bike'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Fitness Test'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Free Throw'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Plank'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 

      <Card containerStyle={styles.leaderboardCard} title={'Push Ups'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 

      <Card containerStyle={styles.leaderboardCard} title={'Rope Pull'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
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
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 


      <Card containerStyle={styles.leaderboardCard} title={'Bike'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Fitness Test'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Free Throw'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 
      
      <Card containerStyle={styles.leaderboardCard} title={'Plank'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 

      <Card containerStyle={styles.leaderboardCard} title={'Push Ups'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
      </Card> 

      <Card containerStyle={styles.leaderboardCard} title={'Rope Pull'} >
        <LeaderboardCardItem 
          title={profile_Luna.name} 
          score={profile_Luna.score} 
          avatar={profile_Luna.avatar}/>

        <LeaderboardCardItem 
          title={profile_Ron.name} 
          score={profile_Ron.score} 
          avatar={profile_Ron.avatar}/>

        <LeaderboardCardItem 
          title={profile_Harry.name} 
          score={profile_Harry.score} 
          avatar={profile_Harry.avatar}/>
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
