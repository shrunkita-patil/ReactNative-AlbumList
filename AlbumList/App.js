// import {createStackNavigator, createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from "./src/Login/LoginForm";
import AlbumList from "./src/Album/AlbumList";

const Stack = createStackNavigator();
// const MainNavigator = createStackNavigator({
//     Home: {screen: LoginForm},
//     List: {screen: AlbumList},
// });

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="LoginForm" component={LoginForm} options={{ title: 'Taylor Swift' }}/>
        <Stack.Screen name="AlbumList" component={AlbumList} options={{ title: 'Taylor Swift' }}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  };