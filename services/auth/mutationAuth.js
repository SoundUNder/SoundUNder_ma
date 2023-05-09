import { gql } from '@apollo/client'

export const SIGNUP = gql`
mutation RegisterUser(
  $gender: String!, 
  $birthdate: String!, 
  $username: String!, 
  $password: String!, 
  $email: String!) {
  registerUser(
    gender: $gender, 
    birthdate: $birthdate, 
    username: $username, 
    password: $password, 
    email: $email) {
    user {
      birthdate
      email
      gender
      username
    }
    token
  }
}
`

export const SIGNIN = gql`
mutation LoginUser($password: String!, $email: String!) {
  loginUser(password: $password, email: $email) {
    token
  }
}
`

export const UPDATEPROFILE = gql`
mutation UpdateUser(
  $password: String, 
  $username: String,
  $gender: String, 
  ) {
  updateUser(
    password: $password, 
    username: $username,
    gender: $gender 
    ) {
    id
    email
    username
    birthdate
    gender
  }
}
`