import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, List, ListItem, Icon, Button, FormInput, FormLabel} from 'react-native-elements'; 

import { Jiro  } from 'react-native-textinput-effects';
import SwitchSelector from 'react-native-switch-selector';

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 
import ProfileCard from './components/ProfileCard.js';
import ProfileListItem from './components/ProfileListItem.js';
import ProfileCardItem from './components/ProfileCardItem.js';




export default class SignUpScreen extends React.Component {

    handleSignUp = () => {
        // TODO: Firebase stuff...
        console.log('handleSignUp')
      }

  render() {
    return (   
        <View style={styles.loginPage}>
          <MyHeader title="Sign Up" />
          
        <View style={{flex: 1, backgroundColor: '#EEF1FA', }}> 

         <Card
            containerStyle={{
                borderRadius: 20,
                backgroundColor: '#D6D8ED', 
                elevation: 5, 
                borderWidth: 0, 

            }}
        > 
           
  

            <FormLabel labelStyle={{color: '#52489C'}}>Name</FormLabel>
            <FormInput 
                containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={this.handleSignUp}/>    

            <FormLabel labelStyle={{color: '#52489C'}}>Email</FormLabel>
            <FormInput 
                containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={this.handleSignUp}/>      

            <FormLabel labelStyle={{color: '#52489C'}}>Preferred Competition: </FormLabel>
            <SwitchSelector
            initial={0}
            // onPress={value => this.setState({ gender: value })}
            textColor={'#52489C'} //'#7a44cf'
            selectedColor={'#EFEEF6'}
            buttonColor={'#52489C'}
            borderColor={'#52489C'}
            hasPadding
            options={[
                { label: 'Male', value: 'f',   }, 
                { label: 'Female', value: 'm',   } 
            ]} />

            <Button 
                // raised
                large
                rounded
                backgroundColor={'#52489C'}
                title='Sign Up' 
                containerViewStyle={{ marginTop: 20}}
                /> 

            </Card> 


            <ImageBackground
                resizeMode={'cover'}
                source={illustrationImage}
                style={styles.signupImage}
            />

          </View> 

        
              
        </View>
    );
  }
}
