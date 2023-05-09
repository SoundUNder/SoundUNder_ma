import { gql } from '@apollo/client'

export const PROFILE = gql`
query MyAccount {
  myAccount {
    id
    email
    username
    birthdate
    gender
    token
  }
}
`