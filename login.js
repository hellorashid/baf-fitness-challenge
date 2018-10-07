import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, List, ListItem, Icon, Button, FormInput, FormLabel} from 'react-native-elements'; 
import firebase from 'firebase'; 

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 

export default class LoginScreen extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Main'))
          .catch(error => this.setState({ errorMessage: error.message }))
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
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
            />      

            <FormLabel labelStyle={{color: '#52489C'}}>Password</FormLabel>
            <FormInput 
                secureTextEntry
                containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
            /> 
           
            <Button 
                // raised
                onPress={this.handleLogin}
                large
                rounded
                backgroundColor={'#52489C'}
                title='Login' 
                containerViewStyle={{ marginTop: 20}}
                > </Button> 

                
            <Button 
                onPress={() => this.props.navigation.navigate('SignUpScreen') }
                // large
                outline
                rounded
                backgroundColor={'#52489C'}
                color={'#52489C'}
                title={'Don\'t have an account?'} 
                containerViewStyle={{ marginTop: 20}}
                > </Button>
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
