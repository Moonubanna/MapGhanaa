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
import { IC_ALL_, AVTAR, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, IC_ALL_INDIVIDUALS_, IC_GAL_ } from '../../images'
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

let modalVisible = false;

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
    {
        image: AVTAR,
        'name': 'Category name',
        ratting: '3.2',
        desc: 'Description'
    },


]


export default class Group extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            showDropDown: false,
            selectedCity: 'Jaipur',
            bottomBarData: BottomBarData
        }
    }
    componentDidMount() {
        console.log('componentDidMount of Group screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of Group screen')
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
                        <Ripple
                        onPress={()=>{
                            NavigationService.navigate({ routeName: SCREEN.SCREEN_GROUP_LIST, params: { param: {} }, });
                        }}>
                            <IconX
                                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                name='swap-vertical-bold'
                                color={colors.black}
                                size={22}
                            />
                        </Ripple>
                        <IconX
                            origin={ICON_TYPE.MATERIAL_ICONS}
                            name='border-vertical'
                            color={colors.black}
                            size={22}
                            style={{ marginLeft: DIMENS.px_8 }}
                        />
                        <IconX
                            origin={ICON_TYPE.FONT_AWESOME5}
                            name='grip-vertical'
                            color={colors.black}
                            size={22}
                            style={{ marginLeft: DIMENS.px_8 }}
                        />
                        <Ripple
                        onPress={()=>{
                            NavigationService.navigate({ routeName: SCREEN.SCREEN_ADD_GROUP, params: { param: {} }, });
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
                        width: '95%',
                        top: -10, marginHorizontal: 10,
                        paddingLeft: 10,
                        minHeight: DIMENS.px_45,
                        maxHeight: DIMENS.px_50,
                        color: colors.black,
                        backgroundColor: colors.white,
                        elevation: 0.5,
                        borderRadius: 3,

                    }}
                />

                <ScrollView style={{
                    flex: 1, padding: DIMENS.px_10,
                }}>


                    {/* <View style={{ display: 'flex',  }}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                            data={this.state.bottomBarData}
                            renderItem={({ item, index }) => RenderBottomBar(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            style={{ backgroundColor: colors.grey200 }}
                          //  ItemSeparatorComponent={this.FlatListItemSeparator}
                        />

                    </View> */}

                    {BottomBarData.map((item, index) => {
                        return <RenderBottomBar
                            item={item}
                            index={index}
                        />
                    })}



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
        <View style={{
            display: 'flex',

        }}>
            <Text style={{
                backgroundColor: colors.grey300,
                color: colors.grey600, paddingLeft: 10,
                fontFamily: FONT_FAMILIY.Font_Regular,
                fontSize: 12, padding: 5
            }}>
                A
                </Text>

            <FlatList
                horizontal
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={BottomBarData}
                renderItem={({ item, index }) => RenderImageList(item, index)}
                keyExtractor={(item, index) => index.toString()}
                style={{ backgroundColor: colors.grey200 }}
            //  ItemSeparatorComponent={this.FlatListItemSeparator}
            />




        </View>
    )
}

const RenderImageList = (item, index) => {
    console.log('item  ', item)
    return (
        <Ripple
            onPress={() => { modalVisible = true }}
            style={{
                display: 'flex', alignItems: 'center',
                flexDirection: 'row', margin: 10
            }}>
            <Image
                style={{ height: 100, width: 80 }}
                source={IC_GAL_}
                resizeMode='cover'
            />

            <Text style={{
                backgroundColor: colors.blackTransparent_bG, width: '100%',
                color: colors.white, paddingLeft: 10, flex: 1,
                fontFamily: FONT_FAMILIY.Font_Regular, textAlign: 'center',
                fontSize: 12, position: 'absolute', bottom: 0
            }}>
                Title here
                </Text>


            {/* <Modal isVisible={true}
                onBackdropPress={() => { modalVisible = true }}
            >
                <View style={{ margin: 40, borderRadius: 4, backgroundColor: 'white', padding: DIMENS.px_10, }}>

                    <Ripple style={{
                        paddingLeft: 10, padding: 8,
                        marginTop: 8, backgroundColor: colors.grey300,
                        borderRadius: DIMENS.px_2, justifyContent: 'center'

                    }}>
                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                paddingLeft: 0, borderRadius: 4,
                                textAlign: 'left',
                                backgroundColor: colors.grey300,
                            }}
                        >{translate('CUSTOM_ORDER')}</Text>

                    </Ripple>
                </View>
            </Modal> */}

        </Ripple>
    )
}