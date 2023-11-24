import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { UsersContext } from "../context/UsersContext";

export default function UserForm({ route, navigation }: { route: any, navigation: any }) {

  const [user, setUser] = useState(route.params ? route.params : {});

  const { users, dispatch } = useContext(UsersContext);

  return (
    <View>
      <View style={styles.form}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          onChangeText={name => setUser({ ...user, name })}
          placeholder={"Type The Name"}
          value={user.name}
          style={styles.input}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          onChangeText={email => setUser({ ...user, email })}
          placeholder={"Type The Email"}
          value={user.email}
          style={styles.input}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>Avatar url</Text>
        <TextInput
          onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
          placeholder={"Type The Avatar url"}
          value={user.avatarUrl}
          style={styles.input}
        />
        <Button title={"Save"} onPress={() => {
          {
            dispatch({
              type: user.id ? "UPDATE_ACCOUNT" : "CREATE_ACCOUNT",
              payload: {
                user: user
              }
            });
            navigation.goBack();
          }
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }

});
