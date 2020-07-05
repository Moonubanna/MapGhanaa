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
import styles from '../Auth/styles'
import { colors } from '../../theme';
import { IC_ALL_, AVTAR, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, IC_ALL_INDIVIDUALS_ } from '../../images'
import CommonHeaderHome from '../../common/CommonHeaderHome'
import translate from '../../i18n/i18n';
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import { storeData, retrieveData, clearData } from '../../common/AsyncStorage'
import Loader from '../../common/Loader'
import NavigationService from '../../NavigationService';
import { element } from 'prop-types';
import * as Utils from '../../utility/Utils'
import ActionSheet from 'react-native-actionsheet'

//Library
import Orientation from 'react-native-orientation';
import Ripple from 'react-native-material-ripple';
import Modal from 'react-native-modal'
import CardView from 'react-native-cardview'
import moment from 'moment';
import MarqueeText from 'react-native-marquee';
import { IconX, ICON_TYPE } from '../../utility/Icons';

const { height, width } = Dimensions.get('screen')
import StarRating from 'react-native-star-rating';


//Icons
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const cityArray = [
    'jaipur', 'ajmer', 'nagaur'
]


export default class Service extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
        }
    }
    componentDidMount() {
        console.log('componentDidMount of Service screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of Service screen')
    }


    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    render() {
        const { data, loading } = this.props

        return (
            <View style={{
                backgroundColor: colors.grey200,
                flex: 1, width: '100%',
            }}>
                <CommonHeaderHome
                    backPress={() => this.onBackPress()}
                    isBack={true}
                    size={12}
                    isRightIcon={false}
                    isRightNoti={false}
                    header={translate('SERVICE')} />

                <ScrollView style={{
                    flex: 1, padding: DIMENS.px_10
                }}>

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            textAlign: 'left',
                            marginTop: 10, color: 'black'
                        }}
                    >{translate('TARGET')}</Text>

                    <TextInput
                        placeholderTextColor={colors.grey400}
                        keyboardType={'default'}
                        ref={(refs) => this.passRef = refs}
                        // onChangeText={(txt) => {
                        //     this.setState({ passTxtField: txt })
                        // }}
                        returnKeyType="done"
                        value={this.state.passTxtField}
                        style={{
                            width: '100%',
                            paddingLeft: 10,
                            marginTop: 10,
                            minHeight: DIMENS.px_45,
                            maxHeight: DIMENS.px_45,
                            color: colors.black,
                            borderWidth: 1,
                            borderRadius: 3,

                        }}
                    />

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            textAlign: 'left',
                            marginTop: 10, color: 'black'
                        }}
                    >{translate('TYPE')}</Text>

                    <Ripple
                        onPress={() => {
                            //     this.ActionSheet.show()

                        }}
                        style={{
                            flex: 7.5, display: 'flex',
                            flexDirection: 'row', justifyContent: 'space-between',
                            paddingHorizontal: 10,
                            borderWidth: 1, borderRadius: 3,
                            alignItems: 'center', minHeight: DIMENS.px_45,
                            maxHeight: DIMENS.px_45, marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Light,
                                paddingLeft: 0
                            }}
                        ></Text>
                        <IconX
                            origin={ICON_TYPE.SIMPLE_LINE_ICON}
                            name='arrow-down'
                            color={colors.black}
                            size={18}
                        />

                    </Ripple>

                    <View style={{
                        display: 'flex', flexDirection: 'row',
                    }}>


                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                borderRadius: 4,
                                textAlign: 'left',
                                marginTop: 10, color: 'black'
                            }}
                        >{translate('NOTES')}</Text>


                    </View>
                    <TextInput
                        placeholderTextColor={colors.grey400}
                        keyboardType={'default'}
                        ref={(refs) => this.passRef = refs}
                        // onChangeText={(txt) => {
                        //     this.setState({ passTxtField: txt })
                        // }}
                        returnKeyType="done"
                        value={this.state.passTxtField}
                        style={{
                            width: '100%',
                            paddingLeft: 10,
                            marginTop: 10,
                            minHeight: DIMENS.px_100,
                            maxHeight: DIMENS.px_45,
                            color: colors.black,
                            borderWidth: 1,
                            borderRadius: 3,

                        }}
                    />


                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            textAlign: 'left',
                            marginTop: 10, color: 'black'
                        }}
                    >{translate('AMMOUNT')}</Text>

                    <TextInput
                        placeholderTextColor={colors.grey400}
                        keyboardType={'default'}
                        ref={(refs) => this.passRef = refs}
                        // onChangeText={(txt) => {
                        //     this.setState({ passTxtField: txt })
                        // }}
                        returnKeyType="done"
                        value={this.state.passTxtField}
                        style={{
                            width: '100%',
                            paddingLeft: 10,
                            marginTop: 10,
                            minHeight: DIMENS.px_45,
                            maxHeight: DIMENS.px_45,
                            color: colors.black,
                            borderWidth: 1,
                            borderRadius: 3,

                        }}
                    />

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            textAlign: 'left',
                            marginTop: 10, color: 'black'
                        }}
                    >{translate('LINK_OP')}</Text>

                    <TextInput
                        placeholderTextColor={colors.grey400}
                        keyboardType={'default'}
                        ref={(refs) => this.passRef = refs}
                        // onChangeText={(txt) => {
                        //     this.setState({ passTxtField: txt })
                        // }}
                        returnKeyType="done"
                        value={this.state.passTxtField}
                        style={{
                            width: '100%',
                            paddingLeft: 10,
                            marginTop: 10,
                            minHeight: DIMENS.px_45,
                            maxHeight: DIMENS.px_45,
                            color: colors.black,
                            borderWidth: 1,
                            borderRadius: 3,

                        }}
                    />

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            textAlign: 'left',
                            marginTop: 10, color: 'black'
                        }}
                    >{translate('MEDIA')}</Text>


                    <View style={{ display: 'flex', borderRadius: 3, marginTop: 5, padding: 30, backgroundColor: colors.green600, justifyContent: 'center', alignItems: 'center' }}>
                        <IconX
                            origin={ICON_TYPE.ANT_ICON}
                            name='camera'
                            color={colors.white}
                            size={22}
                        />

                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                borderRadius: 4,
                                textAlign: 'left',
                                marginTop: 10, color: 'white'
                            }}
                        >{translate('UPLOAD_IMAGE')}</Text>
                    </View>



                    <Ripple style={{
                        width: '60%',
                        alignSelf: 'center',
                        marginTop: DIMENS.px_20,
                        backgroundColor: colors.yellow600,
                        borderRadius: DIMENS.px_5,
                        justifyContent: 'center'

                    }}
                        disabled={false}
                        onPress={() => {
                            // this.props.navigation.navigate('OrganisationDetail')

                        }}>
                        {
                            <Text style={{ color: colors.black, fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('SUBMIT')}
                            </Text>
                        }
                    </Ripple>



                    <View style={{ height: 15 }}></View>

                </ScrollView>

                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}

const RenderBottomBar = (item, index) => {
    console.log('item  ', item)
    return (
        <Ripple style={{
            display: 'flex', alignItems: 'center',
            padding: DIMENS.px_10,
            flexDirection: 'row'
        }}>
            <View style={{ display: 'flex', backgroundColor: colors.green800, padding: DIMENS.px_14, borderRadius: 3 }}>
                <IconX
                    origin={ICON_TYPE.FONT_AWESOME}
                    name='user'
                    color={colors.black}
                    size={25}
                />
            </View>
            <View
                style={{ marginLeft: DIMENS.px_20 }}
            >

                <Text style={{
                    color: colors.black,
                    fontFamily: FONT_FAMILIY.Font_Bold,
                    fontSize: 14, marginTop: 3
                }}>
                    {item.name}
                </Text>


                <Text style={{
                    color: colors.grey600,
                    fontFamily: FONT_FAMILIY.Font_Regular,
                    fontSize: 12, marginTop: 3
                }}>
                    {item.desc}
                </Text>
            </View>


        </Ripple>
    )
}