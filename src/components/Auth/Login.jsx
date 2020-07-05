import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text, Image,
  TouchableOpacity,
  View, Dimensions,
  TextInput,
  ImageBackground
} from 'react-native'
import { Form, Field } from 'react-final-form'
import Ripple from 'react-native-material-ripple';


import FormTextInput from '../FormTextInput'
import HeaderButton from '../HeaderButton'
import { showError } from '../../NotificationService'
import styles from './styles'
import { colors } from '../../theme'
import { LOGO, BACKGROUND_ONE, BACKGROUND_TWO, LOGO_WIDTH, FACEBOOK } from '../../images'
import translate from '../../i18n/i18n';
import {
  APP_PARAMS, FONT_FAMILIY, DIMENS, emailRegex, KEY, passRegex, SCREEN, WIDTH
} from '../../constants'
import CommonHeader from '../../common/CommonHeader'
import NavigationService from '../../NavigationService'
import { showInfoToast, showErrorToast } from '../../utility/Toast'
import { showMessage } from 'react-native-flash-message'
import * as Utils from '../../utility/Utils'
import Loader from '../../common/Loader'
import { storeData, retrieveData } from '../../common/AsyncStorage'
import CommonAddressView from '../../common/CommonAddressView';

//Library
import Orientation from 'react-native-orientation';

//Icons
import { IconX, ICON_TYPE } from '../../utility/Icons';

export default class Login extends React.PureComponent {


