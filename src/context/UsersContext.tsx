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
    switch (action.type) {
      case "DELETE_ACCOUNT":
        const user = action.payload.user;
        let users1 = stateUsers.users.filter(userState => userState.id !== user.id);
        return {
          ...stateUsers,
          users:users1
        }
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

