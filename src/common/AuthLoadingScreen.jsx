import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View, Image,ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '../theme'
import { LOGO, SPLASH_IMAGE } from '../images'
import { retrieveData } from '../common/AsyncStorage'



import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { KEY, SCREEN, DIMENS } from '../constants';
import NavigationService from '../NavigationService';


export class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {

    setTimeout(() => {
      //NavigationService.clearStack('Drawer')
      NavigationService.clearStack(SCREEN.LOGIN);
      // retrieveData(KEY.USER_DATA,result=>{
      //   if(result!=undefined&&result){
      //     NavigationService.clearStack('Drawer')
      //   }else{
      //     NavigationService.clearStack(SCREEN.INTRO_SCREEN);
      //   }
      // })
    }, 2000);
  };

  // Render any loading content that you like here
  render() {
    return (
      <ImageBackground 
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%'
      }}
      source={SPLASH_IMAGE}
      >
        {/* <Image source={LOGO} style={{ resizeMode: 'contain', width: 156, height: 156 }} /> */}
        <ActivityIndicator 
        color={colors.white} size="large"
        style={{
          marginBottom:DIMENS.px_20
        }} />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
  },
});