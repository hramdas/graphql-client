import { useQuery } from "@apollo/client"
import React from "react"
import { getUsers } from "./graphql"
function App() {
  const { data, loading } = useQuery(getUsers, {variables : {limit:5, page:1}})
  console.log("data", data)
  return (
    <div>
      <table>
        <tbody>
         { data?.getUsers?.map(user=>
           <td key={user.id}>{user.name}</td>
          )}
         
        </tbody>
     </table>
    </div>
  )
}

export default App
