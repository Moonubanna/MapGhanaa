import React from 'react'
import { Image, TouchableOpacity, View, Text, DeviceEventEmitter, Platform } from 'react-native'
//import { SHOP_CART, MENU, NOTIFICATION ,PROFILE} from '../images'
import styles from '../components/Auth/styles'
import Ripple from 'react-native-material-ripple'
import { LOGO, FLAG_INDIA, IC_GAL_ } from '../images'
import { WIDTH, KEY, APP_PARAMS, FONT_FAMILIY, SCREEN } from '../constants/index'
import { colors } from '../theme'
import { DIMENS, CURRENCY } from '../constants'
import translate from '../i18n/i18n'
import NavigationService from '../NavigationService'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { storeData, retrieveData, clearData } from '../common/AsyncStorage'
import { IconX, ICON_TYPE, } from '../utility/Icons';


const drawerListFirst = [
    { id: 1, title: translate('ORGANISATION_DRAWER'), subTitle: translate('ORGANISATION_DRAWER'), is_selected: true },
    { id: 2, title: translate('INDIVISUAL'), subTitle: translate('INDIVISUAL'), is_selected: false },
    { id: 3, title: translate('NEW_POSTS'), subTitle: translate('NEW_POSTS'), is_selected: false },
    { id: 4, title: translate('EVENT'), subTitle: translate('EVENT'), is_selected: false },
    { id: 5, title: translate('GROUP'), subTitle: translate('GROUP'), is_selected: false },
    { id: 6, title: translate('OBJECTS'), subTitle: translate('OBJECTS'), is_selected: false },
    { id: 7, title: translate('MY_POST'), subTitle: translate('MY_POST'), is_selected: false },
    { id: 8, title: translate('FAVORITES'), subTitle: translate('FAVORITES'), is_selected: false },
    { id: 9, title: translate('ORDERS'), subTitle: translate('ORDERS'), is_selected: false },
    { id: 10, title: translate('FINANCIAL'), subTitle: translate('FINANCIAL'), is_selected: false },
    { id: 11, title: translate('CONTACT_US'), subTitle: translate('CONTACT_US'), is_selected: false },
    { id: 12, title: translate('ABOUT'), subTitle: translate('ABOUT'), is_selected: false },
    { id: 13, title: translate('LOGOUT'), subTitle: translate('LOGOUT'), is_selected: false },
]

//Icons
import Icon from 'react-native-vector-icons/Octicons';

