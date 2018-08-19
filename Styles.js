import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Purple_Primary = '#52489C'
const Light_Primary = '#EFEEF6'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  // ---- HEADER ------
  headerContainer : { 
    backgroundColor: '#EFEEF6', 
    height: 80
  }, 
  headerInnerContainer : { 
    paddingTop: 30
  }, 
  headerText : { 
    color: Purple_Primary, 
    fontWeight: '700',
    fontSize: 32,  
    left: 10, 
    position: 'absolute'
  }, 

  // ---- PROFILE ----- 
  profileView : { 
    backgroundColor: '#EFEEF6', 
    height: windowHeight * 0.35
  }, 
  profileCard: { 
    borderRadius: 10,
    padding: 0, 
    height: windowHeight * 0.3, 
    width: windowWidth * 0.9,
    elevation: 20, 
    borderWidth: 0,
  }, 
  profileCardImage : { 
    height: windowHeight * 0.3, 
    width: windowWidth * 0.9,
    borderRadius: 10
  }, 
  profileCardTextView : { 
    position: 'absolute',
    bottom: 0 ,
    padding: 20,
    height: 50, 
    width: windowWidth * 0.9,
    backgroundColor :'rgba(255, 255, 255, 0.5)', 
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,

  }, 
  profileCardText : { 
    color: Purple_Primary, 
    fontWeight: '700',
    fontSize: 32,  
    elevation: 10, 
    position: 'absolute', 
    bottom: 5,
  }, 
  profileCardScore : { 
    color: Purple_Primary, 
    fontWeight: '700',
    fontSize: 32,  
    elevation: 10, 
    position: 'absolute', 
    bottom: 5, 
    right: 5
  }, 
  profileListBadge : { 
    backgroundColor: Light_Primary, 
  }, 
  profileListBadgeText : { 
    color: Purple_Primary, 
    fontSize: 18
  }, 
  profileTabCard : { 
    borderRadius: 10, 
    backgroundColor: Light_Primary
  }, 
  profileCardBadge : { 
    backgroundColor: Purple_Primary, 
  }, 
  profileCardBadgeText : { 
    color: Light_Primary, 
    fontSize: 18
  }, 

//  ----- Leaderboards 

  leaderboardCard : { 
    borderRadius: 10, 
    elevation: 10, 
    borderWidth: 0, 
  }, 

// ---- Challenge Screen 
  challengeCard : { 
    width: windowWidth * 0.8, 
    height: 210, 
    borderRadius: 10,
    backgroundColor: '#B3B3F1',
    elevation: 10, 
    borderWidth: 0,
  }, 
  challengeListCard : { 
    height: 100, 
    borderRadius: 10, 
    elevation: 10, 
    borderWidth: 0, 
    backgroundColor: Purple_Primary, 
  }, 
  challengeListText : { 
    color: Light_Primary,
    fontSize: 25, 
    fontWeight: '500', 
    elevation: 11, 
  }
});

