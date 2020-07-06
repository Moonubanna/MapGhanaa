//user name in flow

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
import { IC_ALL_, AVTAR, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, IC_QR_CODE, IC_ALL_INDIVIDUALS_, IC_GAL_ } from '../../images'
import CommonHeaderHome from '../../common/CommonHeaderHome'
import translate from '../../i18n/i18n';
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import { storeData, retrieveData, clearData } from '../../common/AsyncStorage'
import Loader from '../../common/Loader'
import NavigationService from '../../NavigationService';
import { element } from 'prop-types';
import * as Utils from '../../utility/Utils'
import ActionSheet from 'react-native-actionsheet'
import IconMenu from 'react-native-vector-icons/SimpleLineIcons';

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
                backgroundColor: colors.white,
                flex: 1, width: '100%',
            }}>


                <View style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center',
                    minHeight: 60, paddingHorizontal: 10, backgroundColor: colors.yellow600
                }}>
                    <Ripple
                        onPress={() => {
                            this.onBackPress()
                        }}
                        style={{
                            marginTop: DIMENS.px_15
                        }}>
                        <IconMenu
                            name={'arrow-left'}
                            size={20}
                            color={colors.white}
                            style={{ flex: 1 }}
                        />
                    </Ripple>
                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Bold, left: 22, fontWeight: 'bold',
                            borderRadius: 4, color: 'black', textAlign: 'center', flex: 1
                        }}
                    >{translate('ORGANISATION')}</Text>
                    <Ripple
                        onPress={() => {
                            NavigationService.navigate({ routeName: SCREEN.SCREEN_SERVICES, params: { param: {} }, });
                        }}>
                        <Text
                            style={{
                                backgroundColor: colors.blue700, padding: 5,
                                fontFamily: FONT_FAMILIY.Font_Regular, paddingVertical: 7,
                                borderRadius: 4, color: 'white', textAlign: 'right'
                            }}
                        >{translate('ORDER_NOW')}</Text>
                    </Ripple>
                </View>

                <MapView
                    style={{ flex: 1, maxHeight: height / 3 - 50, bottom: 10 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    customMapStyle={{ flex: 1 }}

                />

                <ScrollView style={{
                    flex: 1,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{ paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row', display: 'flex', marginBottom: 45, }}>

                                <Image
                                    source={IC_GAL_}
                                    resizeMode='cover'
                                    style={{ height: DIMENS.px_80, width: DIMENS.px_80, }}
                                />

                                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', backgroundColor: colors.grey50 }}  >
                                    <View style={{ display: 'flex', marginLeft: 15, alignSelf: 'center' }}  >
                                        <Text style={{
                                            color: colors.black,
                                            fontFamily: FONT_FAMILIY.Font_Bold,
                                            fontWeight: 'bold',
                                            fontSize: 12,
                                        }}>
                                            Username(Accountant)
                                     </Text>
                                        <StarRating
                                            disabled={false}
                                            fullStarColor={colors.yellow800}
                                            starStyle={{ marginLeft: 0, marginTop: 10 }}
                                            maxStars={4}
                                            containerStyle={{}}
                                            starSize={20}
                                            emptyStarColor={colors.yellow700}
                                            rating={3}
                                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                        />
                                    </View>

                                </View>

                                <Ripple style={{
                                    width: '28%',
                                    alignSelf: 'center',
                                    marginTop: DIMENS.px_30,
                                    marginLeft: DIMENS.px_15,
                                    backgroundColor: colors.green700,
                                    borderRadius: DIMENS.px_5,
                                    justifyContent: 'center',
                                    maxHeight: DIMENS.px_45

                                }}
                                    disabled={false}
                                    onPress={() => {
                                        // this.props.navigation.navigate('OrganisationDetail')

                                    }}>
                                    {
                                        <Text style={{ color: colors.white, fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_10, textAlign: 'center' }}>
                                            {translate('NAVIGATE')}
                                        </Text>
                                    }
                                </Ripple>

                            </View>
                            <View style={{ bottom: 30, height: 1, backgroundColor: colors.grey600 }} />
                            <View style={{ padding: 5, bottom: 20 }}>
                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                }}>
                                    {translate('BIO_')}
                                </Text>
                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'normal',
                                    fontSize: 10,
                                }}>
                                    Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                            </Text>

                                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <IconX
                                        origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                        name='arrow-left'
                                        color={colors.black}
                                        size={10}
                                        style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, padding: 4, borderRadius: 10 }}


                                    />
                                    <Image source={IC_GAL_}
                                        style={{ flex: 7, margin: 10, maxHeight: 100, }} />


                                    <IconX
                                        origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                        name='arrow-right'
                                        color={colors.black}
                                        size={10}
                                        style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderWidth: 1, padding: 4, borderRadius: 10 }}

                                    />


                                </View>

                                <View style={{ height: 1, marginTop: 5, backgroundColor: colors.grey600 }} />
                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'bold', marginTop: 10,
                                    fontSize: 10,
                                }}>
                                    {translate('CONTACT')}

                                </Text>

                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>

                                    <View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                            <IconX
                                                origin={ICON_TYPE.FONT_AWESOME}
                                                name='phone'
                                                color={colors.black}
                                                size={18}

                                            />

                                            <Text style={{
                                                color: colors.black,
                                                fontFamily: FONT_FAMILIY.Font_Bold,
                                                fontWeight: 'bold',
                                                fontSize: 10, marginLeft: 10
                                            }}>
                                                +92 312 455 6784

                                             </Text>

                                        </View>

                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                            <IconX
                                                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                                name='email'
                                                color={colors.black}
                                                size={18}

                                            />

                                            <Text style={{
                                                color: colors.black,
                                                fontFamily: FONT_FAMILIY.Font_Bold,
                                                fontWeight: 'bold',
                                                fontSize: 10, marginLeft: 10
                                            }}>
                                                enamajamal53@gmail.com

                            </Text>

                                        </View>


                                    </View>

                                    <Image
                                        source={IC_QR_CODE}
                                        style={{ height: 60, width: 40, flex: 1, margin: 5 }}
                                    />
                                </View>

                                <View style={{ height: 1, marginTop: 10, backgroundColor: colors.grey600 }} />
                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'bold',
                                    fontSize: 10, marginTop: 10
                                }}>
                                    {translate('TAGS')}

                                </Text>

                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'bold',
                                    fontSize: 10, marginTop: 10
                                }}>
                                    HND Hndler, HND handler, HND Handler

                            </Text>

                                <View style={{ height: 1, marginTop: 10, backgroundColor: colors.grey600 }} />
                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'bold',
                                    fontSize: 10, marginTop: 10
                                }}>
                                    {translate('TAGS')}

                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', }}>                                   

                                    <Text style={{
                                        color: colors.black,
                                        fontFamily: FONT_FAMILIY.Font_Bold,
                                        fontWeight: 'bold',
                                        fontSize: 10, marginTop: 10
                                    }}>
                                        Barister

                            </Text>
                                </View>


                                <View style={{ height: 1, marginTop: 5, backgroundColor: colors.grey600 }} />


                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'bold',
                                    fontSize: 10, marginTop: 10
                                }}>
                                    {translate('FEATURES_')}

                                </Text>

                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold,
                                    fontWeight: 'bold',
                                    fontSize: 10, marginTop: 10
                                }}>
                                    Sceience

                            </Text>

                                <View style={{ height: 1, marginTop: 10, backgroundColor: colors.grey600 }} />
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                    <Text style={{
                                        color: colors.black,
                                        fontFamily: FONT_FAMILIY.Font_Bold,
                                        fontWeight: 'bold',
                                        fontSize: 10, marginTop: 10
                                    }}>
                                        {translate('REVIEWS')}

                                    </Text>


                                    <Text style={{
                                        color: colors.blue800,
                                        fontFamily: FONT_FAMILIY.Font_Bold,
                                        fontWeight: 'normal', textDecorationLine: 'underline',
                                        fontSize: 10, marginTop: 10
                                    }}>
                                        {translate('WRITE_REVIEW')}

                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', marginTop: 10, }}>

                                    <Image
                                        source={IC_GAL_}
                                        resizeMode='cover'
                                        style={{ height: DIMENS.px_30, width: DIMENS.px_30, borderRadius: 15, }}
                                    />

                                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 10, backgroundColor: colors.white }}  >
                                        <View style={{ display: 'flex', paddingLeft: 10, alignSelf: 'center', backgroundColor: colors.white }}  >
                                            <Text style={{
                                                color: colors.black,
                                                fontFamily: FONT_FAMILIY.Font_Bold,
                                                fontWeight: 'bold',
                                                fontSize: 12,
                                            }}>
                                                Username(Accountant)
         </Text>
                                            <StarRating
                                                disabled={false}
                                                fullStarColor={colors.yellow800}
                                                starStyle={{ marginLeft: 0, marginTop: 5 }}
                                                maxStars={4}
                                                containerStyle={{ width: 30 }}
                                                starSize={16}
                                                emptyStarColor={colors.yellow700}
                                                rating={3}
                                            // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                            />

                                            <Text style={{
                                                color: colors.black,
                                                fontFamily: FONT_FAMILIY.Font_Bold,
                                                fontSize: 10,
                                            }}>
                                                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?

         </Text>
                                        </View>


                                    </View>





                                </View>
                                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', marginTop: 10, }}>

                                    <Image
                                        source={IC_GAL_}
                                        resizeMode='cover'
                                        style={{ height: DIMENS.px_30, width: DIMENS.px_30, borderRadius: 15, }}
                                    />

                                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 10, backgroundColor: colors.white }}  >
                                        <View style={{ display: 'flex', paddingLeft: 10, alignSelf: 'center', backgroundColor: colors.white }}  >
                                            <Text style={{
                                                color: colors.black,
                                                fontFamily: FONT_FAMILIY.Font_Bold,
                                                fontWeight: 'bold',
                                                fontSize: 12,
                                            }}>
                                                Username(Accountant)
         </Text>
                                            <StarRating
                                                disabled={false}
                                                fullStarColor={colors.yellow800}
                                                starStyle={{ marginLeft: 0, marginTop: 5 }}
                                                maxStars={4}
                                                containerStyle={{ width: 30 }}
                                                starSize={16}
                                                emptyStarColor={colors.yellow700}
                                                rating={3}
                                            // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                            />

                                            <Text style={{
                                                color: colors.black,
                                                fontFamily: FONT_FAMILIY.Font_Bold,
                                                fontSize: 10,
                                            }}>
                                                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?

         </Text>
                                        </View>


                                    </View>





                                </View>

                            </View>


                        </View>



                        {/* <Ripple style={{
                        width: '60%',
                        alignSelf: 'center',
                        marginTop: DIMENS.px_80,
                        backgroundColor: colors.green700,
                        borderRadius: DIMENS.px_5,
                        position: 'absolute', bottom: DIMENS.px_40

                    }}
                        disabled={false}
                        onPress={() => {
                            //  NavigationService.navigate({ routeName: 'Drawer', params: { param: {} }, });
                        }}>
                        {
                            <Text style={{ color: colors.white, fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('VIEW_DETAILS')}
                            </Text>
                        }
                    </Ripple> */}

                    </View>


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