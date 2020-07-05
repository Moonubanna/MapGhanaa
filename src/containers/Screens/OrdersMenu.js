import { connect } from 'react-redux'

import OrdersMenu from '../../components/Screens/OrdersMenu'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersMenu)