export type User = {
  id: number,
  name: string,
  email: string,
  avatarUrl: string
}

const users: User[] = [
  {
    id: 1,
    name: "João Silva",
    email: "josilva@email.com",
    avatarUrl: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png"
  },
  {
    id: 2,
    name: "Maria Joana",
    email: "mj@email.com",
    avatarUrl: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png"
  },
  {
    id: 3,
    name: "Fabio Arruda",
    email: "faar@email.com",
    avatarUrl: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png"
  },
  {
    id: 4,
    name: "Miguel Falabela",
    email: "mfab@email.com",
    avatarUrl: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png"
  },
]

export default users
