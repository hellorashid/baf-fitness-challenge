import React from 'react';
import { Text, View, Image, Dimensions,  ScrollView} from 'react-native';
import {Header, Card, List, ListItem, Icon, Button} from 'react-native-elements'; 
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';




import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 
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

export default class AuthScreen extends React.Component {
  render() {
    return (   
        <View style={styles.loginPage}>
          <MyHeader title="NYU Fitness Challenge" />
          
          <View style={{flex: 1, backgroundColor: '#EEF1FA', justifyContent: 'center' }}> 
          {/* < TabViewExample /> */}

            <Button 
                // raised
                outline
                color={'#52489C'}
                large
                rounded
                backgroundColor={'#52489C'}
                title='Login' /> 


            <Button 
                // raised
                large
                rounded
                backgroundColor={'#52489C'}
                title='Sign Up' 
                containerViewStyle={{ marginTop: 20}}
                /> 

          </View> 

        
        <View style={{flex: 1, backgroundColor: '#EEF1FA' }}> 
            <Image
                resizeMode={'contain'}
                source={illustrationImage}
                style={styles.loginImage}
            /> 
        </View> 

        


          
        </View>
    );
  }
}