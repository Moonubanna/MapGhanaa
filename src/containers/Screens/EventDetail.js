import { connect } from 'react-redux'

import EventDetail from '../../components/Screens/EventDetail'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)