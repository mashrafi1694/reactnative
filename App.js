import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import LoginScreen from "./app/screen/LoginScreen";
import WellconScreen from "./app/screen/WellcomScreen";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="wellCome"
          component={WellconScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "خانه",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerTitle: "جزییات محصول",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="NetworkLogger"
          component={NetworkLogger}
          options={{
            title: "Network Logs",
          }}
        /> */}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
