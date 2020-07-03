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
import { IC_ALL_, IC_POPULAR_, IC_POPULAR_INDIVIDUALS_, IC_ALL_INDIVIDUALS_, LOGO_WIDTH } from '../../images'
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
        id:1,
        image: IC_ALL_,
        name: translate('ALL_ORGANISATION_')
    },
    {
        id:2,
        image: IC_POPULAR_,
        name: translate('POPULAR_ORGANISATION_')
    },
    {
        id:3,
        image: IC_POPULAR_INDIVIDUALS_,
        name: translate('POPULAR_INDIVISUALS_')
    },
    {
        id:4,
        image: IC_ALL_INDIVIDUALS_,
        name: translate('ALL_INDIVIDUALS_')
    }
]

//org.reactjs.native.example.mapGHANA
//BR.mapGHANA
export default class Dashboard extends React.PureComponent {
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
        console.log('componentDidMount of Dashboard screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of Dashboard screen')
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

    render() {
        const { data, loading } = this.props
        const { modalVisible } = this.state;


        return (
            <View style={{
                backgroundColor: colors.grey200,
                flex: 1, width: '100%',
            }}>
                <CommonHeaderHome
                    menuPress={() => this.props.navigation.openDrawer()}
                    isBack={false}
                    isRightIcon={true}
                    isRightNoti={true}
                    header={translate('EXPLORE_')} />

                <View style={{
                    flex: 1, justifyContent: 'center', padding: DIMENS.px_10
                }}>
                    <TextInput
                        placeholder={'Search For Anything...'}
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
                            paddingLeft: 10,
                            minHeight: DIMENS.px_45,
                            maxHeight: DIMENS.px_50,
                            color: colors.black,
                            backgroundColor: colors.white,
                            elevation: 0.5,
                            borderRadius: 3

                        }}
                    />

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:DIMENS.px_20 }}>

                        <Ripple
                            onPress={() => {
                                this.ActionSheet.show()

                            }}
                            style={{
                                flex: 7.5, display: 'flex',
                                flexDirection: 'row', justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                alignItems: 'center', height: 50, marginTop: 10, elevation: 0.5, backgroundColor: 'white'
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Light,
                                    paddingLeft: 0
                                }}
                            >{this.state.selectedCity}</Text>
                            <IconX
                                origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                name='arrow-down'
                                color={colors.black}
                                size={18}
                            />

                        </Ripple>



                        <Ripple
                            onPress={() => {
                                this.ActionSheet.show()

                            }}
                            style={{
                                flex: 2.5, backgroundColor: colors.green800,
                                marginLeft: 10, borderRadius: 3,
                                alignItems: 'center', height: 50, marginTop: 10,
                                justifyContent: 'center',
                                elevation: 0.5,
                            }}
                        >
                            <IconX
                                origin={ICON_TYPE.FEATHER_ICONS}
                                name='search'
                                color={colors.black}
                                size={22}
                            />

                        </Ripple>

                        <ActionSheet
                            ref={o => this.ActionSheet = o}
                            title={'Which one do you like ?'}
                            options={cityArray}
                            cancelButtonIndex={0}
                            destructiveButtonIndex={1}
                            onPress={(index) => { this.setState({ selectedCity: cityArray[index] }) }}
                        />


                    </View>


                    <View
                        style={{
                            display: 'flex', flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            marginTop:DIMENS.px_40
                        }}>

                        <Ripple
                        onPress={()=>this.props.navigation.navigate('Organisation')}
                            style={{
                                display: 'flex', flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between'
                            }}>

                            <IconX
                                origin={ICON_TYPE.FONT_AWESOME5}
                                name='globe'
                                color={colors.black}
                                size={32}
                            />

                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Medium,
                                    paddingLeft: 5,
                                    fontSize: DIMENS.txt_size_medium
                                }}
                            >{translate('POPULAR_ORGANISATION_')}</Text>

                        </Ripple>

                        <Ripple
                        onPress={()=>this.props.navigation.navigate('Indivisuals')}
                            style={{
                                display: 'flex', flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between'
                            }}>

                            <IconX
                                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                name='account-group'
                                color={colors.black}
                                size={38}
                            />

                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Medium,
                                    paddingLeft: 5,
                                    fontSize: DIMENS.txt_size_medium

                                }}
                            > {translate('POPULAR_INDIVISUALS_')}</Text>

                        </Ripple>

                    </View>

                    <Ripple style={{
                        width: '70%',
                        alignSelf: 'center',
                        marginTop: DIMENS.px_80,
                        backgroundColor: colors.yellow600,
                        borderRadius: DIMENS.px_2,

                    }}
                        disabled={false}
                        onPress={() => {
                            this.setState({ modalVisible: true })
                        }}>
                        {
                            <Text style={{ 
                                color: colors.black, 
                                fontFamily: FONT_FAMILIY.Font_Medium,
                            padding: DIMENS.px_15, textAlign: 'center' }}>
                                {translate('NEW_POST_')}
                            </Text>
                        }
                    </Ripple>



                </View>


                <Modal isVisible={this.state.modalVisible}
                onBackdropPress={()=>{this.setState({modalVisible:false})}}
                >
                    <View style={{ margin: 40, borderRadius: 4, backgroundColor: 'white', padding: DIMENS.px_10, }}>
                        <Image
                            source={LOGO_WIDTH}
                            resizeMode='center'
                            style={{ alignSelf: 'center' }}
                        />

                        <View style={{ height: 1, width: '100%', backgroundColor: colors.grey700 }} />

                        <Text
                            style={{
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                paddingLeft: 0,
                                textAlign: 'left',
                                marginTop: 5
                            }}
                        >{translate('SELECT_COUNTRY')}</Text>

                        <Ripple
                            onPress={() => {
                                this.props.navigation.navigate('Organisation')
                                this.setState({ modalVisible: false })
                            }}
                            style={{
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
                            >{translate('ORGANISATION_DRAWER')}</Text>

                        </Ripple>

                        <Ripple
                            onPress={() => {
                                this.props.navigation.navigate('Indivisuals')
                                this.setState({ modalVisible: false })

                            }}

                            style={{
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
                            >{translate('INDIVISUAL')}</Text>
                        </Ripple>

                        <Ripple 
                          onPress={() => {
                            this.props.navigation.navigate('Events')
                            this.setState({ modalVisible: false })

                        }}
                        style={{
                            
                            paddingLeft: 10, padding: 8,
                            marginTop: 8, backgroundColor: colors.grey300,
                            borderRadius: DIMENS.px_2, justifyContent: 'center'

                        }}>
                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    borderRadius: 4,
                                    textAlign: 'left',
                                    backgroundColor: colors.grey300,
                                }}
                            >{translate('EVENT')}</Text>
                        </Ripple>

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
                                    backgroundColor: colors.grey300
                                }}
                            >{translate('GROUP')}</Text>
                        </Ripple>

                        {/* <Ripple 
                           onPress={() => {
                            this.props.navigation.navigate('Object')
                            this.setState({ modalVisible: false })

                        }}
                        style={{
                            paddingLeft: 10, padding: 8,
                            marginTop: 8, backgroundColor: colors.grey300,
                            borderRadius: DIMENS.px_2, justifyContent: 'center'

                        }}>
                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    paddingLeft: 0, borderRadius: 4,
                                    textAlign: 'left', backgroundColor: colors.grey300
                                }}
                            >{translate('OBJECTS')}</Text>
                        </Ripple> */}

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
                </Modal>

                <View style={{ display: 'flex' }}>
                    <FlatList
                    showsHorizontalScrollIndicator={false}
                        horizontal
                        data={this.state.bottomBarData}
                        renderItem={({ item, index }) => this.RenderBottomBar(item, index)}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ backgroundColor: colors.green800 }}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                    />

                </View>


                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
    RenderBottomBar = (item, index) => {
        console.log('item  ', item)
        return (
            <Ripple 
            style={{ display: 'flex', alignItems: 'center', width: width / 4, justifyContent: 'center', padding: DIMENS.px_10 }}
            onPress={()=>{
                if(item.id == 1){
                    this.props.navigation.navigate('Organisation')
                }else if(item.id == 2){
                    this.props.navigation.navigate('Organisation')
                }else if(item.id == 3){
                    this.props.navigation.navigate('Indivisuals')
                }else{
                    this.props.navigation.navigate('Indivisuals')
                }
            }}>
                <Image
                    source={item.image}
                    style={{
                        height: DIMENS.px_25, width: DIMENS.px_25,
                        // resizeMode: 'contain'
                    }} />
    
                <Text style={{
                    color: colors.black,
                    fontFamily: FONT_FAMILIY.Font_Medium,
                    textAlign: 'center', 
                    fontSize: DIMENS.txt_size_small_12, 
                    marginTop: DIMENS.px_3
                }}
                numberOfLines={2}>
                    {item.name}
                </Text>
    
            </Ripple>
        )
    }
}