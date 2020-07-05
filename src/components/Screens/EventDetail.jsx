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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { IC_ALL_, AVTAR, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, RIGHT_GREEN, IC_ALL_INDIVIDUALS_, IC_GAL_ } from '../../images'
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

const BottomBarData = [
    {
        image: AVTAR,
        'name': 'Category name',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'Category name',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'Category name',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'Category name',
        ratting: '3.2',
        desc: 'Description'
    },

]


export default class EventDetail extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
            bottomBarData: BottomBarData
        }
    }
    componentDidMount() {
        console.log('componentDidMount of EventDetail screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of EventDetail screen')
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%', alignItems: 'center',
                    backgroundColor: colors.grey500,
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
                    isRightNoti={true}
                    header={translate('EVENT')} />

                <View style={{
                    flex: 1, margin: DIMENS.px_15
                }}>

                    <View style={{ flex: 1, backgroundColor: 'white', elevation: 0.5, padding: 10 }}>

                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                borderRadius: 4,
                                fontWeight: 'bold',
                                color: 'black',
                            }}
                        >Landungsari Music Festival</Text>

                        <View style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5, flexDirection: 'row', alignItems: 'center', }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                <Image
                                    source={RIGHT_GREEN}
                                    resizeMode='center'
                                    style={{ height: DIMENS.px_15, width: DIMENS.px_15 }} />

                                <Image
                                    source={RIGHT_GREEN}
                                    resizeMode='center'
                                    style={{ height: DIMENS.px_15, marginLeft: 5, width: DIMENS.px_15 }} />
                                <Image
                                    source={RIGHT_GREEN}
                                    resizeMode='center'
                                    style={{ height: DIMENS.px_15, marginLeft: 5, width: DIMENS.px_15 }} />
                                <Image
                                    source={RIGHT_GREEN}
                                    resizeMode='center'
                                    style={{ height: DIMENS.px_15, marginLeft: 5, width: DIMENS.px_15 }} />
                            </View>

                            <View style={{ display: 'flex' }}>
                            <IconX
                                    origin={ICON_TYPE.FONTISTO}
                                    name='favorite'
                                    color={colors.black}
                                    size={22}
                                    paddingLeft={10}
                                />

                            </View>
                        </View>

                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                borderRadius: 4,
                                color: colors.grey500, fontSize: 12
                            }}
                        >Landungsari - 15 Feb 2018</Text>

                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular, marginTop: 5, justifyContent: 'center',
                                borderRadius: 2, backgroundColor: colors.blue100, alignSelf: 'flex-start',
                                color: 'black', fontSize: 10, textAlign: 'center', padding: 5, marginRight: 10
                            }}
                        >Music</Text>

                        <Image
                            source={IC_GAL_}
                            style={{ flex: 1, width: '100%', height: 150, maxHeight: 150, marginTop: 10 }}
                            resizeMode="cover"
                        />

                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                borderRadius: 4, fontWeight: 'bold',
                                color: colors.green700, marginTop: 10,
                            }}
                        >{translate('DETAIL_EVENT')}</Text>


                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>

                            <View
                                style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize:DIMENS.txt_size_small_12,
                                        borderRadius: 4,
                                        color: colors.grey600, 
                                        marginTop: 10, 
                                        fontSize: 12
                                    }}
                                >{translate('START')}</Text>

                                <Text
                                    style={{
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize:DIMENS.txt_size_small_12,
                                        borderRadius: 4, 
                                        color: colors.grey600, 
                                        marginTop: 2,
                                    }}
                                >09:00 - 00:00 WIB</Text>

                            </View>
                            <View
                                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{
                                    height: DIMENS.px_30, width: DIMENS.px_30, borderRadius: 15,
                                }}
                                    source={IC_GAL_} />

                                <Image style={{
                                    height: DIMENS.px_30, width: DIMENS.px_30, borderRadius: 15, right: 5
                                }}
                                    source={IC_GAL_} />
                                <Image style={{
                                    height: DIMENS.px_30, width: DIMENS.px_30, borderRadius: 15, right: 5
                                }}
                                    source={IC_GAL_} />

                                <Text
                                    style={{
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        borderRadius: 4, fontSize: 10,
                                        color: colors.grey600, marginTop: 2,
                                    }}
                                >+200 People</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, height: 100, maxHeight: 150, marginTop: 5 }}>
                            <MapView
                                style={{ flex: 1, height: 200, maxHeight: 250 }}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                customMapStyle={{ flex: 1 }}
                            />

                            <View style={{flex:1,width:'100%', position: 'absolute', bottom: 0,backgroundColor:colors.grey200,
                             justifyContent:'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <Text
                                    style={{
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        borderRadius: 4, fontSize: 12,
                                        color: colors.black, flex:8
                                    }}
                                >Lapangan Tirto Utomo, Landungsari Malang</Text>

                                <Ripple style={{
                                    width: DIMENS.px_50,
                                    height:DIMENS.px_30,
                                    margin:DIMENS.px_10,
                                    backgroundColor: colors.yellow600,
                                    borderRadius: DIMENS.px_10,
                                    justifyContent: 'center', alignItems: 'center'

                                }}
                                    disabled={false}
                                    onPress={() => {
                                    }}>
                                    {
                                        <IconX
                                            origin={ICON_TYPE.FEATHER_ICONS}
                                            name='send'
                                            color={colors.black}
                                            size={18}
                                        />
                                    }
                                </Ripple>

                            </View>

                        </View>
                    </View>

                    <Ripple style={{
                        width: '85%',
                        alignSelf: 'center',
                        backgroundColor: colors.yellow600,
                        borderRadius: DIMENS.px_5,
                        marginTop:5

                    }}
                        disabled={false}
                        onPress={() => {
                          //  this.props.navigation.navigate('OrganisationDetail')

                        }}>
                        {
                            <Text style={{ color: colors.black, fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('JOIN_EVENT')}
                            </Text>
                        }
                    </Ripple>
                    <Ripple style={{
                        width: '85%',
                        alignSelf: 'center',
                        marginTop: DIMENS.px_10,
                        backgroundColor: colors.yellow600,
                        borderRadius: DIMENS.px_5,

                    }}
                        disabled={false}
                        onPress={() => {
                           // this.props.navigation.navigate('OrganisationDetail')

                        }}>
                        {
                            <Text style={{ color: colors.black, fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('BUY_TICKET')}
                            </Text>
                        }
                    </Ripple>

                </View>




                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}
