import { connect } from 'react-redux'

import UserNameToOrder from '../../components/Screens/UserNameToOrder'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNameToOrder)