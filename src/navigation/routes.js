import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import Dashboard from '../screens/Dashboard/Dashboard';

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
     headerShown:false
    },
  },
  Register: {
    screen: Registration,
    navigationOptions: {
        headerShown:false
    },
  },
  Dashboard:{
    screen:Dashboard,
    navigationOptions: {
      headerShown:false
  },
  }
});

const authenticate = createSwitchNavigator({
  authenticate_screen: {screen: LoginStack},
});

export default AppContainer = createAppContainer(authenticate);
