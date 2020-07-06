import { connect } from 'react-redux'

import GroupInfo from '../../components/Screens/GroupInfo'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfo)