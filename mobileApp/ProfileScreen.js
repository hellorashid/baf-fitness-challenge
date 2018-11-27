import React from 'react';
import {Text,  View, ScrollView} from 'react-native';
import {Card,} from 'react-native-elements'; 
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import firebase from 'firebase'; 

import {styles} from './Styles.js'; 
import ProfileHeader from './components/ProfileHeader.js'; 
import ProfileCard from './components/ProfileCard.js';
import ProfileListItem from './components/ProfileListItem.js';
import ProfileCardItem from './components/ProfileCardItem.js';

//import posed from 'react-native-pose';


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
  constructor(props) { 
    super()
    this.state = { 
      currentUser: null, 
      userID: null, 
      someID : 'mB651xQDm4hbnW2OqW6XV0F40lR2', 
      firstName : '', 
      lastName: '', 
      overall: 0,
      onboard: false,
   }
    this.checkIfUserExists(firebase.auth().currentUser.uid)
  }
 
  

  checkIfUserExists(userId) {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
      var exists = (snapshot.val() !== null);
      console.log("user status: ", exists)
      if (exists == true) { 
        this.setState({onboard: false})
        console.log(this.state.onboard)
      } else { 
        this.props.navigation.navigate('OnboardingScreen')
      }
    });

  }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    if (this.state.onboard == false) {     
      this.setState({ currentUser: currentUser })
      this.setState({userID : currentUser.uid})
      this.getFirstName(currentUser.uid); 
    }

  }

  getFirstName(userId) { 
      firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        const thisUser = snapshot.val();
        console.log("This user:", thisUser)

        if (thisUser != null) {     
          this.setState({
            firstName: thisUser.first_name, 
            lastName: thisUser.last_name, 
            overall: thisUser.overall
          })
        }
            
      });
  }


  

  render() {
    const { currentUser, userID, firstName, lastName, overall} = this.state
    return (   
        <View style={styles.container}>
          <ProfileHeader title="Profile" />
          
          <ProfileCard name={firstName + ' ' + lastName} score={overall} />
          <View style={{flex: 1, backgroundColor: '#52489C' }}> 
          < TabViewExample />
          </View> 

          
        </View>
    );
  }
}
