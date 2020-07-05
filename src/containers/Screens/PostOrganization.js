import { connect } from 'react-redux'

import PostOrganization from '../../components/Screens/PostOrganization'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PostOrganization)