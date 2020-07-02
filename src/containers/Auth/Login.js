import { connect } from 'react-redux'

import Login from '../../components/Auth/Login'
import {
  loginIndiBusinessUserApi,
  checkDocumentUserApi
} from '../../thunks'

const mapStateToProps = ({ Login  }) => ({
  loading: Login.loading,
    error:Login.error,
    data:Login.data
})

const mapDispatchToProps = {
  requestLoginAppUser: loginIndiBusinessUserApi,
  requestCheckDocumentUser: checkDocumentUserApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)