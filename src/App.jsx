import { useState } from "react"
import AddUser from "./components/User/AddUser"
import UserList from "./components/User/UserList"
import Wrapper from "./helpers/Wrapper"

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
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Wrapper>
  )
}

export default App
