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
import { IconX, ICON_TYPE } from '../../utility/Icons';

const { height, width } = Dimensions.get('screen')

export default class CommonPages extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            headerName: ''
        }
    }
    componentDidMount() {
        console.log('componentDidMount of CommonPages screen')
        Orientation.lockToPortrait();
        this.setState({
            headerName: this.props.navigation.state.params.param
        })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of CommonPages screen')
    }

    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    render() {
        const { data, loading } = this.props;
        const { headerName } = this.state;

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
                    header={headerName} />

                <View style={{
                    flex: 1,
                    padding: DIMENS.px_10
                }}>
                    {this.state.headerName == translate('ABOUT') ?
                        <View style={{
                            flex: 1,
                            width: '100%',
                            justifyContent:'center'
                        }}>
                            <Text style={{
                                color: colors.grey800,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_medium_14,
                                textAlign:'center'
                            }}>
                                {'© 2020 MAPGHANA \n MAPGHANA Helps you to Digitize Information within Minuts You can easily map Professionals, Products, Businesses, Events, Groups, Objects etc MapGhana, Redefining Connections \n\n www.mapghana.com'}
                            </Text>
                        </View> :
                        <View style={{
                            flex: 1,
                            width: '100%'
                        }}>
                            <Text style={{
                                color: colors.black,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_medium_14,
                            }}>
                                {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}
                            </Text>
                        </View>
                    }
                </View>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}