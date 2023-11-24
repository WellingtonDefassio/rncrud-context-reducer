import users, { User } from "../data/users";
import { createContext, useReducer } from "react";

interface StateUsers {
  users: User[];
  dispatch: any;
}

const initialState = { users };

export const UsersContext = createContext<StateUsers>({
  users, dispatch: () => {
  }
});

export default function UsersProvider(props: any) {

  function reducer(stateUsers: StateUsers, action: any): any {
    const user = action.payload.user;

    switch (action.type) {
      case "DELETE_ACCOUNT":
        return {
          ...stateUsers,
          users: stateUsers.users.filter(userState => userState.id !== user.id)
        };
      case "CREATE_ACCOUNT":
        user.id = stateUsers.users.length
        console.log(stateUsers);
        return {
          ...stateUsers,
          users: [...stateUsers.users, user]
        };
      case "UPDATE_ACCOUNT":
        let updated = stateUsers.users.filter(userState => userState.id !== user.id);
        return {
          ...stateUsers,
          users: [...updated, user]
        };
      default:
        console.log("CONTA NÃO FOI DELETADA");
    }
    return users;
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <UsersContext.Provider value={{
      ...state, dispatch
    }}>
      {props.children}
    </UsersContext.Provider>
  );

}

