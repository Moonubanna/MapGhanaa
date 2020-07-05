import { connect } from 'react-redux'

import AllOrganisation from '../../components/Screens/AllOrganisation'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOrganisation)