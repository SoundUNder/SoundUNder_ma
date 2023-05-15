import { gql } from '@apollo/client'

// * As you can see, apollo client config is the same

export const GET_SONG_URL = gql`
query GetSongURL($sfId: Float!) {
  streamSong(SF_id: $sfId) {
    SF_url_bucket_processed
  }
}
`