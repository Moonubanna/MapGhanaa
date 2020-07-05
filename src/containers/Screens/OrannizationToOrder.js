import { connect } from 'react-redux'

import OrannizationToOrder from '../../components/Screens/OrannizationToOrder'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OrannizationToOrder)