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
import { IC_ALL_, AVTAR, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, IC_ALL_INDIVIDUALS_, IC_GAL_, IC_QR_CODE } from '../../images'
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


export default class GroupInfo extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
        }
    }
    componentDidMount() {
        console.log('componentDidMount of GroupInfo screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of GroupInfo screen')
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
                    header={translate('GROUP_INFO')} />

                <ScrollView style={{
                    flex: 1, padding: DIMENS.px_10
                }}>

                    <View style={{
                        display: 'flex', borderRadius: 3,
                        padding: 50, backgroundColor: colors.green600, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <IconX
                            origin={ICON_TYPE.ANT_ICON}
                            name='camera'
                            color={colors.white}
                            size={22}
                        />


                    </View>

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4,
                            fontWeight: 'bold',
                            textAlign: 'left',
                            marginTop: 10, color: 'black'
                        }}
                    >{translate('A_GROUP')}</Text>

                    <View style={{ height: 1, backgroundColor: colors.grey400, width: '100%', marginTop: 10 }} />

                    <Text
                        style={{
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            borderRadius: 4, fontSize: 10,
                            textAlign: 'left',
                            marginTop: 10, color: 'black'
                        }}
                    >{translate('LOREM_DUMMY_TEXT')}</Text>


                    <View style={{ height: 1, backgroundColor: colors.grey400, width: '100%', marginTop: 10 }} />

                    <View style={{
                        display: 'flex', backgroundColor: colors.grey100, flexDirection: 'row',
                    }}>



                        <Image
                            source={IC_QR_CODE}
                            style={{ height: 120, width: 120, flex: 1, margin: 5 }}
                        />



                        <View style={{ padding: 10, alignContent: 'flex-start', flex: 1 }}>

                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: 12, fontWeight: 'bold'
                                    , textAlign: 'left', textDecorationLine: 'underline'

                                }}
                            >{translate('ADMIN_CONTACT')}</Text>

                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: 10, marginTop: 10

                                }}
                            >{translate('ADMIN_CONTACT')}</Text>

                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Regular, fontWeight: 'bold',
                                    textAlign: 'left', textDecorationLine: 'underline', marginTop: 20


                                }}
                            >{translate('CHAT_LINK')}</Text>

                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: 10, marginTop: 10

                                }}
                            >{translate('ADMIN_CONTACT')}</Text>
                        </View>

                    </View>


                    <Text style={{
                        marginTop: 10,
                        backgroundColor: colors.grey300,
                        color: colors.grey600, paddingLeft: 10,
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        fontSize: 12, padding: 5
                    }}>
                        {translate('MEDIA')}
                    </Text>

                    <View style={{ flex: 1, marginTop: 10 }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            scrollEnabled={true}
                            data={['0', '1', '3', '4', '5']}
                            renderItem={({ item, index }) => this.RenderEventHoriList(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                </ScrollView>




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
                    alignItems: 'center', margin: DIMENS.px_5,
                }}
                onPress={() => {
                    // NavigationService.navigate({ routeName: SCREEN.SCREEN_EVENT_DETAIL, params: { param: {} }, });
                }}>


                <View style={{ display: 'flex' }}>
                    <Image source={{}}
                        style={{ flex: 1, width: 120, backgroundColor: 'grey',borderRadius:10 }}
                        resizeMode='cover'
                    />

                    <Text style={{alignItems:'center',justifyContent:'center',
                        marginTop: 60, position: 'absolute', alignSelf: 'center',
                        color: colors.black,
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        fontSize: 12,
                    }}>
                        {translate('MEDIA')}
                    </Text>


                </View>



            </Ripple>
        )
    }


}
