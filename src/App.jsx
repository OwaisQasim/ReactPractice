import { useState } from "react"
import AddUser from "./components/User/AddUser"
import UserList from "./components/User/UserList"

function App() {
  const [userList, setUserlist] = useState([])
  const addUserHandler = (uName, uAge, uGender) => {
    setUserlist((prevUserList) => {
      return [
        ...prevUserList,
        {
          username: uName,
          age: uAge,
          gender: uGender,
          id: Math.random()
        }
      ]
    })
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  )
}

export default App
