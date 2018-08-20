import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Header, Card, List, ListItem, Icon, Button} from 'react-native-elements'; 
import {Video} from 'expo'; 
import Modal from 'react-native-modal';
import {styles, colors} from './Styles.js'; 
import MyHeader from './components/Header.js'; 

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
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
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


        <View style={{flex: 1}}>      


            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText} onPress={this._toggleModal}> Burpees </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Bike </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Fitness Test </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Free Throw </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Plank </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Push Ups </Text> 
            </Card> 
            <Card containerStyle={styles.challengeListCard}>
                <Text style={styles.challengeListText}> Rope Pull </Text> 
            </Card> 
        </View>               
        </ScrollView>
        </View>
    );
  }
}
