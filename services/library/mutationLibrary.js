import { gql } from '@apollo/client'

export const NEWLIBRARY = gql`
mutation CreateLibrary($owner: String!, $name: String!) {
    createLibrary(owner: $owner, name: $name) {
      Name
      id
      owner
    }
  }
`

export const NEWPLAYLIST = gql`
mutation CreatePlaylist($data: AddPlaylistInput!) {
  createPlaylist(data: $data) {
    id
    name
    description
    library_id
    songs
  }
}
`

export const UPDATELIBRARY = gql`
mutation UpdateLibrary($owner: String!, $name: String!, $updateLibraryId: String!) {
  updateLibrary(owner: $owner, name: $name, id: $updateLibraryId) {
    id
    Name
    owner
  }
}
`

export const UPDATEPLAYLIST = gql`
mutation UpdatePlaylist($data: AddPlaylistUpdateInput!) {
  updatePlaylist(data: $data) {
    id
    name
    description
    library_id
    songs
  }
}
`

export const DELETELIBRARY = gql`
mutation DeleteLibrary($deleteLibraryId: String!) {
  deleteLibrary(id: $deleteLibraryId)
}
`

export const DELETEPLAYLIST = gql`
mutation DeletePlaylist($deletePlaylistId: String!) {
  deletePlaylist(id: $deletePlaylistId)
}
`