import React from 'react'
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text, Image,
    TouchableOpacity, FlatList,
    View, Dimensions, TextInput, DeviceEventEmitter
} from 'react-native'
import Ripple from 'react-native-material-ripple';
import styles from '../Auth/styles'
import { colors } from '../../theme';
import { LOGO, QR_CODE } from '../../images'
import CommonHeaderHome from '../../common/CommonHeaderHome'
import translate from '../../i18n/i18n';
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import { storeData, retrieveData, clearData } from '../../common/AsyncStorage'
import { showInfoToast, showErrorToast } from '../../utility/Toast'
import { showMessage } from 'react-native-flash-message'
import * as Utils from '../../utility/Utils'
import Loader from '../../common/Loader'
import Modal from 'react-native-modal'
import NavigationService from '../../NavigationService';
import { element } from 'prop-types';
import { WebView } from 'react-native-webview';

//Library
import Orientation from 'react-native-orientation';
import QRCode from 'react-native-qrcode-svg';

export default class TwoFactorAuthLogin extends React.PureComponent {
    constructor(props) {
        super(props)
        this.tempData = undefined;
        this.state = {
            codeTxtField: '',
            previousLoginObj: undefined,
            base64URLAuth: undefined,
        }
    }
    componentDidMount() {
        console.log('componentDidMount TwoFactorAuthLogin')
        Orientation.lockToPortrait();
        this.setState({
            previousLoginObj: this.props.navigation.state.params.param
        })

        // this.setState({
        //     previousLoginObj:{
        //         "Status": "Success",
        //         "Message": "Successful Authentication.",
        //         "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImxvY2t5YmFubmExMjNAZ21haWwuY29tIiwibmJmIjoxNTkwNjg5NDY4LCJleHAiOjE1OTA2OTMwNjgsImlhdCI6MTU5MDY4OTQ2OH0.qJ2GeVu3IHPjFEDlnPZYMgknmpChiNlgWySm7gVXz7Y",
        //         "UserName": "lockybanna123@gmail.com",
        //         "Name": "Locky Banna",
        //         "ProfileImage": "https://testbucketdotnet.s3.amazonaws.com/",
        //         "AccountType": 1,
        //         "DefaultCurrency": "INR",
        //         "IsEmailVerfied": true,
        //         "IsKycComplete": false,
        //         "Is2FAActive": true
        //       }
        // }, () => {
        //     this.callTwoFactorAuth(this.state.previousLoginObj)
        // })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of TwoFactorAuthLogin')
    }

    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }
    callTwoFactorVerify = (loginObj) => {

        if (Utils.isValidAuthCode(this.state.codeTxtField, true)) {
            let requestData = {
                UniquePassCode: this.state.codeTxtField
            }
            this.props.requestTwoFactorLoginVerify(requestData, loginObj.Token, this.state.codeTxtField).then(result => {

                this.responseTwoFactorVerify(result)
                
            })
        }
    }

    responseTwoFactorVerify = (response) => {

        if (response != undefined) {
            if (response.Status === KEY.SUCCESS_) {
                //Save login user info into async storage
                storeData(KEY.USER_DATA,this.state.previousLoginObj)
                NavigationService.navigate({ routeName: 'Drawer', params: { param: this.state.previousLoginObj }, });
            } else if (response.Status == KEY.FAILED_) {
                showErrorToast(response.Message)
            }
        }
    }

    render() {
        const { data, loading } = this.props

        return (
            <View style={{
                backgroundColor: colors.lightGray,
                flex: 1, width: '100%',
            }}>
                <CommonHeaderHome
                    backPress={() => this.props.navigation.goBack()}
                    isBack={true}
                    header={translate('TWO_FACTOR_AUTH')} />

                <View style={{
                    flex: 1,
                    width: WIDTH,
                    padding: DIMENS.px_20,
                }}>

                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: DIMENS.px_10
                        }}>
                        <Image source={LOGO}
                            style={{
                                resizeMode: 'contain',
                                width: DIMENS.px_100,
                                height: DIMENS.px_100,
                            }} />
                    </View>

                    {/* Enter Code */}
                    <View style={{
                        flexDirection: 'column',
                        width: '100%',
                        marginTop: DIMENS.px_20,
                    }}>
                        <TextInput
                            placeholder={translate('PLACEHOLDER_ENTER_CODE')}
                            placeholderTextColor={colors.black}
                            keyboardType={'numeric'}
                            ref={(refs) => this.enterCodeRef = refs}
                            onChangeText={(txt) => {
                                this.setState({ codeTxtField: txt })
                            }}
                            returnKeyType="done"
                            value={this.state.codeTxtField}
                            style={{
                                width: '100%',
                                minHeight: DIMENS.px_40,
                                maxHeight: DIMENS.px_45,
                                color: colors.black,
                                backgroundColor: colors.white,
                                paddingHorizontal: DIMENS.px_10
                            }}
                        />
                        <View
                            style={{
                                width: '100%',
                                height: DIMENS.px_1,
                                backgroundColor: colors.white
                            }}
                        />
                    </View>
                    <Ripple style={{
                        width: '100%',
                        marginTop: DIMENS.px_25,
                        backgroundColor: colors.color_accent_dark
                    }}
                        onPress={() => {
                            this.callTwoFactorVerify(this.state.previousLoginObj)
                        }}>
                        {!loading ?
                            <Text style={{ color: colors.white, fontWeight: 'bold', padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('SUBMIT')}
                            </Text> :
                            <ActivityIndicator color={colors.white} size={35} style={{ padding: 10 }} />
                        }
                    </Ripple>
                </View>
            </View>
        )
    }
}