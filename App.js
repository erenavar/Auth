import { StyleSheet, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./screens/SignUpScreen";
import LogInScreen from "./screens/LogInScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import HomeScreen from "./screens/HomeScreen";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rebeccapurple",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "lightgrey",
        },
      }}
    >
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{ headerTitle: "Log In" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerTitle: "New User" }}
      />
    </Stack.Navigator>
  );
}

function AfterAuthenticatedStack() {
  const authContext = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rebeccapurple",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "lightgrey",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Home Page",
          headerRight: ({ tintColor }) => (
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={authContext.logOut}
            >
              <Ionicons name="exit" size={24} color={tintColor} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <NormalStack />}
      {authContext.isAuthenticated && <AfterAuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
