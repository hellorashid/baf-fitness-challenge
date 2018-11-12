import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Header, Card, List, ListItem, Icon, Button} from 'react-native-elements'; 
import {Video} from 'expo'; 
import Modal from 'react-native-modal';
import {styles, colors} from './Styles.js'; 
import MyHeader from './components/Header.js'; 
import ChallengeListCard from './components/ChallengeListCard.js'; 

import bikeImage from './src/images/covers/bike.png';
import burpeesImage from './src/images/covers/burpees.png';
import freethrowImage from './src/images/covers/freethrow.png';
import plankImage from './src/images/covers/plank.png';
import pushupsImage from './src/images/covers/pushups.png';
import ropeImage from './src/images/covers/rope.png';
import rowingImage from './src/images/covers/rowing.png';
import shuttlerunImage from './src/images/covers/shuttlerun.png';
import squatsImage from './src/images/covers/squats.png';


import video from './src/images/video.mp4';


export default class ChallengeScreen extends React.Component {
    state = {
        isModalVisible: false
      };
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (   
        <View style={styles.container}>
          <MyHeader title="Challenge" />
          <ScrollView style={{flex: 1}}> 
          <View style={{ height: 250,  backgroundColor: colors.light }}> 
            <ScrollView style={{flex: 1 }} horizontal={true}> 
                <Card title="Challenge Dates" containerStyle={styles.challengeCard}> 
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron rightTitleStyle={{fontSize: 18, color: colors.purple}}/>
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron rightTitleStyle={{fontSize: 18, color: colors.purple}}/>
                    <ListItem title="9/12/18" rightTitle="6:30-9:30pm" hideChevron rightTitleStyle={{fontSize: 18, color: colors.purple}}/>
                </Card> 

                <Card containerStyle={styles.challengeCard}> 
                 <Image 
                    style={styles.challengeGift}
                    resizeMode={'cover'}
                    source={require('./src/images/giftOne.jpg') }
                />
                <Text style={{fontSize: 30, fontWeight: '700', color: 'white', position: 'absolute', bottom: 5}}> Grand Prize </Text> 
                </Card>  
            </ScrollView>
          </View>      

    
        <Modal 
            isVisible={this.state.isModalVisible}
            onBackdropPress={this._toggleModal}
            onSwipe={this._toggleModal}
            onBackButtonPress={this._toggleModal}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} >
          <View style={styles.modalStyle}>
            <Video
                source={video}
                shouldPlay
                resizeMode="cover"
                isMuted
                style={styles.modalVideo} 
            /> 
            {/* <Button
            icon={{name: 'close', type: 'font-awesome'}}
            title='Close'
            onPress={this._toggleModal}
            color={'#52489C'}
            containerViewStyle={styles.modalButton}
            rounded
            /> */}
            <Icon
                reverse
                name='close'
                type='font-awesome'
                color='#EFEEF6'
                reverseColor='#52489C'
                raised
                onPress={this._toggleModal}
                containerStyle={styles.modalButton}
            />

            </View>
        </Modal>


        <View style={{flex: 1, paddingBottom: 22}}>      

            <ChallengeListCard title={'Burpees'} videoPress={this._toggleModal} coverImage={burpeesImage}/>

            <ChallengeListCard title={'Bike'} videoPress={this._toggleModal} coverImage={bikeImage}/>

            <ChallengeListCard title={'Fitness Test'} videoPress={this._toggleModal} coverImage={ropeImage}/>

            <ChallengeListCard title={'Free Throw'} videoPress={this._toggleModal} coverImage={freethrowImage}/>

            <ChallengeListCard title={'Plank'} videoPress={this._toggleModal} coverImage={plankImage}/>

            <ChallengeListCard title={'Push Ups'} videoPress={this._toggleModal} coverImage={pushupsImage}/>

            <ChallengeListCard title={'Rowing'} videoPress={this._toggleModal} coverImage={rowingImage}/>

            <ChallengeListCard title={'Shuttle Run'} videoPress={this._toggleModal} coverImage={shuttlerunImage}/>

            <ChallengeListCard title={'Squats'} videoPress={this._toggleModal} coverImage={squatsImage}/>


            {/* <Card containerStyle={ styles.challengeListCard } image={bikeImage} imageStyle={{borderRadius: 10, position: "absolute"}}>
                <Text style={styles.challengeListText} onPress={this._toggleModal}> Burpees </Text> 
            </Card>  */}
          
          
        </View>               
        </ScrollView>
        </View>
    );
  }
}
