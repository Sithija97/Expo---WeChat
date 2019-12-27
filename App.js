import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//components
import Main from './components/Main';
import Chat from './components/Chat';

const AppNavigator = createStackNavigator(
  {
    Main:Main,
    Chat: Chat
  },
  {
    // headerMode:'none'
  }
); 

export default AppContainer = createAppContainer(AppNavigator);

