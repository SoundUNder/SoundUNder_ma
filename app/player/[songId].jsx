import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useQuery } from '@apollo/client'
import { GET_SONG_URL } from '../../services/audio/audioQueries'
import { useEffect } from 'react'

const Player = () => {

  // * This file is the example as to how to set a dynamic route:
  // * the file created in the route folder needs to contain the
  // * param's name in between square brackets "[]", to later be
  // * accessed using the "useSearchParams" hook

  const router = useRouter()
  // This below is the object that will allow us to
  // use the route's params
  const params = useSearchParams()
  // TODO: check call
  // * And, the use of the apollo client's hooks are the same
  const { loading, error, data } = useQuery(GET_SONG_URL, {
    variables: { 
      sfId: parseInt(params.songId) 
    },
  })

  // Effect to wait for the song to load
  useEffect(() => {
    if(!loading) {
      console.log(data)
      console.log(error)
    }
  }, [loading])

  console.log(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />

      <View>
        <Text>Hello, this should be the player with song id: {params.songId}!</Text>

        <TouchableOpacity
          onPress={() => router.push('/')}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "#7B4FB4",
            width: 120,
            borderRadius: 6,
            alignSelf: "center",
            marginTop: 12,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Go back home</Text>
        </TouchableOpacity>

        <Text
          style={{marginTop: 12}}
        >
          URL of song is: { loading ? 'Loading...' : data?.streamSong?.SF_url_bucket_processed}
        </Text>

      </View>

    </SafeAreaView>
  )
}

export default Player