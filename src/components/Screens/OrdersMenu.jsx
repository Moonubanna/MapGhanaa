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
import { color } from 'react-native-reanimated';

const cityArray = [
    'jaipur', 'ajmer', 'nagaur'
]

const BottomBarData = [
    {
        image: AVTAR,
        'name': 'Dead Drop',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'Zi Network',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'RELic',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'POWERLYNC',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'NODE',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'LOOTBOX',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'LOOTBOX',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'LOOTBOX',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: AVTAR,
        'name': 'LOOTBOX',
        ratting: '3.2',
        desc: 'Description'
    },
]



export default class OrdersMenu extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
            bottomBarData: BottomBarData
        }
    }
    componentDidMount() {
        console.log('componentDidMount of OrdersMenu screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of OrdersMenu screen')
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
                <View style={{ display: 'flex', padding: 15, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.yellow600 }}>
                    <Ripple style={{ alignItems: 'center', flex: 1 }}
                    onPress={()=>{
                        this.onBackPress()
                    }}>
                        <IconX
                            origin={ICON_TYPE.SIMPLE_LINE_ICON}
                            name='arrow-left'
                            color={colors.white}
                            size={18}
                        />
                    </Ripple>
                    <Text
                        style={{
                            flex: 7,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            textAlign: 'center', fontWeight: 'bold',
                            color: 'black', paddingLeft: 25
                        }}
                    >{translate('ORDER_MENU')}</Text>

                    <View
                        style={{ flexDirection: 'row', flex: 2, justifyContent: 'flex-end', }}>
                            <Ripple 
                            onPress={()=>{
                                NavigationService.navigate({ routeName: SCREEN.SCREEN_PURCHASE, params: { param: {} }, });
                            }}>
                        <IconX
                            origin={ICON_TYPE.ANT_ICON}
                            name='pluscircleo'
                            color={colors.black}
                            size={22}
                            style={{ marginLeft: DIMENS.px_8 }}
                        />
                        </Ripple>
                    </View>

                </View>

                <View style={{
                    flex: 1, padding: DIMENS.px_15
                }}>

                    <View style={{ flex: 1 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.bottomBarData}
                            renderItem={({ item, index }) => OrderListView(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            style={{}}
                            ItemSeparatorComponent={this.FlatListItemSeparator}

                        />
                    </View>

                </View>




                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}

const OrderListView = (item, index) => {
    console.log('item  ', item)
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                elevation: 0.5, marginVertical: 10
            }}>
                <View style={{ display: 'flex', flex: 2 }}>
                    <View style={{
                        padding: 10, borderRadius: 4, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: colors.grey500, borderWidth: 1, borderColor: colors.black_dark
                    }}>

                        <Text style={{
                            color: colors.white,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            padding: DIMENS.px_15, textAlign: 'center'
                        }}>
                            {translate('PICTURES')}
                        </Text>

                    </View>


                    <Text style={{
                        color: colors.black,
                        fontSize: 12, fontFamily: FONT_FAMILIY.Font_Bold,
                        padding: DIMENS.px_10, textAlign: 'center'
                    }}>
                        MGDO7980
                    </Text>
                </View>
                <View style={{ display: 'flex', flex: 2, marginLeft: 10 }}>

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                            color: colors.black,
                            fontWeight: 'bold'
                        }}
                    >{translate('SERVICE')}</Text>

                    <Text
                        multiline={true}
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            color: colors.black
                        }}
                    >Need painter to pain home</Text>

                </View>
                <View style={{ display: 'flex', flex: 2 }}>
                    <Ripple style={{
                        width: '80%',
                        alignSelf: 'center',
                        backgroundColor: colors.lightGreen800,
                        borderRadius: DIMENS.px_2,
                        justifyContent: 'center', borderRadius: 4

                    }}
                        disabled={false}
                        onPress={() => {
                            // this.props.navigation.navigate('OrganisationDetail')

                        }}>
                        {
                            <Text style={{
                                color: 'white', fontFamily: FONT_FAMILIY.Font_Bold,
                                fontSize: 12, padding: DIMENS.px_10, textAlign: 'center'
                            }}>
                                {translate('RELEASE')}
                            </Text>
                        }
                    </Ripple>
                    <Ripple style={{
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: DIMENS.px_20,
                        backgroundColor: colors.red700,
                        borderRadius: DIMENS.px_2,
                        justifyContent: 'center', borderRadius: 4

                    }}
                        disabled={false}
                        onPress={() => {
                            // this.props.navigation.navigate('OrganisationDetail')

                        }}>
                        {
                            <Text style={{
                                color: colors.white, fontSize: 12,
                                fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_10, textAlign: 'center'
                            }}>
                                {translate('DELETE')}
                            </Text>
                        }
                    </Ripple>
                </View>


            </View>
            <Text
                multiline={true}
                style={{
                    fontFamily: FONT_FAMILIY.Font_Regular,
                    color: colors.green400, textAlign: 'center'
                }}
            >In Progress</Text>
        </View>

    )
}