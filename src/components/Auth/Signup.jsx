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

export default class Signup extends React.PureComponent {


    constructor(props) {
        super(props)
        this.passRef = undefined;
        this.state = {
            userNameTxtField: '',
            passTxtField: '',
            confPassTxtField: '',
            fullNameTxtField: '',
            emailTxtField: '',
            phoneNoTxtField: '',
        }
    }

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    render() {
        const { loading } = this.props

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
                                }} />
                        </View>

                        <View
                            style={{
                                alignItems: 'center',
                            }}>
                            {/* User name */}
                            <View style={{
                                width: '100%',
                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_USER_NAME')}
                                        placeholderTextColor={colors.black}
                                        keyboardType={'default'}
                                        onChangeText={(txt) => {
                                            this.setState({ userNameTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.passRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.userNameTxtField}
                                        style={{
                                            width: '90%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.black_dark,
                                            backgroundColor: colors.transparent,
                                        }}
                                    />
                                    <IconX
                                        style={{
                                            marginLeft: DIMENS.px_5,
                                        }}
                                        origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                        name='user'
                                        color={colors.black}
                                        size={22}
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
                                marginTop: DIMENS.px_15
                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <TextInput
                                        secureTextEntry={true}
                                        placeholder={translate('PLACEHOLDER_PASSWRD')}
                                        placeholderTextColor={colors.black}
                                        keyboardType={'default'}
                                        ref={(refs) => this.passRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ passTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.confPassRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.passTxtField}
                                        style={{
                                            width: '90%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.black_dark,
                                            backgroundColor: colors.transparent,
                                        }}
                                    />
                                    <IconX
                                        style={{
                                            marginLeft: DIMENS.px_10
                                        }}
                                        origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                        name='lock'
                                        color={colors.black}
                                        size={22}
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

                            {/* Confirm password */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_CONFIRM_PASSWRD')}
                                        placeholderTextColor={colors.black}
                                        keyboardType={'default'}
                                        ref={(refs) => this.confPassRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ confPassTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.fullNameRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.confPassTxtField}
                                        style={{
                                            width: '90%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.black_dark,
                                            backgroundColor: colors.transparent,
                                        }}
                                    />
                                    <IconX
                                        style={{
                                            marginLeft: DIMENS.px_10
                                        }}
                                        origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                        name='lock'
                                        color={colors.black}
                                        size={22}
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

                            {/* Full name */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_FULL_NAME')}
                                        placeholderTextColor={colors.black}
                                        keyboardType={'default'}
                                        ref={(refs) => this.fullNameRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ fullNameTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.emailRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.fullNameTxtField}
                                        style={{
                                            width: '91%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.black_dark,
                                            backgroundColor: colors.transparent,
                                        }}
                                    />
                                    <IconX
                                        style={{
                                            marginLeft: DIMENS.px_5,
                                        }}
                                        origin={ICON_TYPE.FEATHER_ICONS}
                                        name='user'
                                        color={colors.black}
                                        size={22}
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


                            {/* Email */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_EMAIL_ID')}
                                        placeholderTextColor={colors.black}
                                        keyboardType={'email-address'}
                                        ref={(refs) => this.emailRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ emailTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.phoneNoRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.emailTxtField}
                                        style={{
                                            width: '91%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.black_dark,
                                            backgroundColor: colors.transparent,
                                        }}
                                    />
                                    <IconX
                                        style={{
                                            marginLeft: DIMENS.px_5,
                                        }}
                                        origin={ICON_TYPE.MATERIAL_ICONS}
                                        name='email'
                                        color={colors.black}
                                        size={22}
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

                            {/* Phone */}
                            <View style={{
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_PHONE_NO')}
                                        placeholderTextColor={colors.black}
                                        keyboardType={'phone-pad'}
                                        ref={(refs) => this.phoneNoRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ phoneNoTxtField: txt })
                                        }}
                                        returnKeyType="done"
                                        value={this.state.phoneNoTxtField}
                                        style={{
                                            width: '92%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.black_dark,
                                            backgroundColor: colors.transparent,
                                        }}
                                    />
                                    <IconX
                                        style={{
                                            marginLeft: DIMENS.px_5,
                                        }}
                                        origin={ICON_TYPE.FONT_AWESOME}
                                        name='phone'
                                        color={colors.black}
                                        size={22}
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

                            <Ripple style={{
                                width: '100%',
                                marginTop: DIMENS.px_40,
                                backgroundColor: colors.black,
                                borderRadius: DIMENS.px_2,
                                borderWidth: DIMENS.px_2,
                                borderColor: colors.black
                            }}
                                disabled={false}
                                onPress={() => {
                                    NavigationService.navigate({ routeName: 'Drawer', params: { param: {} }, });
                                }}>
                                {
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_large_extra,
                                        padding: DIMENS.px_10,
                                        textAlign: 'center'
                                    }}>
                                        {translate('SIGN_UP')}
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
                                    color: colors.black,
                                    fontSize: DIMENS.txt_size_medium_14,
                                    fontFamily: FONT_FAMILIY.Font_Regular
                                }}>
                                    {translate('EXISTING_USER')}</Text>
                                <Ripple
                                    onPress={() => {
                                        this.onBackPress()
                                    }}>
                                    <Text style={{
                                        marginLeft: DIMENS.px_5,
                                        color: colors.black_dark,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        fontFamily: FONT_FAMILIY.Font_Bold
                                    }}>
                                        {translate('SIGN_IN')}</Text>
                                </Ripple>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }

}
