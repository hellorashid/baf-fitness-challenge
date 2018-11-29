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


import burpeesVideo from './src/images/videos/burpees.mp4';
import bikeVideo from './src/images/videos/bike.mp4';
import freethrowVideo from './src/images/videos/freethrow.mp4';
import plankVideo from './src/images/videos/plank.mp4';
import pushupsVideo from './src/images/videos/pushups.mp4';
import rowingVideo from './src/images/videos/rowing.mp4';
import shuttlerunVideo from './src/images/videos/shuttlerun.mp4';
import squatsVideo from './src/images/videos/squats.mp4';




class VideoCopmonent extends React.Component {

    render() {
      return (
        <View style={styles.modalStyle}>
        <Video
            source={this.props.video}
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
        
      );
    }
  }
  

export default class ChallengeScreen extends React.Component {
    state = {
        isModalVisible: false, 

        modalBike: false, 
        isModalVisibleFreethrow: false, 

        isModalVisibleFreethrow: false, 
        isModalVisiblePlank: false, 
        isModalVisiblePushups: false, 
        isModalVisibleRowing: false, 
        isModalVisibleShuttlerun: false, 
        isModalVisibleSquats: false, 

      };
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible, 
    });

    _toggleModalBike = () =>
        this.setState({ modalBike: !this.state.modalBike, 
    });
    
    _toggleModalFreethrow = () =>
        this.setState({ isModalVisibleFreethrow: !this.state.isModalVisibleFreethrow, 
    });

    _toggleModalPlank = () =>
        this.setState({ isModalVisiblePlank: !this.state.isModalVisiblePlank, 
    });

    _toggleModalPushups = () =>
        this.setState({ isModalVisiblePushups: !this.state.isModalVisiblePushups, 
    });

    _toggleModalRowing = () =>
        this.setState({ isModalVisibleRowing: !this.state.isModalVisibleRowing, 
    });

    _toggleModalShuttlerun = () =>
        this.setState({ isModalVisibleShuttlerun: !this.state.isModalVisibleShuttlerun, 
    });

    _toggleModalSquats = () =>
        this.setState({ isModalVisibleSquats: !this.state.isModalVisibleSquats, 
    });

  render() {
    return (   
        <View style={styles.container}>
          <MyHeader title="Challenge" />
          <ScrollView style={{flex: 1}}> 
          <View style={{ height: 250,  backgroundColor: colors.light }}> 
            <ScrollView style={{flex: 1 }} horizontal={true}> 
                <Card title="Challenge Dates" containerStyle={styles.challengeCard}> 
                    <ListItem title="9/28/18" rightTitle="6:30-9:30pm" hideChevron rightTitleStyle={{fontSize: 18, color: colors.purple}}/>
                    <ListItem title="9/29/18" rightTitle="6:30-9:30pm" hideChevron rightTitleStyle={{fontSize: 18, color: colors.purple}}/>
                    <ListItem title="12/01/18" rightTitle="1:30-4:30pm" hideChevron rightTitleStyle={{fontSize: 18, color: colors.purple}}/>
                </Card> 

                {/* <Card containerStyle={styles.challengeCard}> 
                 <Image 
                    style={styles.challengeGift}
                    resizeMode={'cover'}
                    source={require('./src/images/giftOne.jpg') }
                />
                <Text style={{fontSize: 30, fontWeight: '700', color: 'white', position: 'absolute', bottom: 5}}> Grand Prize </Text> 
                </Card>   */}
            </ScrollView>
          </View>      

    
        <Modal 
            isVisible={this.state.isModalVisible}
            onBackdropPress={this._toggleModal}
            onSwipe={this._toggleModal}
            onBackButtonPress={this._toggleModal}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} 
            children={<VideoCopmonent video={burpeesVideo} />}
            />
          
        <Modal 
        isVisible={this.state.modalBike}
        onBackdropPress={this._toggleModalBike}
        onSwipe={this._toggleModalBike}
        onBackButtonPress={this._toggleModalBike}
        swipeDirection="down"
        backdropColor={'#EFEEF6'} 
        children={<VideoCopmonent video={bikeVideo} />}
        />

        
        <Modal 
            isVisible={this.state.isModalVisibleFreethrow}
            onBackdropPress={this._toggleModalFreethrow}
            onSwipe={this._toggleModalFreethrow}
            onBackButtonPress={this._toggleModalFreethrow}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} 
            children={<VideoCopmonent video={freethrowVideo} />}
        />
          <Modal 
            isVisible={this.state.isModalVisiblePlank}
            onBackdropPress={this._toggleModalPlank}
            onSwipe={this._toggleModalPlank}
            onBackButtonPress={this._toggleModalPlank}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} 
            children={<VideoCopmonent video={plankVideo} />}
        />

          <Modal 
            isVisible={this.state.isModalVisiblePushups}
            onBackdropPress={this._toggleModalPushups}
            onSwipe={this._toggleModalPushups}
            onBackButtonPress={this._toggleModalPushups}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} 
            children={<VideoCopmonent video={pushupsVideo} />}
        />

          <Modal 
            isVisible={this.state.isModalVisibleRowing}
            onBackdropPress={this._toggleModalRowing}
            onSwipe={this._toggleModalRowing}
            onBackButtonPress={this._toggleModalRowing}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} 
            children={<VideoCopmonent video={rowingVideo} />}
        />

          <Modal 
            isVisible={this.state.isModalVisibleShuttlerun}
            onBackdropPress={this._toggleModalShuttlerun}
            onSwipe={this._toggleModalShuttlerun}
            onBackButtonPress={this._toggleModalShuttlerun}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} 
            children={<VideoCopmonent video={shuttlerunVideo} />}
        />

        <Modal 
            isVisible={this.state.isModalVisibleSquats}
            onBackdropPress={this._toggleModalSquats}
            onSwipe={this._toggleModalSquats}
            onBackButtonPress={this._toggleModalSquats}
            swipeDirection="down"
            backdropColor={'#EFEEF6'} 
            children={<VideoCopmonent video={squatsVideo} />}
        />
          
     


        <View style={{flex: 1, paddingBottom: 22}}>      

            <ChallengeListCard title={'Burpees'} videoPress={this._toggleModal}  coverImage={burpeesImage}/>

            <ChallengeListCard title={'Bike'} videoPress={this._toggleModalBike} coverImage={bikeImage}/>

            <ChallengeListCard title={'Free Throw'} videoPress={this._toggleModalFreethrow} coverImage={freethrowImage}/>

            <ChallengeListCard title={'Plank'} videoPress={this._toggleModalPlank} coverImage={plankImage}/>

            <ChallengeListCard title={'Push Ups'} videoPress={this._toggleModalPushups} coverImage={pushupsImage}/>

            <ChallengeListCard title={'Rowing'} videoPress={this._toggleModalRowing} coverImage={rowingImage}/>

            <ChallengeListCard title={'Shuttle Run'} videoPress={this._toggleModalShuttlerun} coverImage={shuttlerunImage}/>

            <ChallengeListCard title={'Squats'} videoPress={this._toggleModalSquats} coverImage={squatsImage}/>

            {/* <ChallengeListCard title={'Fitness Test'} videoPress={this._toggleModal} coverImage={ropeImage}/> */}

            {/* <Card containerStyle={ styles.challengeListCard } image={bikeImage} imageStyle={{borderRadius: 10, position: "absolute"}}>
                <Text style={styles.challengeListText} onPress={this._toggleModal}> Burpees </Text> 
            </Card>  */}
          
          
        </View>               
        </ScrollView>
        </View>
    );
  }
}
