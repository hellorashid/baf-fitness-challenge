import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, List, ListItem, Icon, SocialIcon, Button, FormInput, FormLabel, FormValidationMessage} from 'react-native-elements'; 
import firebase from 'firebase'; 

import secret from './secret.js'
const androidClientId = secret.ANDROID_CLIENTID

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 

export default class LoginScreen extends React.Component {
    state = { email: '', password: '', errorMessage: null, isLoading: false }

    handleLogin = () => {
        this.setState({isLoading: true})
        const { email, password } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Main'))
          .catch(error => this.setState({ errorMessage: error.message, isLoading: false }))
      }

    testSomething = () => { 
        console.log("hiii, testing!")
    }

    // googleLogin = async () => {
    //     try {
    //       const result = await Expo.Google.logInAsync({
    //         androidClientId: androidClientId,
    //         scopes: ["profile", "email"], 
    //         customParameters: { hd: 'nyu.edu' },
    //       })
    //       if (result.type === "success") {

    //         console.log("SUCCESS", result.user.name)
    //         // this.setState({
    //         //   signedIn: true,
    //         //   name: result.user.name,
    //         //   photoUrl: result.user.photoUrl
    //         // })
    //       } else {
    //         console.log("cancelled")
    //       }
    //     } catch (e) {
    //         console.log("error", e)
    //         }
    // }

   

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
            <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
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
                loading={this.state.isLoading}
                loadingRight={true}
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

            {/* <Button 
                onPress={() => console.log("uhhh")}
                // large
                outline
                rounded
                backgroundColor={'#52489C'}
                color={'#52489C'}
                title={'DEBUG?'} 
                containerViewStyle={{ marginTop: 20}}
            > </Button> */}

            {/* <SocialIcon
                title='Sign In with Google?'
                button
                light
                type='google'
                onPress={this.googleLogin}
            />    */}
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
