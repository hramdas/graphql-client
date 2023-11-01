import { gql } from "@apollo/client";

export const getUsers = gql(`
query getUsers($limit: Int=10, $page : Int=0){
  getUsers(limit:$limit,page:$page){
    id
    name
  }
}
`)