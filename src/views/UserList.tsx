import React, { useContext } from "react";
import { Alert, FlatList, View } from "react-native";
import { User } from "../data/users";
import { Button, Icon, ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import {UsersContext} from "../context/UsersContext";

export default function UserList(props: any) {

  const { users, dispatch } = useContext(UsersContext);

  function getUserItem({ item }: { item: User }) {
    return (
      <ListItem key={item.id} bottomDivider onPress={() => props.navigation.navigate("UserForm")}
                onPressIn={() => props.navigation.navigate("UserForm", item)}>
        <Avatar
          rounded
          source={{ uri: item.avatarUrl }}
        />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          {getActions(item)}
        </ListItem.Content>
      </ListItem>
    );
  }

  function getActions(user: User) {
    return (
      <View style={{ flexDirection: "row" }}>
        <Button
          onPress={() => props.navigation.navigate("UserForm", user)}
          type={"clear"}
          icon={<Icon name={"edit"} size={25} color={"orange"} />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type={"clear"}
          icon={<Icon name={"delete"} size={25} color={"red"} />}
        />
      </View>
    );
  }

  function confirmUserDeletion(user: User) {
    Alert.alert("Delete user", "Delete user " + user.name, [
      {
        text: "Yes",
        onPress() {
          dispatch({
            type: "DELETE_ACCOUNT",
            payload: {
              user: user
            }
          })
        }
      },
      {
        text: "No"
      }
    ]);
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem} />
    </View>
  );
}
