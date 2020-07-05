import { connect } from 'react-redux'

import Signup from '../../components/Auth/Signup'
import {
    //signUpIndiDuplicateEmailApi
} from '../../thunks'

const mapStateToProps = ({ Signup  }) => ({
    loading: Signup.loading,
    error:Signup.error,
    data:Signup.data
})

const mapDispatchToProps = {
    //requestSignUpIndiDuplicateEmail:signUpIndiDuplicateEmailApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)