import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//components
import Chat from './components/Chat';

const AppNavigator = createStackNavigator(
  {
    Chat: Chat
  },
  {
    // headerMode:'none'
  }
); 

export default AppContainer = createAppContainer(AppNavigator);

