import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Button, Icon } from "@rneui/themed";
import UsersProvider from "./context/UsersContext";


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"UserList"} screenOptions={screenOptions}>
          <Stack.Screen name={"UserList"} component={UserList}
                        options={({ navigation }) => {
                          return {
                            title: "User List",
                            headerRight: () => (
                              <Button
                                onPress={() => navigation.navigate("UserForm")}
                                type={"clear"}
                                icon={<Icon name={"add-circle-outline"} size={25} color={"white"} />}
                              />
                            )
                          };
                        }} />
          <Stack.Screen name={"UserForm"} component={UserForm} options={{ title: "User Form" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: "#f4511e" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" }
};
