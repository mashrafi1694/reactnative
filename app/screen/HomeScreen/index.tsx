import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import CartScreen from "../CartScreen";
import ProductScreen from "../ProductsScreen";
import ProfileScreen from "../ProfileScreen";
const Tab = createBottomTabNavigator();
export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "محصولات" });
  }, [navigation]);
  return (
    <Tab.Navigator
      initialRouteName="products"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#023e8a",
        tabBarInactiveTintColor: "#415a77",
        tabBarActiveBackgroundColor: "#caf0f8",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "900",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "products") {
            iconName = "bag";
          } else if (route.name === "cart") {
            iconName = "cart";
          } else if (route.name === "profile") {
            iconName = "accessibility";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "پروفایل",
        }}
        listeners={{
          tabPress: () => {
            navigation.setOptions({ headerTitle: "پروفایل" });
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          title: "سبد خرید",
        }}
        listeners={{
          tabPress: () => {
            navigation.setOptions({ headerTitle: "سبد خرید" });
          },
        }}
      />
      <Tab.Screen
        name="products"
        component={ProductScreen}
        options={{
          title: "محصولات",
        }}
        listeners={{
          tabPress: () => {
            navigation.setOptions({ headerTitle: "محصولات" });
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
