import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, List, SocialIcon, FormValidationMessage, Button, FormInput, FormLabel} from 'react-native-elements'; 
import firebase from 'firebase'; 

import SwitchSelector from 'react-native-switch-selector';

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 

const provider = new firebase.auth.GoogleAuthProvider();



export default class SignUpScreen extends React.Component {
    state = { email: '', password: '', gender : '', errorMessage: null }

    handleSignUp = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Main'))
          .catch(error => this.setState({ errorMessage: error.message }))
      }
        
  render() {
    return (   
        <View style={styles.loginPage}>
        <MyHeader title="Sign Up" />
          
        <View style={{flex: 1, backgroundColor: '#EEF1FA', }}> 
        <ImageBackground
                resizeMode={'cover'}
                source={illustrationImage}
                style={styles.signupImage}
            />
         <Card
            containerStyle={{
                borderRadius: 20,
                backgroundColor: '#D6D8ED', 
                elevation: 5, 
                borderWidth: 0, 

            }}> 

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

            {/* <FormLabel labelStyle={{color: '#52489C'}}>Preferred Competition: </FormLabel> */}
                {/* <SwitchSelector
                    initial={0}
                    // onPress={value => this.setState({ gender: value })}
                    // value={this.state.gender}
                    textColor={'#52489C'} //'#7a44cf'
                    selectedColor={'#EFEEF6'}
                    buttonColor={'#52489C'}
                    borderColor={'#52489C'}
                    hasPadding
                    options={[
                        { label: 'Male', value: 'f',   }, 
                        { label: 'Female', value: 'm',   } 
                    ]} 
                /> */}

            <Button 
                // raised
                onPress={this.handleSignUp}
                large
                rounded
                backgroundColor={'#52489C'}
                title='Sign Up' 
                containerViewStyle={{ marginTop: 20}}
            > </Button>  


            <Button 
                onPress={() => this.props.navigation.navigate('LoginScreen') }
                // large
                outline
                rounded
                backgroundColor={'#52489C'}
                color={'#52489C'}
                title='Already have an account?' 
                containerViewStyle={{ marginTop: 20}}
                > </Button> 
            </Card> 

              

            <SocialIcon
            title='Sign Up with Google'
            button
            light
            type='google'
            /> 

         

          </View> 

        
              
        </View>
    );
  }
}


