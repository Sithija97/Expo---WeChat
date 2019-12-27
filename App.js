import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//components
import Login from './components/Login';
import Signup from './components/SignUp';
import Chat from './components/Chat';

const AppNavigator = createStackNavigator(
  {
    Login:Login,
    Signup:Signup,
    Chat: Chat
  },
  {
    // headerMode:'none'
  }
); 

export default AppContainer = createAppContainer(AppNavigator);

