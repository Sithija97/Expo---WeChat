import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//components
import Chat from './'

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

