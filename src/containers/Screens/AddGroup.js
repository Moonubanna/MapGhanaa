import { connect } from 'react-redux'

import AddGroup from '../../components/Screens/AddGroup'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup)