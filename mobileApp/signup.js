import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, List, ListItem, SocialIcon, FormValidationMessage, Button, FormInput, FormLabel, Icon} from 'react-native-elements'; 
import { ImagePicker, Permissions } from 'expo';
import Modal from 'react-native-modal';


import { TextField } from 'react-native-material-textfield';
// import SwitchSelector from 'react-native-switch-selector';

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 

import firebase from 'firebase'; 
const provider = new firebase.auth.GoogleAuthProvider();

import secret from './secret.js'
const androidClientId = secret.ANDROID_CLIENTID
const androidStandaloneAppClientId = secret.OAUTH_KEY
const webClientId = secret.WEB_CLIENTID

const defaultImage = "https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png"


export default class SignUpScreen extends React.Component {
    state = { 
        firstName: '', 
        lastName: '', 
        email: '',
        password: '',
        gender : '',
        errorMessage: null,
        image: defaultImage, 
        isLoading: false,
        isLoading2: false,
        isModalVisible: false
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    async componentDidMount() {
        // const { status } = await Permissions.askAsync(Permissions.CAMERA);
        // const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        // this.setState({ hasCameraPermission: status === 'granted' });
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
            this.setState({isLoading2: true})
            const result = await Expo.Google.logInAsync({
                behavior: "web",
                androidClientId: androidClientId,
                scopes: ["profile", "email"], 
                webClientId : webClientId,
                androidStandaloneAppClientId : androidStandaloneAppClientId
            })
            if (result.type === "success") {
                
                // console.log("SUCCESS", result.user.name)
                console.log("SUCCESS", result)
                
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);

                return firebase.auth().signInWithCredential(credential).catch((error) => {
                    console.log("uh oh" , error.message)
                });
            } else {
                console.log("cancelled")
                this.setState({ isLoading2: false })

            }

        } catch (e) {
            console.log("error", e)
            this.setState({ isLoading2: false })
        }
    }
    
    consoleButton = () => { 
        console.log("🔥", firebase.auth().currentUser)
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

            <Button
                title='Sign in with your NYU Email'
                // button
                // light
                icon={
                    <Icon
                      name='google'
                      type='font-awesome'
                    //   size={15}
                      color='white'
                    />
                  }
                // raised
                large
                rounded
                backgroundColor={'#52489C'}
                style={{backgroundColor: '#52489C' }}
                containerViewStyle={{ marginTop: 20, elevation: 10}}

                type='google'
                onPress={this.googleLogin}
                loading={this.state.isLoading2}
                loadingRight={true}
            /> 
        
        <Modal 
            isVisible={this.state.isModalVisible}
            onBackdropPress={this._toggleModal}
            onSwipe={this._toggleModal}
            onBackButtonPress={this._toggleModal}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} >
          <View style={styles.modalStyle}>
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
                outline
                color={'#52489C'}
                backgroundColor={'#52489C'}
                title='Sign Up' 
                containerViewStyle={{ marginTop: 20}}
                loading={this.state.isLoading}
                loadingRight={true}
            > </Button>             
           
          
       
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


            </View>
        </Modal>


              <Button 
                onPress={this._toggleModal }
                // large
                // outline
                rounded
                clear={true}
                backgroundColor={'white'}
                color={'#52489C'}
                title='Sign in with Email/Password' 
                containerViewStyle={{ marginTop: 20}}
            ></Button> 

            {/* <Button 
                onPress={this.consoleButton }
                rounded
                backgroundColor={'white'}
                color={'#52489C'}
                title='Already have an account?' 
                containerViewStyle={{ marginTop: 20}}
            ></Button>  */}

             
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


              

         

          </View> 

        
              
        </View>
    );
  }


}


