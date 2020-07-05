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
import Organisation from './containers/Screens/Organisation'
 import OrganisationDetail from './containers/Screens/OrganisationDetail'
 import Indivisuals from './containers/Screens/Indivisuals'
 import Events from './containers/Screens/Events'
 import EventList from './containers/Screens/EventList'
 import EventDetail from './containers/Screens/EventDetail'
 import Objects from './containers/Screens/Objects'
import CommonPages from './containers/Screens/CommonPages';
import OrannizationToOrder from './containers/Screens/OrannizationToOrder';
import Service from './containers/Screens/Service';
import PostListing from './containers/Screens/PostListing';
import PostOrganization from './containers/Screens/PostOrganization';
import PostIndividual from './containers/Screens/PostIndividual';
import OrdersMenu from './containers/Screens/OrdersMenu';
import AllOrganisation from './containers/Screens/AllOrganisation';
import GroupList from './containers/Screens/GroupList';
import Group from './containers/Screens/Group';
import AddGroup from './containers/Screens/AddGroup';

 import CustomDrawer from './common/CustomDrawer';
 import { AuthLoadingScreen } from './common/AuthLoadingScreen';



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
  OrannizationToOrder:{screen: OrannizationToOrder,navigationOptions:{header:null}},
  Indivisuals:{screen: Indivisuals,navigationOptions:{header:null}},
  Events:{screen: Events,navigationOptions:{header:null}},
  EventList:{screen: EventList,navigationOptions:{header:null}},
  EventDetail:{screen: EventDetail,navigationOptions:{header:null}},
  Object:{screen: Objects,navigationOptions:{header:null}},
  CommonPages:{screen: CommonPages,navigationOptions:{header:null}},
  Service:{screen: Service,navigationOptions:{header:null}},
  PostListing:{screen: PostListing,navigationOptions:{header:null}},
  PostOrganization:{screen: PostOrganization,navigationOptions:{header:null}},
  PostIndividual:{screen: PostIndividual,navigationOptions:{header:null}},
  OrdersMenu:{screen: OrdersMenu,navigationOptions:{header:null}},
  AllOrganisation:{screen: AllOrganisation,navigationOptions:{header:null}},
  GroupList:{screen: GroupList,navigationOptions:{header:null}},
  Group:{screen: Group,navigationOptions:{header:null}},
  AddGroup:{screen: AddGroup,navigationOptions:{header:null}},
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
