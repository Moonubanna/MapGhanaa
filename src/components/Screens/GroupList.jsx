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
import { IC_ALL_, AVTAR, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, IC_ALL_INDIVIDUALS_, RIGHT_GREEN } from '../../images'
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


export default class GroupList extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
            bottomBarData: BottomBarData
        }
    }
    componentDidMount() {
        console.log('componentDidMount of GroupList screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of GroupList screen')
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
                    >{translate('GROUP_')}</Text>

                    <View
                        style={{ flexDirection: 'row', flex: 2, justifyContent: 'flex-end', }}>
                        <IconX
                            origin={ICON_TYPE.MATERIAL_ICONS}
                            name='border-vertical'
                            color={colors.black}
                            size={22}
                        />
                        <IconX
                            origin={ICON_TYPE.FONT_AWESOME5}
                            name='grip-vertical'
                            color={colors.black}
                            size={22}
                            style={{ marginLeft: DIMENS.px_8}}

                        />
                        <IconX
                            origin={ICON_TYPE.ANT_ICON}
                            name='pluscircleo'
                            color={colors.black}
                            size={22}
                            style={{ marginLeft: DIMENS.px_8 }}
                        />
                    </View>

                </View>

                <View style={{
                    flex: 1, padding: DIMENS.px_10
                }}>

                    <TextInput
                        placeholder={translate('SEARCH_')}
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
                            top: -18,
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
                            data={this.state.bottomBarData}
                            renderItem={({ item, index }) => this.RenderBottomBar(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            style={{ backgroundColor: colors.grey200 }}
                        />

                    </View>


                </View>




                {loading ?
                    <Loader /> : null}
            </View>
        )
    }

    RenderBottomBar = (item, index) => {
        console.log('item  ', item)
        return (
            <Ripple style={{
                display: 'flex',
                padding: DIMENS.px_10,
                backgroundColor: 'white', elevation: 5, marginVertical: 5, borderRadius: 5
            }}
            onPress={()=>{
                NavigationService.navigate({ routeName: SCREEN.SCREEN_GROUP_INFO, params: { param: {} }, });
            }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
    
                        <Image
                            source={RIGHT_GREEN}
                            resizeMode='center'
                            style={{ 
                                height: DIMENS.px_15, 
                            width: DIMENS.px_15,
                            marginRight:DIMENS.px_5 
                            }} />
    
                        <IconX
                            origin={ICON_TYPE.MATERIAL_COMMUNITY}
                            name='chess-queen'
                            color={colors.black}
                            size={18}
                        />
                    </View>
                    <IconX
                        origin={ICON_TYPE.ENTYPO}
                        name='dots-three-vertical'
                        color={colors.grey500}
                        size={18}
                    />
                </View>
    
                <Text
                    style={{
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        borderRadius: 4,
                        textAlign: 'center', fontWeight: 'normal',
                        color: 'black', marginTop: 5
                    }}
                >Gotham City Police Department</Text>
                <Text
                    style={{
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        borderRadius: 4, fontSize: 10,
                        textAlign: 'center',
                        color: colors.grey500, marginTop: 5
                    }}
                >{translate('TARGET_INFO')}</Text>
    
    
            </Ripple>
        )
    }
}
