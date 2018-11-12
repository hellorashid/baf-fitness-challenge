import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Purple_Primary = '#52489C'
const Light_Primary = '#EFEEF6'

export const colors = { 
  light : '#EFEEF6', 
  purple : '#52489C'
}
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
    height: 80, 
  }, 
  headerInnerContainer : { 
    paddingTop: 30, 
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
  profileCardBackground : { 
    height: windowHeight * 0.3, 
    width: windowWidth,
    borderRadius: 10, 
    position: 'absolute'
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
    backgroundColor: Light_Primary, 
    elevation: 10, 
  }, 
  profileCardBadge : { 
    backgroundColor: Purple_Primary, 
  }, 
  profileCardBadgeText : { 
    color: Light_Primary, 
    fontSize: 18
  }, 

//  ----- Leaderboards --- 

  leaderboardCard : { 
    borderRadius: 10, 
    elevation: 10, 
    borderWidth: 0, 
    backgroundColor: Light_Primary, 
    marginTop: 25,
    marginBottom: 25,
    padding: 10
  }, 
  leaderboardListBadge : { 
    backgroundColor: Purple_Primary, 
  }, 
  leaderboardListBadgeText : { 
    color: Light_Primary, 
    fontSize: 18
  }, 

  

// ---- Challenge Screen 
  challengeCard : { 
    width: windowWidth * 0.8, 
    height: 210, 
    borderRadius: 10,
    backgroundColor: colors.light,
    elevation: 10, 
    borderWidth: 0,
    padding: 0, 
  }, 
  challengeListCard : { 
    height: 100, 
    width: windowWidth * 0.9, 
    borderRadius: 10, 
    elevation: 10, 
    borderWidth: 0, 
    backgroundColor: Purple_Primary, 
    padding: 0, 
  }, 
  challengeListImage : { 
    width: windowWidth * 0.9, 
    height: 100, 
    borderRadius: 10 
  }, 
  challengeListText : { 
    color: Light_Primary,
    fontSize: 25, 
    fontWeight: '500', 
    elevation: 11, 
    bottom: 0, 
    left: 5
  }, 
  challengeGift : { 
    width: windowWidth * 0.8, 
    height: 210, 
    borderRadius: 10 
  }, 
  modalStyle : { 
    backgroundColor: Purple_Primary,
    borderRadius: 10,
    width: windowWidth * 0.9,
    padding: 0, 
    // position: 'absolute', 
    // bottom: 10
  }, 
  modalButton : { 
    borderRadius: 20, 
    bottom: 0, 
    right: 0,
    position: 'absolute', 
    height: 40, 
    width: 40
  }, 
  modalVideo : { 
    height: 200
  }, 

// ------ LOGIN PAGE -------
  loginPage : { 
    flex: 1,
    backgroundColor: '#EEF1FA' 
  }, 
  loginImage : { 
    width: windowWidth, 
    height: windowHeight *  0.5 , 
  }, 

  signupImage : { 
    width: windowWidth, 
    height: windowHeight *  0.4 , 
    position: 'absolute', 
    bottom: 0, 
    marginBottom: 0
  }, 

// -------- AUTH PAGE ----------

  authPage : { 
    backgroundColor: '#EEF1FA', 
    // backgroundColor: 'blue', 
    height: windowHeight, 
    padding: 0, 
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  signUpProfile : { 
      height: 100, 
      width: windowWidth * 0.8, 
      borderRadius: 10, 
      elevation: 10, 
      borderWidth: 0, 
      backgroundColor: Purple_Primary, 
      padding: 0, 
      display: 'flex'
  }, 
  signUpImage : { 
    width: windowWidth * 0.8, 
    height: 100, 
    borderRadius: 10, 
    // position: 'absolute',
    left: 0, 
    
  }, 

});

