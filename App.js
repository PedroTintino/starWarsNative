import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from "./src/pages/Intro/index";
import SecondIntro from './src/pages/SecondIntro/index';
import ThirdIntro from './src/pages/ThirdIntro/index';
import LoginPage from './src/pages/Login/index';
import CreateAccount from './src/pages/CreateAccount';
import Profile from './src/pages/Profile/index';
import Home from './src/pages/Home';
import Characters from './src/pages/Characters';
import Movies from './src/pages/Movies';


export default function App() {
const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" options={{ headerShown: false }} component={Intro} />
        <Stack.Screen name="SecondStep" options={{ headerShown: false }} component={SecondIntro} />
        <Stack.Screen name="ThirdStep" options={{ headerShown: false }} component={ThirdIntro} />
        <Stack.Screen name="LoginPage" options={{ headerShown: false }} component={LoginPage} />
        <Stack.Screen name="CreateAccount" options={{ headerShown: false }} component={CreateAccount} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Characters" options={{ headerShown: false }} component={Characters} />
        <Stack.Screen name="Movies" options={{ headerShown: false }} component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
