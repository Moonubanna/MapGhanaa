import React from 'react'
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text, Image,
    TouchableOpacity, FlatList,
    View, Dimensions, TextInput, DeviceEventEmitter, TouchableHighlight
} from 'react-native'
import styles from '../Auth/styles'
import { colors } from '../../theme';
import { IC_ALL_, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, RIGHT_GREEN, IC_ALL_INDIVIDUALS_, LOGO_WIDTH, IC_GAL_ } from '../../images'
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
//Icons
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const cityArray = [
    'jaipur', 'ajmer', 'nagaur'
]

const BottomBarData = [
    {
        id: 1,
        image: IC_ALL_,
        name: translate('ALL_ORGANISATION_')
    },
    {
        id: 2,
        image: IC_POPULAR_,
        name: translate('POPULAR_ORGANISATION_')
    },
    {
        id: 3,
        image: IC_POPULAR_INDIVIDUALS_,
        name: translate('POPULAR_INDIVISUALS_')
    },
    {
        id: 4,
        image: IC_ALL_INDIVIDUALS_,
        name: translate('ALL_INDIVIDUALS_')
    },
    {
        id: 4,
        image: IC_ALL_INDIVIDUALS_,
        name: translate('ALL_INDIVIDUALS_')

    },
    {
        id: 4,
        image: IC_ALL_INDIVIDUALS_,
        name: translate('ALL_INDIVIDUALS_')

    },
    {
        id: 4,
        image: IC_ALL_INDIVIDUALS_,
        name: translate('ALL_INDIVIDUALS_')

    },
    {
        id: 4,
        image: IC_ALL_INDIVIDUALS_,
        name: translate('ALL_INDIVIDUALS_')
    }
]

