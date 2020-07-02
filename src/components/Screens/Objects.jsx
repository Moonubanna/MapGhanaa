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


export default class Objects extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
            bottomBarData: BottomBarData
        }
    }
    componentDidMount() {
        console.log('componentDidMount of Objects screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of Objects screen')
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
                    header={translate('OBJECT')} />

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




                    <View style={{ display: 'flex', margin: 5, top: -15 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.bottomBarData}
                            renderItem={({ item, index }) => RenderBottomBar(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            style={{}}
                        />

                        <Ripple style={{
                            width: '13%',
                            height:'7%',
                            right:10,bottom:30,
                            alignSelf: 'center',
                            //  marginTop: DIMENS.px_80,
                            backgroundColor: colors.yellow600,
                            borderRadius: DIMENS.px_5,
                            position:'absolute',justifyContent:'center',alignItems:'center'

                        }}
                            disabled={false}
                            onPress={() => {
                                // this.props.navigation.navigate('OrganisationDetail')

                            }}>
                            {
                                <IconX
                                origin={ICON_TYPE.ANT_ICON}
                                name='plus'
                                color={colors.black}
                                size={25}
                            />
                            }
                        </Ripple>

                    </View>



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
            flexDirection: 'row',
            elevation: 0.5, backgroundColor: 'white', marginVertical: 10
        }}>
            <View style={{
                display: 'flex', alignItems: 'center',
                flexDirection: 'row',
                padding: DIMENS.px_14, borderRadius: 3
            }}>
                <IconX
                    origin={ICON_TYPE.FONT_AWESOME}
                    name='user'
                    color={colors.black}
                    size={25}
                />

                <Text style={{
                    color: colors.black,
                    fontFamily: FONT_FAMILIY.Font_Bold, padding: DIMENS.px_15,
                    textAlign: 'center', flex: 1
                }}>
                    {item.name}

                </Text>
            </View>


        </Ripple>
    )
}