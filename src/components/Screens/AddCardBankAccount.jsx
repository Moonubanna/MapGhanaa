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
import { LOGO, SEND_MONEY, REQUEST_MONEY, BANK_ACCOUNT, CARD } from '../../images'
import CommonHeaderHome from '../../common/CommonHeaderHome'
import translate from '../../i18n/i18n';
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import { storeData, retrieveData, clearData } from '../../common/AsyncStorage'
import Loader from '../../common/Loader'
import NavigationService from '../../NavigationService';
import { element } from 'prop-types';

//Library
import Orientation from 'react-native-orientation';
import Ripple from 'react-native-material-ripple';
import Modal from 'react-native-modal'
import CardView from 'react-native-cardview'

//Icons
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddCardBankAccount extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        console.log('componentDidMount of Summary screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of Summary screen')
    }

    render() {
        const { data, loading } = this.props

        return (
            <View style={{
                backgroundColor: colors.lightGray,
                flex: 1, width: '100%',
            }}>
                <CommonHeaderHome
                    backPress={() => this.props.navigation.goBack()}
                    isBack={true}
                    header={translate('ADD_CARD_BANK_ACCOUNT')} />
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                    }}>
                </View>
            </View>
        )
    }
}