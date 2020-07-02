import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text, Image,
  TouchableOpacity,
  View, Dimensions, TextInput
} from 'react-native'
import { Form, Field } from 'react-final-form'
import Ripple from 'react-native-material-ripple';


import FormTextInput from '../FormTextInput'
import HeaderButton from '../HeaderButton'
import { showError } from '../../NotificationService'
import styles from './styles'
import { colors } from '../../theme'
import { LOGO } from '../../images'
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
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends React.PureComponent {


  constructor(props) {
    super(props)
    this.passRef = undefined;
    this.state = {
      emailTxtField: 'admin@gmail.com',
      passTxtField: '123123',
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

        }else if (!response.IsKycComplete) {
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
      <View style={{
        backgroundColor: colors.black,
        flex: 1,
        width: '100%',
      }}>
        <View style={{
          flex: 1,
          width: WIDTH,
          padding: DIMENS.px_20,
        }}>

          <View
            style={{
              flex: .4,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image source={LOGO}
              style={{
                resizeMode: 'contain', width: DIMENS.px_120,
                height: DIMENS.px_120, marginTop: DIMENS.px_25
              }} />
          </View>

          <View
            style={{
              flex: .6,
              alignItems: 'center'
            }}>
            {/* Mobile Number */}
            <View style={{
              width: '100%',
            }}>
              <TextInput
                placeholder={translate('PLACEHOLDER_EMAIL_ID')}
                placeholderTextColor={colors.white}
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
                  color: colors.white,
                  backgroundColor: colors.transparent,
                }}
              />
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

              <TextInput
                secureTextEntry={true}
                placeholder={translate('PASSWORD')}
                placeholderTextColor={colors.white}
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
                  color: colors.white,
                  backgroundColor: colors.transparent,
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: DIMENS.px_1,
                  backgroundColor: colors.color_accent_dark
                }}
              />
            </View>

            <View style={{
              flexDirection:'row',
              marginTop: DIMENS.px_20,
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              {/* Remember me */}
              <Ripple
                onPress={() => {
                  this.setState({
                    isSelectRememberMe: !this.state.isSelectRememberMe
                  })
                }}
                style={{
                  width:'50%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent:'flex-start',
                }}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  {this.state.isSelectRememberMe ?
                    <Icon name={'ios-checkbox'} size={22} color={colors.white} /> :
                    <Icon name={'ios-checkbox-outline'} size={22} color={colors.white} />
                  }
                </View>
                <Text style={{
                  color: colors.white,
                  fontSize: DIMENS.txt_size_medium,
                  fontFamily: FONT_FAMILIY.Font_Light,
                  marginLeft: DIMENS.px_5
                }}>
                  {translate('REMEMBER_ME')}</Text>
              </Ripple>
              <Text style={{
                width:'50%',
                color: colors.yellow,
                fontSize: DIMENS.txt_size_medium_14,
                fontFamily: FONT_FAMILIY.Font_Light,
                textAlign:'right'
              }}>
                {translate('FORGOT_PASS')}</Text>
            </View>

            <Ripple style={{
              width: '100%',
              marginTop: DIMENS.px_40,
              backgroundColor: colors.white,
              borderRadius:DIMENS.px_2,
              borderWidth:DIMENS.px_2,
              borderColor:colors.color_acent_green
            }}
              disabled={false}
              onPress={() => {
                NavigationService.navigate({ routeName: 'Drawer', params: { param: {} }, });
              }}>
              {
                <Text style={{ color: colors.color_acent_green, fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_15, textAlign: 'center' }}>
                  {translate('LOGIN_TITLE')}
                </Text>
              }
            </Ripple>

            <View style={{
              flexDirection: 'row',
              marginTop: DIMENS.px_40,
              width: '100%',
              justifyContent: 'center'
            }}>
              <Text style={{
                color: colors.white,
                fontSize: DIMENS.txt_size_medium_14,
                fontFamily: FONT_FAMILIY.Font_Regular
              }}>
                {translate('DONT_HAVE_ACOUNT')}</Text>
              <Ripple
                onPress={() => {
                  NavigationService.navigate({ routeName: SCREEN.SIGNUP })
                }}>
                <Text style={{
                  marginLeft: DIMENS.px_5,
                  color: colors.yellow,
                  fontSize: DIMENS.txt_size_medium_14,
                  fontFamily: FONT_FAMILIY.Font_Medium
                }}>
                  {translate('SIGN_UP')}</Text>
              </Ripple>
            </View>
          </View>
        </View>
      </View>
    )
  }

}