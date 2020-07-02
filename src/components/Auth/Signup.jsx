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
import * as Utils from '../../utility/Utils'
import Loader from '../../common/Loader'
import { storeData, retrieveData } from '../../common/AsyncStorage'
import CommonAddressView from '../../common/CommonAddressView';

//Library
import Orientation from 'react-native-orientation';

export default class Signup extends React.PureComponent {


    constructor(props) {
        super(props)
        this.passRef = undefined;
        this.state = {
            firstNameTxtField: '',
            lastNameTxtField: '',
            emailTxtField: '',
            createPassTxtField: '',
            confirmPassTxtField: '',
        }
    }

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    callIndividualDuplicateEmail = () => {

        if (Utils.isValidFirstName(this.state.firstNameTxtField, true) &&
            Utils.isValidLastName(this.state.lastNameTxtField, true) &&
            Utils.isValidEmail(this.state.emailTxtField, true) &&
            Utils.isValidNewPassword(this.state.createPassTxtField, true) &&
            Utils.isValidConfirmPassword(this.state.createPassTxtField, this.state.confirmPassTxtField, true)) {
            let requestData = {
                Email: this.state.emailTxtField
            }
            let signupFullObj = {
                first_name: this.state.firstNameTxtField,
                last_name: this.state.lastNameTxtField,
                email: this.state.emailTxtField,
                create_password: this.state.createPassTxtField,
                confirm_password: this.state.confirmPassTxtField
            }
            this.props.requestSignUpIndiDuplicateEmail(requestData).then(result => {
                this.responseIndiDuplicateEmail(result, signupFullObj)
            })
        }
    }

    responseIndiDuplicateEmail = (response, signupFullObj) => {

        if (response != undefined) {
            if (response.Status === KEY.SUCCESS_) {
                //NavigationService.navigate({ routeName: SCREEN.SIGNUP_ADDRESS, params: { param: signupFullObj }, });
            } else if (response.Status == KEY.FAILED_) {
                showErrorToast(response.Message)
            }
        }
    }

