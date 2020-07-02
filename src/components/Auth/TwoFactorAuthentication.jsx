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

export default class TwoFactorAuthentication extends React.PureComponent {
    constructor(props) {
        super(props)
        this.tempData = undefined;
        this.state = {
            codeTxtField: '',
            previousLoginObj: undefined,
            base64URLAuth: undefined,
            isTwoFactorRegisterApiCall:false
        }
    }
    componentDidMount() {
        console.log('componentDidMount TwoFactorAuthentication')
        Orientation.lockToPortrait();
        this.setState({
            previousLoginObj: this.props.navigation.state.params.param
        },()=>{
            this.callTwoFactorAuth(this.state.previousLoginObj)
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
        console.log('componentWillUnmount of TwoFactorAuthentication')
    }

    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    callTwoFactorAuth = (loginObj) => {
        let requestData = {

        }
        this.props.requestTwoFactorAuth(requestData, loginObj.Token).then(result => {
            this.responseTwoFactorAuth(result)
        })
    }

    responseTwoFactorAuth = (response) => {

        if (response != undefined) {
            //console.warn('rsponseTwoFact' + JSON.stringify(response))
            this.setState({
                base64URLAuth: response.TwoFactorImage
            })
        }
    }

    callTwoFactorVerify = (loginObj) => {

        if (Utils.isValidAuthCode(this.state.codeTxtField, true)) {
            let requestData = {
                UniquePassCode: this.state.codeTxtField
            }
            this.setState({
                isTwoFactorRegisterApiCall:true
            })
            this.props.requestTwoFactorVerify(requestData, loginObj.Token, this.state.codeTxtField).then(result => {
                this.setState({
                    isTwoFactorRegisterApiCall:false
                })
                this.responseTwoFactorVerify(result)
            })
        }
    }

    responseTwoFactorVerify = (response) => {

        if (response != undefined) {
            if (response.Status === KEY.SUCCESS_) {
                NavigationService.clearStack(SCREEN.LOGIN);
                //NavigationService.navigate({ routeName: SCREEN.KYC_VERIFICATION, params: { param: this.state.previousLoginObj }, });
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
                                width: DIMENS.px_80,
                                height: DIMENS.px_80,
                            }} />
                    </View>

                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: DIMENS.px_30
                        }}>
                        {this.state.base64URLAuth != undefined &&
                            <QRCode
                                value="2 Factor Authentication"
                                logo={{ uri: this.state.base64URLAuth }}
                                logoSize={100}
                                logoBackgroundColor='transparent'
                            />
                        }
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
                        {!this.state.isTwoFactorRegisterApiCall ?
                            <Text style={{ color: colors.white, fontWeight: 'bold', padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('REGISTER')}
                            </Text> :
                            <ActivityIndicator color={colors.white} size={35} style={{ padding: 10 }} />
                        }
                    </Ripple>
                </View>
                {loading && this.state.isTwoFactorRegisterApiCall == false ?
                    <Loader /> : null}
            </View>
        )
    }
}