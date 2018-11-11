import React from 'react';
import { Text, View, Image, Dimensions,  ScrollView, ActivityIndicator} from 'react-native';
import {Header, Card, List, ListItem, Icon, Button} from 'react-native-elements'; 
import * as firebase from 'firebase';
import secret from './secret.js'; 
import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 
import loadingImage from './src/images/loading.gif'; 


// Initialize Firebase
var config = {
    apiKey: secret.FIREBASE_KEY,
    authDomain: "fitnesschallenge-26de6.firebaseapp.com",
    databaseURL: "https://fitnesschallenge-26de6.firebaseio.com",
    projectId: "fitnesschallenge-26de6",
    storageBucket: "fitnesschallenge-26de6.appspot.com",
    messagingSenderId: "706151436086"
  };
firebase.initializeApp(config);


export default class AuthScreen extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'SignUpScreen')
        })
    } 

  render() {
    return (   
        <View style={styles.authPage}>       
     
            <ActivityIndicator size="large" color="#52489C" />
            <Text>Loading...</Text> 
            {/* <Image
                resizeMode={'contain'}
                source={loadingImage}
                style={{width: 135}}
                // style={styles.signupImage}
            />  */}
                  

            <Image
                resizeMode={'contain'}
                source={illustrationImage}
                style={styles.signupImage}
            /> 


        </View>
    );
  }
}
