import { connect } from 'react-redux'

import PostListing from '../../components/Screens/PostListing'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListing)