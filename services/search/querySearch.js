import { gql } from '@apollo/client'

export const SEARCH_SONGS = gql`
query SearchSongs($value: String) {
  searchSongs(value: $value) {
    album
    author
    idSong
    name
  }
}
`
export const SEARCH_SONGSLIST = gql`
query SearchListById($searchListByIdId: [Float!]) {
  searchListById(id: $searchListByIdId) {
    id
    author
    name
    album
  }
}
`