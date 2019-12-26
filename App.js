import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//components
import ChatScreen from './components/ChatScreen';
import LoginScreen from './components/LoginScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
  },
  {
    // headerMode:'none'
  }
); 

export default AppContainer = createAppContainer(AppNavigator);