    render() {
        const { loading } = this.props

        return (
            <View style={{
                backgroundColor: colors.black,
                flex: 1,
                width: '100%',
            }}>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        width: WIDTH,
                        padding: DIMENS.px_20,
                    }}>

                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: DIMENS.px_25
                            }}>
                            <Image source={LOGO}
                                style={{
                                    resizeMode: 'contain',
                                    width: DIMENS.px_120,
                                    height: DIMENS.px_120,
                                }} />

                            <Text style={{
                                color: colors.white,
                                fontSize: DIMENS.txt_size_large_extra,
                                fontFamily: FONT_FAMILIY.Font_Bold,
                                marginTop: DIMENS.px_20
                            }}>
                                {translate('SIGNUP_FOR_INDIVIDUAL_ACCOUNT')}</Text>
                            <Text style={{
                                color: colors.white,
                                fontSize: DIMENS.txt_size_medium,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                marginTop: DIMENS.px_20
                            }}>
                               ENTER EMAIL TO SIGNUP</Text>
                        </View>

                        <View
                            style={{
                                alignItems: 'center'
                            }}>
                            {/* First Name */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_25
                            }}>

                                <TextInput
                                    placeholder={'First Name'}
                                    placeholderTextColor={colors.white}
                                    keyboardType={'default'}
                                    onChangeText={(txt) => {
                                        this.setState({ firstNameTxtField: txt })
                                    }}
                                    onSubmitEditing={() => this.lastNameRef.focus()}
                                    returnKeyType="next"
                                    value={this.state.firstNameTxtField}
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
                                        backgroundColor: colors.white
                                    }}
                                />
                            </View>

                            {/* Last Name */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_25
                            }}>

                                <TextInput
                                    placeholder={'Last Name'}
                                    placeholderTextColor={colors.white}
                                    keyboardType={'default'}
                                    ref={(refs) => this.lastNameRef = refs}
                                    onChangeText={(txt) => {
                                        this.setState({ lastNameTxtField: txt })
                                    }}
                                    onSubmitEditing={() => this.emailRef.focus()}
                                    returnKeyType="next"
                                    value={this.state.lastNameTxtField}
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
                                        backgroundColor: colors.white
                                    }}
                                />
                            </View>

                            {/* Email */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_25
                            }}>

                                <TextInput
                                    placeholder={translate('PLACEHOLDER_EMAIL_ID')}
                                    placeholderTextColor={colors.white}
                                    keyboardType={'email-address'}
                                    ref={(refs) => this.emailRef = refs}
                                    onChangeText={(txt) => {
                                        this.setState({ emailTxtField: txt })
                                    }}
                                    onSubmitEditing={() => this.createPassRef.focus()}
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
                                        backgroundColor: colors.white
                                    }}
                                />
                            </View>
                            {/* Create Password */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>

                                <TextInput
                                    secureTextEntry={true}
                                    placeholder={translate('PLACEHOLDER_CREATE_PASSWRD')}
                                    placeholderTextColor={colors.white}
                                    keyboardType={'default'}
                                    ref={(refs) => this.createPassRef = refs}
                                    onChangeText={(txt) => {
                                        this.setState({ createPassTxtField: txt })
                                    }}
                                    onSubmitEditing={() => this.confirmPassRef.focus()}
                                    returnKeyType="next"
                                    value={this.state.createPassTxtField}
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
                                        backgroundColor: colors.white
                                    }}
                                />
                            </View>
                            {/* Password */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>

                                <TextInput
                                    secureTextEntry={true}
                                    placeholder={translate('PLACEHOLDER_CONFIRM_PASSWRD')}
                                    placeholderTextColor={colors.white}
                                    keyboardType={'default'}
                                    ref={(refs) => this.confirmPassRef = refs}
                                    onChangeText={(txt) => {
                                        this.setState({ confirmPassTxtField: txt })
                                    }}
                                    returnKeyType="done"
                                    value={this.state.confirmPassTxtField}
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
                                        backgroundColor: colors.white
                                    }}
                                />
                            </View>

                            <Ripple style={{
                                width: '100%',
                                marginTop: DIMENS.px_25,
                                backgroundColor:
                                    this.state.firstNameTxtField != '' &&
                                        this.state.lastNameTxtField != '' &&
                                        this.state.emailTxtField != '' &&
                                        this.state.mobileTxtField != '' &&
                                        this.state.createPassTxtField != '' &&
                                        this.state.confirmPassTxtField != ''
                                        ? colors.color_accent_dark : colors.light_theme
                            }}
                                disabled={
                                    this.state.firstNameTxtField != '' &&
                                        this.state.lastNameTxtField != '' &&
                                        this.state.emailTxtField != '' &&
                                        this.state.mobileTxtField != '' &&
                                        this.state.createPassTxtField != '' &&
                                        this.state.confirmPassTxtField != ''
                                        ? false : true}
                                onPress={() => {
                                    this.callIndividualDuplicateEmail()
                                }}>
                                {!loading ?
                                    <Text style={{ color: colors.white, fontWeight: 'bold', padding: DIMENS.px_15, textAlign: 'center' }}>
                                        {translate('NEXT')}
                                    </Text> :
                                    <ActivityIndicator color={colors.white} size={35} style={{ padding: 10 }} />
                                }
                            </Ripple>

                            <View style={{
                                flexDirection: 'row',
                                marginTop: DIMENS.px_25,
                                width: '100%',
                                justifyContent: 'center',
                                marginBottom: DIMENS.px_20
                            }}>
                                <Text style={{
                                    color: colors.white,
                                    fontSize: DIMENS.txt_size_medium_14,
                                    fontFamily: FONT_FAMILIY.Font_Regular
                                }}>
                                    {translate('ALREADY_HAVE_ACOUNT')}</Text>
                                <Ripple
                                    onPress={() => {
                                        NavigationService.clearStack(SCREEN.LOGIN);
                                        //this.onBackPress()
                                    }}>
                                    <Text style={{
                                        marginLeft: DIMENS.px_5,
                                        color: colors.yellow,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        fontFamily: FONT_FAMILIY.Font_Medium
                                    }}>
                                        {translate('SIGN_IN')}</Text>
                                </Ripple>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}