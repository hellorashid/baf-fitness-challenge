import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, Tile, List, ListItem, SocialIcon, FormValidationMessage, Button, FormInput, FormLabel, Avatar} from 'react-native-elements'; 
import { ImagePicker, Permissions } from 'expo';
import firebase from 'firebase'; 
import secret from './secret.js'

import { TextField } from 'react-native-material-textfield';
import SwitchSelector from 'react-native-switch-selector';

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 
const provider = new firebase.auth.GoogleAuthProvider();

const defaultImage = "https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png"

const androidClientId = secret.ANDROID_CLIENTID

export default class SignUpScreen extends React.Component {
    state = { 
        firstName: '', 
        lastName: '', 
        email: '',
        password: '',
        gender : '',
        errorMessage: null,
        image: defaultImage, 
        isLoading: false
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        // this.setState({ hasCameraPermission: status === 'granted' });
    }

    writeUserData(userID, firstName, lastName, profileImage, gender) { 
        firebase.database.ref('users/' + userID).set({ 
            first_name: firstName, 
            last_name: lastName, 
            gender: gender, 
            profileImage: profileImage, 
        })
    }

    // async uploadImageAsync(uri) {
    //     const response = await fetch(uri);
    //     const blob = await response.blob();
    //     const ref = firebase
    //       .storage()
    //       .ref()
    //       .child('testImage');
      
    //     const snapshot = await ref.put(blob);
    //     return snapshot.downloadURL;
    //   }

    handleSignUp = () => {
        console.log("signing up user")
        this.setState({isLoading: true})

        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
        //   .then(() => this.props.navigation.navigate('OnboardingScreen'))
          .catch(error => this.setState({ errorMessage: error.message, isLoading: false }))
      }
 
      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log('Image: ', result);
    
        if (!result.cancelled) {
            console.log("not cancelled")
          this.setState({ image: result.uri });
        }
      };


      googleLogin = async () => {
        try {
          const result = await Expo.Google.logInAsync({
            androidClientId: androidClientId,
            scopes: ["profile", "email"], 
            customParameters: { hd: 'nyu.edu' },
          })
          if (result.type === "success") {

            console.log("SUCCESS", result.user.name)
            // this.setState({
            //   signedIn: true,
            //   name: result.user.name,
            //   photoUrl: result.user.photoUrl
            // })
          } else {
            console.log("cancelled")
          }
    } catch (e) {
          console.log("error", e)
        }
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
                // height: 500
            }}> 

            {/* <ScrollView> */}

            <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>

            <TextField 
                // containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                //TextField
                label=" Email"
                textColor={"#52489C"}
                baseColor={"#52489C"}
                tintColor={"#52489C"}
                fontSize={20}
                labelFontSize={15}
                />    

                <TextField 
                    secureTextEntry
                    // containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    //TextField
                    label=" Password"
                    textColor={"#52489C"}
                    baseColor={"#52489C"}
                    tintColor={"#52489C"}
                    fontSize={20}
                    labelFontSize={15}
                    />      

            <Button 
                // raised
                onPress={this.handleSignUp}
                large
                rounded
                backgroundColor={'#52489C'}
                title='Sign Up' 
                containerViewStyle={{ marginTop: 20}}
                loading={this.state.isLoading}
                loadingRight={true}
            > </Button>             
           
           {/* </ScrollView> */}
            </Card> 

            <Button 
                onPress={() => this.props.navigation.navigate('LoginScreen') }
                // large
                // outline
                rounded
                backgroundColor={'white'}
                color={'#52489C'}
                title='Already have an account?' 
                containerViewStyle={{ marginTop: 20}}
            ></Button> 

            <Button 
                onPress={() => console.log("hi") }
                rounded
                backgroundColor={'white'}
                color={'#52489C'}
                title='Already have an account?' 
                containerViewStyle={{ marginTop: 20}}
            ></Button> 

             
             {/* <Button 
                onPress={ this.uploadImageAsync(defaultImage) }
                // large
                // outline
                rounded
                backgroundColor={'white'}
                color={'#52489C'}
                title='Already have an account?' 
                containerViewStyle={{ marginTop: 20}}
            ></Button> */}


            <SocialIcon
                title='Already have an account?'
                button
                light
                type='google'
                onPress={this.googleLogin}
            />   

         

          </View> 

        
              
        </View>
    );
  }


}


