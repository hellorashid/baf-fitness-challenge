import React from 'react';
import {  View, ScrollView} from 'react-native';
import {Card,} from 'react-native-elements'; 
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import firebase from 'firebase'; 

import {styles} from './Styles.js'; 
import ProfileHeader from './components/ProfileHeader.js'; 
import ProfileCard from './components/ProfileCard.js';
import ProfileListItem from './components/ProfileListItem.js';
import ProfileCardItem from './components/ProfileCardItem.js';




const TabBest = () => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
      <ProfileListItem title={'Burpees'} score={15} />
      <ProfileListItem title={'Bike'} score={18} />  
      <ProfileListItem title={'Plank'} score={16} />  

  </View>
);
const TabAttempts = () => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
  <ScrollView style={{flex: 1, paddingBottom: 22}}> 
      <Card containerStyle={styles.profileTabCard} title={'Burpees'} > 
        <ProfileCardItem title={'12/03/2018'} score={10}/>
        <ProfileCardItem title={'12/03/2018'} score={12}/>
        <ProfileCardItem title={'12/03/2018'} score={15}/>
      </Card> 

      <Card containerStyle={styles.profileTabCard} title={'Bike'} > 
        <ProfileCardItem title={'12/03/2018'} score={11}/>
        <ProfileCardItem title={'12/03/2018'} score={12}/>
        <ProfileCardItem title={'12/04/2018'} score={18}/>
      </Card> 

      <Card containerStyle={styles.profileTabCard} title={'Plank'} > 
        <ProfileCardItem title={'12/03/2018'} score={11}/>
        <ProfileCardItem title={'12/03/2018'} score={12}/>
        <ProfileCardItem title={'12/04/2018'} score={16}/>
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
            indicatorStyle={{ backgroundColor: '#EFEEF6' }}
            style={{backgroundColor : '#52489C'}}
          />
        }
      />
    );
  }
}

export default class ProfileScreen extends React.Component {
  state = { currentUser: null, userID: null, someID : 'mB651xQDm4hbnW2OqW6XV0F40lR2' }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    this.setState({userID : currentUser.uid})

  }

  getFirstName(userId) { 
      firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        const firstName = snapshot.val();
        console.log("FirstName: " + firstName);
      });
  }
  

  render() {
    const { currentUser, userID } = this.state
    this.getFirstName(userID); 
    return (   
        <View style={styles.container}>
          <ProfileHeader title="Profile" />
          
          <ProfileCard name={currentUser && userID} score="56" />

          <View style={{flex: 1, backgroundColor: '#52489C' }}> 
          < TabViewExample />
          </View> 


          
        </View>
    );
  }
}
