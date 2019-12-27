import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//components
import Main from './comp.previous 0.3/Main';
import Chat from './comp.previous 0.3/Chat';

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

