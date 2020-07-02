import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator,Header } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

//AUTH SCREEN
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'
import { navigationHeader } from './theme'
//Drawer Screens
import Dashboard from './containers/Screens/Dashboard';

//Back Screens
import AddCardBankAccount from './containers/Screens/AddCardBankAccount';

 import CustomDrawer from './common/CustomDrawer';
 import { AuthLoadingScreen } from './common/AuthLoadingScreen';
 import Organisation from './containers/Screens/Organisation'
 import OrganisationDetail from './containers/Screens/OrganisationDetail'
 import Indivisuals from './containers/Screens/Indivisuals'
 import Events from './containers/Screens/Events'
 import Objects from './containers/Screens/Objects'


global.HeaderHeight = Header.HEIGHT;
const DrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions:{
      // drawerLockMode:'locked-closed',
      // gesturesEnabled:'false'
    },
  },
 
},{
  initialRouteName:'Dashboard',
  contentComponent:CustomDrawer

});
const AppNavigator1 = createStackNavigator({
  Login:{screen:Login, navigationOptions:{header:null}},
  Signup:{screen:Signup, navigationOptions:{header:null}},
  // Back screens
  AddCardBankAccount:{screen:AddCardBankAccount, navigationOptions:{header:null}},
  Organisation:{screen: Organisation,navigationOptions:{header:null}},
  OrganisationDetail:{screen: OrganisationDetail,navigationOptions:{header:null}},
  Indivisuals:{screen: Indivisuals,navigationOptions:{header:null}},
  Events:{screen: Events,navigationOptions:{header:null}},
  Object:{screen: Objects,navigationOptions:{header:null}},
  Drawer:{
    screen:DrawerNavigator,
    navigationOptions: {
      header: null,
    }
  }
}, 
{
  initialRouteName: 'Login',
  defaultNavigationOptions: navigationHeader,
  // defaultNavigationOptions: null,
  headerMode:'none'

});
const AppNavigator = (createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AppStack: AppNavigator1,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));



 
export default createAppContainer(AppNavigator)
