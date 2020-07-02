import { connect } from 'react-redux'

import AddCardBankAccount from '../../components/Screens/AddCardBankAccount'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardBankAccount)