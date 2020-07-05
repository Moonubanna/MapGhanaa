import { connect } from 'react-redux'

import GroupList from '../../components/Screens/GroupList'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)