export default class CustomDrawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: global[KEY.USER_DATA] != undefined && global[KEY.USER_DATA][KEY.PARAMS_NAME] != undefined ? global[KEY.USER_DATA][KEY.PARAMS_NAME] : 'Not Found',
            image: global[KEY.USER_DATA] != undefined && global[KEY.USER_DATA][KEY.PARAMS_IMAGE] != undefined ? global[KEY.USER_DATA][KEY.PARAMS_IMAGE] : undefined,
            drawerListFirstArr: drawerListFirst
        }
        //alert('user'+global[KEY.AS_GUESt_USER])
    }

    componentDidMount() {
        const { navigation } = this.props;
        retrieveData(KEY.USER_DATA, result => {
            if (result != undefined && result) {
                console.log('LOGINDDD' + JSON.stringify(result))
                this.setState({
                    name: result.Name,
                    image: result.ProfileImage,
                })
            }
        })
        // this.focusListener = navigation.addListener("didFocus", () => {
        //     // The screen is focused
        //     // Call any action
        //     if(global.DRAWER_SELECTED_ITEM != undefined){
        //         this.itemSelected({ id: 1, title: global.DRAWER_SELECTED_ITEM, subTitle: global.DRAWER_SELECTED_ITEM, is_selected: true })
        //     }
        // });
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%', alignItems: 'center',
                    backgroundColor: colors.lightGreen100,
                }}
            />
        );
    }
    componentWillUnmount = () => {
        //this.focusListener.remove();
    }

    drawerPress = (item, index) => {
        this.props.navigation.closeDrawer()
        switch (item.title) {
            case translate('ORGANISATION_DRAWER'):
                this.itemSelected(item)
                NavigationService.popToTop()
                //NavigationService.navigate({ routeName: translate('DRAWER_DASHBOARD'), params: { param: '' }, });
                this.props.navigation.navigate('Organisation')
                break;
            case translate('INDIVISUAL'):
                this.itemSelected(item)
                NavigationService.popToTop()
                this.props.navigation.navigate('Indivisuals')
                break;
            case translate('DRAWER_ACTIVITY'):
                this.itemSelected(item)
                NavigationService.popToTop()
                NavigationService.navigate({ routeName: translate('DRAWER_ACTIVITY'), params: { param: '' }, });
                //this.props.navigation.navigate(translate('DRAWER_ACTIVITY'))
                break;

            case translate('EVENT'):
                this.itemSelected(item)
                NavigationService.popToTop()
                //this.props.navigation.navigate('SendAndRequestTab')
                NavigationService.navigate({ routeName: 'Events', params: { param: { name: 'Send' } }, });
                break;

            case translate('DRAWER_PAYMENT_METHODS'):
                this.itemSelected(item)
                NavigationService.popToTop()
                this.props.navigation.navigate('PaymentMethods')
                break;

            case translate('OBJECTS'):
                this.itemSelected(item)
                NavigationService.popToTop()
                this.props.navigation.navigate('Object')
                break;

            case translate('DRAWER_SETTING'):
                this.itemSelected(item)
                NavigationService.popToTop()
                this.props.navigation.navigate('Settings')
                break;
            case translate('DRAWER_NOTIFICATION'):
                this.itemSelected(item)
                break;
            case translate('DRAWER_LOGOUT'):
                this.itemSelected(item)
                clearData(KEY.USER_DATA)
                NavigationService.clearStack(SCREEN.LOGIN);
                break;

            default:
                break;
        }
    }

    itemSelected = (item) => {
        // let previousArray = this.state.drawerListFirstArr;
        // previousArray.forEach(element => {
        //     if (item.id == element.id) {
        //         element.is_selected = true
        //     } else {
        //         element.is_selected = false
        //     }
        // });

        // this.setState({
        //     drawerListFirstArr: previousArray
        // })
    }
    renderDrawerList = (item, index) => {
        return (
            <Ripple style={{
                flexDirection: 'row',
                paddingLeft: DIMENS.px_10,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
                onPress={() => this.drawerPress(item, index)}>
                <View style={{
                    flexDirection: 'row', paddingVertical: DIMENS.px_15,
                    paddingHorizontal: DIMENS.px_10
                }}>
                    <View style={{
                        width: '80%',
                        flexDirection: 'row'
                    }}>
                        <IconX
                            origin={ICON_TYPE.FONT_AWESOME}
                            name='user'
                            color={colors.black}
                            size={25}
                        />
                        <Text style={{
                            flex: 1,
                            //color: item.is_selected ? colors.color_accent : colors.white,
                            color: colors.LIGHT_GREY_COLOR,
                            marginLeft:DIMENS.px_10,
                            fontSize: DIMENS.txt_size_medium_14,
                            fontFamily: FONT_FAMILIY.Font_Regular
                        }}>{item.title}</Text>
                    </View>
                    <View style={{
                        width: '20%',
                        flexDirection: 'row',
                        justifyContent:'flex-end'
                    }}>
                        <IconX
                            origin={ICON_TYPE.SIMPLE_LINE_ICON}
                            name='arrow-right'
                            color={colors.black}
                            size={20}
                        />
                    </View>
                </View>
            </Ripple>
        )
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                style={{
                    backgroundColor: colors.white
                }}
                bounces={false}>
                <Ripple
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        width: '100%',
                        padding: DIMENS.px_15,
                        backgroundColor: colors.red800
                    }}
                    onPress={() => {
                        NavigationService.popToTop()
                        //NavigationService.navigate({ routeName: translate('DRAWER_SUMMARY'), params: { param: '' }, });
                        this.props.navigation.navigate(translate('Profile'))
                    }}>
                    {/* Left view */}
                    <View style={{
                        flex: 1,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            width: DIMENS.px_80,
                            height: DIMENS.px_80,
                            borderRadius: DIMENS.px_40,
                        }}>
                            <Image
                                style={{
                                    width: DIMENS.px_80,
                                    height: DIMENS.px_80,
                                    borderRadius: DIMENS.px_40,
                                }}
                                resizeMode={'cover'}
                                source={IC_GAL_}
                            />
                        </View>
                        <View
                            style={{
                                marginTop: DIMENS.px_10,
                                flexDirection: 'column'
                            }}>
                            <Text style={{
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Medium,
                                fontSize: DIMENS.txt_size_large,
                                textAlign: 'center'
                            }}>
                                Gal Gadot
                            </Text>
                            <Text style={{
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_small_12,
                                marginTop: DIMENS.px_5,
                                textAlign: 'center'
                            }}>
                                Praveen36Singh@gmail.com
                            </Text>
                        </View>
                    </View>

                    {/* Right view */}

                </Ripple>
                <View style={{
                    flex: 1,
                    backgroundColor: colors.white
                }}>
                    <FlatList
                        data={this.state.drawerListFirstArr}
                        renderItem={({ item, index }) => this.renderDrawerList(item, index)}
                        extraData={this.state}
                        keyExtractor={(index) => index.toString()}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                    />
                </View>
            </ScrollView>)
    }
}

