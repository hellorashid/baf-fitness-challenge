import React from 'react';
import {Text,  View, ScrollView} from 'react-native';
import {Card, Button,} from 'react-native-elements'; 
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import firebase from 'firebase'; 

import {styles} from './Styles.js'; 
import ProfileHeader from './components/ProfileHeader.js'; 
import ProfileCard from './components/ProfileCard.js';
import ProfileListItem from './components/ProfileListItem.js';
import ProfileCardItem from './components/ProfileCardItem.js';

//import posed from 'react-native-pose';


const TabBest = (props) => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
       
      {/* { props.attemptsBest.length == 0 && 
        <View>
          <Text style={{color: 'white', fontSize: 30}}> You don't have any attempts!</Text>
        </View>
      } */}
      {/* { props.attemptsBest.length > 0 && 
        <View>
          {props.attemptsBest.map( (attempt) => 
              <ProfileListItem title={attempt.title} score={attempt.score} key={attempt.title} />
          )}
       
        </View>
      } */}
      { props.burpeesMax > 0 && 
        <View>
          <ProfileListItem title={"Burpees"} score={props.burpeesMax}  />
        </View>
      }
      { props.bikeMax > 0 && 
        <View>
          <ProfileListItem title={"Bike"} score={props.bikeMax}  />
        </View>
      }
      { props.fitnesstestMax > 0 && 
        <View>
          <ProfileListItem title={"Fitness Test"} score={props.fitnesstestMax}  />
        </View>
      }
      { props.freethrowMax > 0 && 
        <View>
          <ProfileListItem title={"Free Throw"} score={props.freethrowMax}  />
        </View>
      }
      { props.plankMax > 0 && 
        <View>
          <ProfileListItem title={"Plank"} score={props.plankMax}  />
        </View>
      }
      { props.pushupsMax > 0 && 
        <View>
          <ProfileListItem title={"Pushups"} score={props.pushupsMax}  />
        </View>
      }
      { props.rowingMax > 0 && 
        <View>
          <ProfileListItem title={"Rowing"} score={props.rowingMax}  />
        </View>
      }
      { props.shuttlerunMax > 0 && 
        <View>
          <ProfileListItem title={"Shuttle Run"} score={props.shuttlerunMax}  />
        </View>
      }
      { props.squatsMax > 0 && 
        <View>
          <ProfileListItem title={"Squats"} score={props.squatsMax}  />
        </View>
      }
      
  </View>
);
const TabAttempts = (props) => (
  <View style={[styles.container, { backgroundColor: '#52489C' }]}>
  <ScrollView style={{flex: 1, paddingBottom: 22}}> 
      
      { 
        // props.attempts.burpees != undefined && 
        
        <Card containerStyle={styles.profileTabCard} title={'Burpees'} >          
          {props.burpeesAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}     
        </Card> 
      }
  
     {
        // props.attempts.bike != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Bike'} > 
        {props.bikeAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}   
        </Card> 
      }

      {
        // props.attempts.fitnesstest != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Fitness Test'} > 
          {props.fitnesstestAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}  
        </Card> 
      }
      {
        // props.attempts.freethrow != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Free Throw'} > 
         {props.freethrowAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}  
        </Card> 
      }
      {
        // props.attempts.plank != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Plank'} > 
         {props.plankAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}  
        </Card> 
      }
      {
        // props.attempts.pushups != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Pushups'} > 
         {props.pushupsAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}  
        </Card> 
      }
      {
        // props.attempts.rowing != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Rowing'} > 
         {props.rowingAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}  
        </Card> 
      }
     
      {
        // props.attempts.squats != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Squats'} > 
         {props.squatsAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}  
        </Card> 
      }
   
      {
        // props.attempts.shuttlerun != undefined && 
        <Card containerStyle={styles.profileTabCard} title={'Shuttle Run'} > 
        {props.shuttlerunAttempt.map( (attempt) => 
              <ProfileCardItem title={attempt.key} score={attempt.value.score} key={attempt.key}/>
          )}   
        </Card> 
      }
       
 
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

   // renderScene={SceneMap({
        //   best: TabBest,
        //   attempts: TabAttempts,
        // })}
  render() {
    return (
      <TabView
        navigationState={this.state}
       
        renderScene ={ ({ route }) => {
          switch (route.key) {
            case 'best':
              return <TabBest 
                attemptsBest={this.props.attemptsBest}
                burpeesMax={this.props.burpeesMax}
                bikeMax={this.props.bikeMax}
                fitnesstestMax={this.props.fitnesstestMax}
                freethrowMax={this.props.freethrowMax}
                plankMax={this.props.burpeesMax}
                pushupsMax={this.props.pushupsMax}
                rowingMax={this.props.rowingMax}
                shuttlerunMax={this.props.shuttlerunMax}
                squatsMax={this.props.squatsMax}
              />;
            case 'attempts':
              return <TabAttempts
                attempts={this.props.attempts} 
                burpeesAttempt={this.props.burpeesAttempt}
                bikeAttempt={this.props.bikeAttempt}
                fitnesstestAttempt={this.props.fitnesstestAttempt}
                freethrowAttempt={this.props.freethrowAttempt}
                plankAttempt={this.props.plankAttempt}
                pushupsAttempt={this.props.pushupsAttempt}
                rowingAttempt={this.props.rowingAttempt}
                shuttlerunAttempt={this.props.shuttlerunAttempt}
                squatsAttempt={this.props.squatsAttempt}     
                
                hasAttempt={this.props.hasAttempt}
                
              />;
            default:
              return null;
           }
        }
         }

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
      firstName : '', 
      lastName: '', 
      overall: 0,
      onboard: false,
      profileImage: '', 
      attemptsBest : [
        {title : "Burpees", score: 20},
        {title : "Shuttle Run", score: 10},
      ], 

      attempts : {},
      burpeesAttempt : [],
      bikeAttempt : [],
      fitnesstestAttempt : [],
      freethrowAttempt : [],
      plankAttempt : [],
      pushupsAttempt : [],
      rowingAttempt : [],
      shuttlerunAttempt : [],
      squatsAttempt : [],

      burpeesMax : 0, 
      bikeMax : 0, 
      fitnesstestMax : 0, 
      freethrowMax : 0, 
      plankMax : 0, 
      pushupsMax : 0, 
      rowingMax : 0, 
      shuttlerunMax : 0, 
      squatsMax : 0, 
      hasAttempt : false
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
        // console.log("This user:", thisUser)
        if (thisUser != null) {     
          this.setState({
            firstName: thisUser.first_name, 
            lastName: thisUser.last_name, 
            overall: thisUser.overall, 
            profileImage: thisUser.profileImage, 
            attempts : thisUser.attempts,
          })

          if (thisUser.attempts != undefined) { 
            if (thisUser.attempts.burpees != undefined) { 
              let burpees = thisUser.attempts.burpees
              let burpeesTotal = Object.entries(burpees).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              burpeesTotal.forEach(element => {
                if (element.value.score > this.state.burpeesMax) { 
                  this.setState({burpeesMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.burpees = burpeesTotal
              this.setState({
                attempts : newAttempts,
                burpeesAttempt : burpeesTotal,
              })         
            }

            if (thisUser.attempts.bike != undefined) { 
              let thisEvent = thisUser.attempts.bike
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.bikeMax) { 
                  this.setState({bikeMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.bike = eventTotal
              this.setState({
                attempts : newAttempts,
                bikeAttempt : eventTotal,
              })         
            }

            
            if (thisUser.attempts.fitnesstest != undefined) { 
              let thisEvent = thisUser.attempts.fitnesstest
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.fitnesstestMax) { 
                  this.setState({fitnesstestMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.fitnesstest = eventTotal
              this.setState({
                attempts : newAttempts,
                fitnesstestAttempt : eventTotal,
              })         
            }

            
            if (thisUser.attempts.freethrow != undefined) { 
              let thisEvent = thisUser.attempts.freethrow
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.freethrowMax) { 
                  this.setState({freethrowMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.freethrow = eventTotal
              this.setState({
                attempts : newAttempts,
                freethrowAttempt : eventTotal,
              })         
            }

            if (thisUser.attempts.plank != undefined) { 
              console.log("LOGGGG")
              let thisEvent = thisUser.attempts.plank
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.plankMax) { 
                  this.setState({plankMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.plank = eventTotal
              this.setState({
                attempts : newAttempts,
                plankAttempt : eventTotal,
              })         
            }

            if (thisUser.attempts.pushups != undefined) { 
              let thisEvent = thisUser.attempts.pushups
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.pushupsMax) { 
                  this.setState({pushupsMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.pushups = eventTotal
              this.setState({
                attempts : newAttempts,
                pushupsAttempt : eventTotal,
              })         
            }

            if (thisUser.attempts.rowing != undefined) { 
              let thisEvent = thisUser.attempts.rowing
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.rowingMax) { 
                  this.setState({rowingMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.rowing = eventTotal
              this.setState({
                attempts : newAttempts,
                rowingAttempt : eventTotal,
              })         
            }
            
            if (thisUser.attempts.shuttlerun != undefined) { 
              let thisEvent = thisUser.attempts.shuttlerun
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.shuttlerunMax) { 
                  this.setState({shuttlerunMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.shuttlerun = eventTotal
              this.setState({
                attempts : newAttempts,
                shuttlerunAttempt : eventTotal,
              })         
            }
            if (thisUser.attempts.squats != undefined) { 
              let thisEvent = thisUser.attempts.squats
              let eventTotal = Object.entries(thisEvent).map(entry => Object.assign({value: entry[1]}, { key: entry[0].substring(0,10) }));
              eventTotal.forEach(element => {
                if (element.value.score > this.state.squatsMax) { 
                  this.setState({squatsMax : element.value.score})
                }
              });
              let newAttempts = {...this.state.attempts}
              newAttempts.squats = eventTotal
              this.setState({
                attempts : newAttempts,
                squatsAttempt : eventTotal,
              })         
            }

        }

          //  --End  thisUser()  --- 
        }
            
      });
  }


  

  render() {
    const { currentUser, userID, firstName, lastName, overall} = this.state
    return (   
        <View style={styles.container}>
          <ProfileHeader title="Profile"  />
          
          <ProfileCard name={firstName + ' ' + lastName} score={overall} image={this.state.profileImage} />
          {/* <Button
            title="Debug"
            onPress={ () => console.log(this.state.burpeesMax)}
          />  */}
          <View style={{flex: 1, backgroundColor: '#52489C' }}> 
          < TabViewExample 
            attemptsBest={this.state.attemptsBest}
            burpeesMax={this.state.burpeesMax}
            bikeMax={this.state.bikeMax}
            fitnesstestMax={this.state.fitnesstestMax}
            freethrowMax={this.state.freethrowMax}
            plankMax={this.state.burpeesMax}
            pushupsMax={this.state.pushupsMax}
            rowingMax={this.state.rowingMax}
            shuttlerunMax={this.state.shuttlerunMax}
            squatsMax={this.state.squatsMax}

            attempts={this.state.attempts}  
            burpeesAttempt={this.state.burpeesAttempt}
            bikeAttempt={this.state.bikeAttempt}
            fitnesstestAttempt={this.state.fitnesstestAttempt}
            freethrowAttempt={this.state.freethrowAttempt}
            plankAttempt={this.state.plankAttempt}
            pushupsAttempt={this.state.pushupsAttempt}
            rowingAttempt={this.state.rowingAttempt}
            shuttlerunAttempt={this.state.shuttlerunAttempt}
            squatsAttempt={this.state.squatsAttempt}

            hasAttempt={this.state.hasAttempt}
          />
          </View> 

          
        </View>
    );
  }
}
