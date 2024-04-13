import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from "./src/pages/Intro";
import SecondIntro from './src/pages/SecondIntro';
import ThirdIntro from './src/pages/ThirdIntro';
import LoginPage from './src/pages/Login';

export default function App() {
const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Intro" options={{ headerShown: false }} component={Intro} />
        <Stack.Screen name="SecondStep" options={{ headerShown: false }} component={SecondIntro} />
        <Stack.Screen name="ThirdStep" options={{ headerShown: false }} component={ThirdIntro} />
        <Stack.Screen name="LoginPage" options={{ headerShown: false }} component={LoginPage} />
        {/* <Stack.Screen name="ThirdStep" options={{ headerShown: false }} component={createAccount} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