export default class EventList extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
            bottomBarData: BottomBarData,
            modalVisible: false

        }
    }
    componentDidMount() {
        console.log('componentDidMount of EventList screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of EventList screen')
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 40, marginVertical: 10,
                    width: 1, alignItems: 'center',
                    backgroundColor: colors.black,
                }}
            />
        );
    }

    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    render() {
        const { data, loading } = this.props
        const { modalVisible } = this.state;
        return (
            <View style={{
                backgroundColor: colors.white,
                flex: 1, width: '100%', height: '100%'
            }}>
                <CommonHeaderHome
                    backPress={() => this.onBackPress()}
                    isBack={true}
                    isRightIcon={true}
                    isRightPlusButton={true}
                    onPressPlusButton={() => {
                        NavigationService.navigate({ routeName: SCREEN.SCREEN_EVENTS, params: { param: {} }, });
                    }}
                    header={translate('EXPLORE_')} />

                <View style={{
                    flex: 1,
                }}>


                    <View style={{
                        backgroundColor: colors.yellow600, height: 160
                    }}>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                            <View style={{
                                flexDirection:'row',
                                width: '90%',
                                backgroundColor: colors.yellow400,
                                elevation: 0.5,
                                borderRadius: 3,
                                alignItems:'center',
                                paddingHorizontal: DIMENS.px_5,
                            }}>
                                <IconX
                                    origin={ICON_TYPE.ANT_ICON}
                                    name='search1'
                                    color={colors.black}
                                    size={28}
                                />
                                <TextInput
                                    placeholder={'Search For Anything...'}
                                    placeholderTextColor={colors.grey700}
                                    keyboardType={'default'}
                                    ref={(refs) => this.passRef = refs}
                                    // onChangeText={(txt) => {
                                    //     this.setState({ passTxtField: txt })
                                    // }}
                                    returnKeyType="done"
                                    value={this.state.passTxtField}
                                    style={{
                                        paddingLeft: DIMENS.px_5,
                                        marginRight:DIMENS.px_15,
                                        minHeight: DIMENS.px_45,
                                        maxHeight: DIMENS.px_50,
                                        color: colors.black,

                                    }}
                                />
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                <IconX
                                    origin={ICON_TYPE.ANT_ICON}
                                    name='calendar'
                                    color={colors.black}
                                    size={28}
                                    paddingLeft={10}
                                />

                            </View>


                        </View>


                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                            <Ripple
                                onPress={() => {
                                    // this.props.navigation.navigate('Indivisuals')
                                    // this.setState({ modalVisible: false })

                                }}
                                style={{

                                    borderRadius: DIMENS.px_2, justifyContent: 'center'

                                }}>
                                <Text
                                    style={{
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        paddingLeft: 0, borderRadius: 4,
                                        textAlign: 'left',
                                    }}
                                >{translate('NEW_RELEASE')}</Text>
                            </Ripple>

                            <Ripple
                                onPress={() => {
                                    // this.props.navigation.navigate('Indivisuals')
                                    // this.setState({ modalVisible: false })

                                }}

                                style={{
                                    paddingLeft: 10, padding: 8,
                                    marginTop: 8,
                                    borderRadius: DIMENS.px_2, justifyContent: 'center'

                                }}>
                                <Text
                                    style={{
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        paddingLeft: 0, borderRadius: 4,
                                        textAlign: 'left',

                                    }}
                                >{translate('SEE_ALL')}</Text>
                            </Ripple>

                        </View>

                    </View>

                    <View style={{ display: 'flex', bottom: DIMENS.px_30 }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            scrollEnabled={true}
                            data={this.state.bottomBarData}
                            renderItem={({ item, index }) => this.RenderEventHoriList(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={{ marginBottom: DIMENS.px_20,
                    marginTop:- DIMENS.px_20, }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={true}
                            data={this.state.bottomBarData}
                            renderItem={({ item, index }) => this.RenderEventVerticalList(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    </View>

                </View>

                {loading ?
                    <Loader /> : null}
            </View>
        )
    }


    RenderEventHoriList = (item, index) => {
        console.log('item  ', item)
        return (
            <Ripple
                style={{
                    display: 'flex',
                    backgroundColor: 'white', height: DIMENS.px_140, width: 120,
                    alignItems: 'center', margin: DIMENS.px_5, padding: DIMENS.px_5
                }}
                onPress={() => {
                    NavigationService.navigate({ routeName: SCREEN.SCREEN_EVENT_DETAIL, params: { param: {} }, });
                }}>

                <Text
                    style={{
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        textAlign: 'left',
                        fontSize: 10, fontWeight: 'bold'

                    }}
                >Student Football Turnament</Text>

                <Text
                    style={{
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        textAlign: 'left',
                        fontSize: 8

                    }}
                >Kota Malang . 02 Feb 2019</Text>
                <View style={{ display: 'flex' }}>
                    <Image source={IC_GAL_}
                        style={{ flex: 1, width: 120, marginTop: 5, top: 5 }}
                        resizeMode='cover'
                    />
                    <Text
                        style={{
                            position: 'absolute', bottom: 25, backgroundColor: colors.yellow600, margin: 10,
                            fontFamily: FONT_FAMILIY.Font_Regular, borderRadius: 5, alignSelf: 'center', padding: 5,
                            // textAlign: 'left',
                            fontSize: 7

                        }}
                    >Hightlights</Text>
                </View>



            </Ripple>
        )
    }

    RenderEventVerticalList = (item, index) => {
        console.log('item  ', item)
        return (
            <Ripple style={{
                display: 'flex',
                padding: DIMENS.px_10, flexDirection: 'row', alignItems: 'center',
                backgroundColor: 'white', elevation: 5, marginVertical: 5, borderRadius: 5
            }}
            onPress={()=>{
                NavigationService.navigate({ routeName: SCREEN.SCREEN_EVENT_DETAIL, params: { param: {} }, });
            }}>
                <Image
                    source={IC_GAL_}
                    style={{ height: 100, width: 100 }}
                    resizeMode='cover' />

                <View style={{ display: 'flex', alignSelf: 'flex-start' }}>

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            fontWeight: 'bold',
                            color: 'black', paddingLeft: 10
                        }}
                    >Food Competition</Text>
                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            color: colors.grey600, paddingLeft: 10
                        }}
                    >Kota Malang - 29 Jan 2019</Text>

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular, marginTop: 5, justifyContent: 'center', alignItems: 'center',
                            borderRadius: 2, backgroundColor: colors.blue100, marginHorizontal: 10, alignSelf: 'flex-start',
                            color: 'black', fontSize: 10, textAlign: 'center', padding: 5
                        }}
                    >Music</Text>
                </View>


            </Ripple>
        )
    }
}