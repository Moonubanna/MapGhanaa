import { connect } from 'react-redux'

import Dashboard from '../../components/Screens/Dashboard'
import {
    getCustWalletBalanceApi,
    getRecentActivityApi,
    getLatestPriceApi
} from '../../thunks'

const mapStateToProps = ({ Dashboard  }) => ({
    loading: Dashboard.loading,
    error:Dashboard.error,
    data:Dashboard.data
})

const mapDispatchToProps = {
    requestGetCustWalletBalance: getCustWalletBalanceApi,
  requestGetRecentActivity: getRecentActivityApi,
  requestGetLatestPrice: getLatestPriceApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)