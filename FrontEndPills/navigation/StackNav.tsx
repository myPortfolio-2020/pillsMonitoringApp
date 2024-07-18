import Register from "@/(auth)/Register";
import SplashScreen from "@/screens/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>

  );
};

export default StackNav;
