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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
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


export default class OrganisationDetail extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
            bottomBarData: BottomBarData
        }
    }
    componentDidMount() {
        console.log('componentDidMount of OrganisationDetail screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of OrganisationDetail screen')
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
                    isRightNoti={false}
                />

                <View style={{
                    flex: 1, padding: DIMENS.px_10
                }}>

                    <TextInput
                        placeholder={translate('SEARCH_ANYTHING')}
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
                            top: -20,
                            paddingLeft: 10,
                            minHeight: DIMENS.px_45,
                            maxHeight: DIMENS.px_50,
                            color: colors.black,
                            backgroundColor: colors.white,
                            elevation: 0.5,
                            borderRadius: 3,

                        }}
                    />

                    <MapView
                        style={{ flex:1 ,bottom:10}}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        customMapStyle={{ flex: 1 }}
                    />


                    <Ripple style={{
                        width: '60%',
                        alignSelf: 'center',
                        marginTop: DIMENS.px_80,
                        backgroundColor: colors.green700,
                        borderRadius: DIMENS.px_5,
                        position:'absolute',bottom:DIMENS.px_40

                    }}
                        disabled={false}
                        onPress={() => {
                              NavigationService.navigate({ routeName: SCREEN.ORGANIZATIONTO_ORDER, params: { param: {} }, });
                        }}>
                        {
                            <Text style={{ color: colors.white, fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('VIEW_DETAILS')}
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

                <View style={{ display: 'flex', marginTop: 5, alignItems: 'center', flexDirection: 'row' }}>

                    <Text style={{
                        color: colors.grey600,
                        fontFamily: FONT_FAMILIY.Font_Bold,
                        fontSize: 12, marginTop: 3
                    }}>
                        {item.ratting}
                    </Text>
                    <StarRating
                        disabled={false}
                        fullStarColor={colors.yellow800}
                        starStyle={{ marginLeft: 4 }}
                        maxStars={5}
                        containerStyle={{ marginLeft: 10 }}
                        starSize={15}
                        emptyStarColor={colors.yellow700}
                        rating={3.5}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />

                </View>



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