  constructor(props) {
    super(props)
    this.passRef = undefined;
    this.state = {
      emailTxtField: '',
      passTxtField: '',
      isSelectRememberMe: false
    }
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  callIndiBusinessLoginUser = () => {

    if (Utils.isValidEmail(this.state.emailTxtField, true) &&
      Utils.isValidNewPassword(this.state.passTxtField, true)) {

      let requestData = {
        Email: this.state.emailTxtField,
        Password: this.state.passTxtField,
      }
      this.props.requestLoginAppUser(requestData).then(result => {
        this.responseIndiBusinessLoginUser(result)
      })
    }
  }

  responseIndiBusinessLoginUser = (response) => {

    if (response != undefined) {
      if (response.Status === KEY.SUCCESS_) {
        if (!response.Is2FAActive) {
          //this.showSuccess(translate('MESSAGE'), translate('TWO_FACTOR_AUTH'))
          //NavigationService.navigate({ routeName: SCREEN.TWO_FACTOR_AUTH, params: { param: response }, });

        } else if (!response.IsEmailVerfied) {
          this.showSuccess(translate('MESSAGE'), translate('EMAIL_NOT_VERIFY'))

        } else if (!response.IsKycComplete) {
          //this.showSuccess(translate('MESSAGE'), translate('KYC_NOT_COMPLETE'))
          this.callCheckDocumentUser(response)

        } else {
          //NavigationService.navigate({ routeName: SCREEN.TWO_FACTOR_AUTH_LOGIN, params: { param: response }, });
        }
      } else if (response.Status == KEY.FAILED_) {
        showErrorToast(response.Message)
      }
    }
  }

  callCheckDocumentUser = (response) => {

    this.props.requestCheckDocumentUser({}, response.Token).then(result => {
      this.responseCheckDocumentUser(result, response)
    })
  }

  responseCheckDocumentUser = (response, loginResponse) => {

    if (response != undefined) {
      if (response.Status === KEY.SUCCESS_) {
        NavigationService.navigate({ routeName: SCREEN.KYC_VERIFICATION, params: { param: loginResponse }, });
      } else if (response.Status == KEY.FAILED_) {
        showErrorToast(response.Message)
      }
    }
  }

  showSuccess = (message, description) => showMessage({
    type: 'success',
    backgroundColor: colors.color_accent,
    message,
    description,
    position: 'top'
  })

  render() {
    const { loading } = this.props
    //console.log('country code data',JSON.stringify(country));


    return (
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
        }}
        source={BACKGROUND_ONE}>
        <ScrollView>
          <View style={{
            flex: 1,
            width: WIDTH,
            padding: DIMENS.px_20,
          }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Image source={LOGO_WIDTH}
                style={{
                  resizeMode: 'contain',
                  width: DIMENS.px_200,
                  marginTop: DIMENS.px_25
                }} />
            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: DIMENS.px_40
              }}>
              {/* Mobile Number */}
              <View style={{
                width: '100%',
              }}>
                <Text style={{
                  color: colors.color_accent_dark,
                  fontSize: DIMENS.txt_size_medium_14,
                  fontFamily: FONT_FAMILIY.Font_Regular,
                  textAlign: 'center'
                }}>{translate('USER_NAME_EMAIL_ADDRESS')}</Text>
                <View style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <IconX
                    origin={ICON_TYPE.FONTISTO}
                    name='email'
                    color={colors.black}
                    size={22}
                  />
                  <TextInput
                    placeholder={translate('USER_NAME_EMAIL_ADDRESS')}
                    placeholderTextColor={colors.black}
                    keyboardType={'email-address'}
                    onChangeText={(txt) => {
                      this.setState({ emailTxtField: txt })
                    }}
                    onSubmitEditing={() => this.passRef.focus()}
                    returnKeyType="next"
                    value={this.state.emailTxtField}
                    style={{
                      width: '100%',
                      minHeight: DIMENS.px_45,
                      maxHeight: DIMENS.px_50,
                      color: colors.black,
                      backgroundColor: colors.transparent,
                      marginLeft: DIMENS.px_10,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: DIMENS.px_1,
                    backgroundColor: colors.color_accent_dark
                  }}
                />
              </View>
              {/* Password */}
              <View style={{
                width: '100%',
                marginTop: DIMENS.px_30
              }}>
                <Text style={{
                  color: colors.color_accent_dark,
                  fontSize: DIMENS.txt_size_medium_14,
                  fontFamily: FONT_FAMILIY.Font_Regular,
                  textAlign: 'center'
                }}>
                  {translate('PLACEHOLDER_PASSWRD')}</Text>
                <View style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <IconX
                    origin={ICON_TYPE.SIMPLE_LINE_ICON}
                    name='lock'
                    color={colors.black}
                    size={22}
                  />
                  <TextInput
                    secureTextEntry={true}
                    placeholder={translate('PLACEHOLDER_PASSWRD')}
                    placeholderTextColor={colors.black}
                    keyboardType={'default'}
                    ref={(refs) => this.passRef = refs}
                    onChangeText={(txt) => {
                      this.setState({ passTxtField: txt })
                    }}
                    returnKeyType="done"
                    value={this.state.passTxtField}
                    style={{
                      width: '100%',
                      minHeight: DIMENS.px_45,
                      maxHeight: DIMENS.px_50,
                      color: colors.black,
                      backgroundColor: colors.transparent,
                      marginLeft: DIMENS.px_10
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: DIMENS.px_1,
                    backgroundColor: colors.color_accent_dark
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: DIMENS.px_20,
                  width: '100%',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                {/* Remember me */}
                <Ripple
                  onPress={() => {
                    alert('click forgot')
                  }}>
                  <Text style={{
                    color: colors.color_accent_dark,
                    fontSize: DIMENS.txt_size_medium_14,
                    fontFamily: FONT_FAMILIY.Font_Light,
                    textAlign: 'right'
                  }}>
                    {translate('FORGOT_PASS')}</Text>
                </Ripple>
              </View>

              <Ripple style={{
                width: '100%',
                marginTop: DIMENS.px_40,
                backgroundColor: colors.white,
                borderRadius: DIMENS.px_2,
                borderWidth: DIMENS.px_2,
                borderColor: colors.color_acent_green_dark
              }}
                disabled={false}
                onPress={() => {
                  NavigationService.navigate({ routeName: 'Drawer', params: { param: {} }, });
                }}>
                {
                  <Text style={{
                    color: colors.color_acent_green_dark,
                    fontFamily: FONT_FAMILIY.Font_Regular,
                    fontSize: DIMENS.txt_size_large_extra,
                    padding: DIMENS.px_10,
                    textAlign: 'center'
                  }}>
                    {translate('SIGN_IN')}
                  </Text>
                }
              </Ripple>

              <View style={{
                flexDirection: 'row',
                marginTop: DIMENS.px_20,
                width: '100%',
                justifyContent: 'center'
              }}>
                <Image
                  style={{
                    width: DIMENS.px_40,
                    height: DIMENS.px_40
                  }}
                  source={FACEBOOK}
                  resizeMode={'contain'}
                />
                <Image
                  style={{
                    width: DIMENS.px_40,
                    height: DIMENS.px_40,
                    marginLeft: DIMENS.px_10
                  }}
                  source={FACEBOOK}
                  resizeMode={'contain'}
                />
              </View>
              <View style={{
                flexDirection: 'row',
                marginTop: DIMENS.px_40,
                width: '100%',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: colors.black,
                  fontSize: DIMENS.txt_size_medium_14,
                  fontFamily: FONT_FAMILIY.Font_Regular
                }}>
                  {translate('NEW_USER')}</Text>
                <Ripple
                  onPress={() => {
                    NavigationService.navigate({ routeName: SCREEN.SIGNUP })
                  }}>
                  <Text style={{
                    marginLeft: DIMENS.px_5,
                    color: colors.black_dark,
                    fontSize: DIMENS.txt_size_medium_14,
                    fontFamily: FONT_FAMILIY.Font_Bold
                  }}>
                    {translate('SIGN_UP')}</Text>
                </Ripple>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }

}






// <Ripple
//                 onPress={() => {
//                   this.setState({
//                     isSelectRememberMe: !this.state.isSelectRememberMe
//                   })
//                 }}
//                 style={{
//                   width: '50%',
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'flex-start',
//                 }}>
//                 <View
//                   style={{
//                     alignItems: 'flex-start',
//                   }}>
//                   {this.state.isSelectRememberMe ?
//                     <Icon name={'ios-checkbox'} size={22} color={colors.white} /> :
//                     <Icon name={'ios-checkbox-outline'} size={22} color={colors.white} />
//                   }
//                 </View>
//                 <Text style={{
//                   color: colors.white,
//                   fontSize: DIMENS.txt_size_medium,
//                   fontFamily: FONT_FAMILIY.Font_Light,
//                   marginLeft: DIMENS.px_5
//                 }}>
//                   {translate('REMEMBER_ME')}</Text>
//               </Ripple>