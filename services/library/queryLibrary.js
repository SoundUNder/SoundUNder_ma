import { gql } from '@apollo/client'

export const GETLIBRARIES = gql`
query GetLibraries {
    getLibraries {
      Name
      id
      owner
    }
  }
`

export const GETLIBRARY = gql`
query GetLibrary($getLibraryId: String!) {
  getLibrary(id: $getLibraryId) {
    Name
    id
    owner
  }
}
`


export const GETLIBRARYBYOWNER = gql`
query GetLibraryByOwner($owner: String!) {
  getLibraryByOwner(owner: $owner) {
    id
    Name
    owner
  }
}
`

export const GETPLAYLISTS = gql`
query GetPlaylists {
  getPlaylists {
    id
    name
    description
    library_id
    songs
  }
}
`

export const GETPLAYLISTSBYOWNER = gql`
query GetPlaylistByOwner($owner: String!) {
  getPlaylistByOwner(owner: $owner) {
    id
    name
    description
    library_id
    songs
  }
}
`

export const GETPLAYLIST = gql`
query GetPlaylist($getPlaylistId: String!) {
  getPlaylist(id: $getPlaylistId) {
    id
    name
    description
    library_id
    songs
  }
}
`