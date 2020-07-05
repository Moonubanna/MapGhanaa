import { connect } from 'react-redux'

import EventList from '../../components/Screens/EventList'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)