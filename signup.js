import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {Header, Card, Tile, List, ListItem, SocialIcon, FormValidationMessage, Button, FormInput, FormLabel, Avatar} from 'react-native-elements'; 
import { ImagePicker, Permissions } from 'expo';
import firebase from 'firebase'; 

import { TextField } from 'react-native-material-textfield';
import SwitchSelector from 'react-native-switch-selector';

import {styles} from './Styles.js'; 
import illustrationImage from './src/images/illustration.png'; 

import MyHeader from './components/Header.js'; 
const provider = new firebase.auth.GoogleAuthProvider();

const defaultImage = "https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png"


export default class SignUpScreen extends React.Component {
    state = { 
        firstName: '', 
        lastName: '', 
        email: '',
        password: '',
        gender : '',
        errorMessage: null,
        image: defaultImage
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        // this.setState({ hasCameraPermission: status === 'granted' });
    }

    handleSignUp = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Main'))
          .catch(error => this.setState({ errorMessage: error.message }))
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
                height: 500
            }}> 

            {/* <ScrollView> */}

            <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>

            <TextField 
                // containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={firstName => this.setState({ firstName })}
                value={this.state.firstName}
                //TextField
                label=" First Name"
                textColor={"#52489C"}
                baseColor={"#52489C"}
                tintColor={"#52489C"}
                fontSize={20}
                labelFontSize={15}
                />

            <TextField 
                // containerStyle={{borderRadius: 5, borderColor:'#52489C', borderWidth: 2 }}
                onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}
                //TextField
                label=" Last Name"
                textColor={"#52489C"}
                baseColor={"#52489C"}
                tintColor={"#52489C"}
                fontSize={20}
                labelFontSize={15}
            />


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

            <FormLabel labelStyle={{color: '#52489C'}}>Preferred Competition: </FormLabel>
                <SwitchSelector
                    initial={0}
                    onPress={value => this.setState({ gender: value })}
                    textColor={'#52489C'} //'#7a44cf'
                    selectedColor={'#EFEEF6'}
                    buttonColor={'#52489C'}
                    borderColor={'#52489C'}
                    hasPadding
                    options={[
                        { label: 'Male', value: 'm',   }, 
                        { label: 'Female', value: 'f',   } 
                    ]} 
                />

                <View style={{marginTop: 20, elevation: 5}}> 
                <Image 
                    style={styles.signUpImage}
                    resizeMode={'contain'}
                    source={{uri: this.state.image} }
                    />
                </View> 

                <Button 
                    onPress={this._pickImage}
                    outline
                    rounded
                    backgroundColor={'#52489C'}
                    color={'#52489C'}
                    title="Profile Picture"
                    containerViewStyle={{ marginTop: 20}}
                />  


            <Button 
                // raised
                onPress={this.handleSignUp}
                large
                rounded
                backgroundColor={'#52489C'}
                title='Sign Up' 
                containerViewStyle={{ marginTop: 20}}
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
                onPress={() => console.log(this.state.firstName) }
                // large
                // outline
                rounded
                backgroundColor={'white'}
                color={'#52489C'}
                title='Already have an account?' 
                containerViewStyle={{ marginTop: 20}}
            ></Button>


            {/* <SocialIcon
            title='Already have an account?'
            button
            light
            type='google'
            onPress={() => console.log(this.state.firstName) }
            />   */}

         

          </View> 

        
              
        </View>
    );
  }


}


