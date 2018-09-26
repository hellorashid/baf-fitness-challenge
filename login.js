import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, List, ListItem, Icon, Button, FormInput, FormLabel} from 'react-native-elements'; 

import SwitchSelector from 'react-native-switch-selector';

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 

export default class LoginScreen extends React.Component {

    handleSignUp = () => {
        // TODO: Firebase stuff...
        console.log('handleSignUp')
      }

  render() {
    return (   
        <View style={styles.loginPage}>
          <MyHeader title="Login" />
          
        <View style={{flex: 1, backgroundColor: '#EEF1FA', }}> 

         <Card
            containerStyle={{
                borderRadius: 20,
                backgroundColor: '#D6D8ED', 
                elevation: 5, 
                borderWidth: 0, 

            }}
        > 
           
     

            <FormLabel labelStyle={{color: '#52489C'}}>Email</FormLabel>
            <FormInput 
                containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={this.handleSignUp}/>      


            <FormLabel labelStyle={{color: '#52489C'}}>Password</FormLabel>
            <FormInput 
                containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={this.handleSignUp}/> 
           
            <Button 
                // raised
                large
                rounded
                backgroundColor={'#52489C'}
                title='Login' 
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
