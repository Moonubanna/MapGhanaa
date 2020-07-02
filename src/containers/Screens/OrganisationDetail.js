import { connect } from 'react-redux'

import OrganisationDetail from '../../components/Screens/OrganisationDetail'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationDetail)