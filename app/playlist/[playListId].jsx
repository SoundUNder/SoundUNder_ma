import { useEffect, useRef, useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { Stack, useSearchParams } from 'expo-router'
import { View, SafeAreaView, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { GETPLAYLIST } from '../../services/library/queryLibrary'
import PlayerBar from '../../components/PlayerBar/PlayerBar'
import { SEARCH_SONGSLIST } from '../../services/search/querySearch'
import playListStyles from './playList.styles'
import { GET_SONG_URL } from '../../services/audio/audioQueries'
import { Audio } from 'expo-av'

const PlayList = () => {
  const params = useSearchParams()
  const soundObject = useRef(new Audio.Sound())

  const { data, loading } = useQuery(GETPLAYLIST, {
    variables: { 
      getPlaylistId: params.playListId
    },
  })

  const [getSongsInfo, {data: songsData, loading: songsLoading}] = useLazyQuery(SEARCH_SONGSLIST)

  const [getSongURL, { loading: loadingURL, data: dataURL }] = useLazyQuery(GET_SONG_URL)

  const [currentSongId, setCurrentSongId] = useState()

  // Set first song once the playlist's info loads, and get songs info
  useEffect(() => {
    if (data?.getPlaylist?.songs) {
      const intIdList = data.getPlaylist.songs.map(song => parseInt(song))

      getSongsInfo({
        variables: { 
          searchListByIdId: intIdList
        },
      }).then(() => {
        setCurrentSongId(parseInt(data?.getPlaylist?.songs[0]))
      })
    }

    return () => {
      soundObject.current.unloadAsync()
    }
  }, [data])

  // fetch songURL once songId has been set and unload previous media
  useEffect(() => {
    if(currentSongId) {
      soundObject.current.unloadAsync()

      getSongURL({
        variables: { 
          sfId: currentSongId
        },
      })
    }
  }, [currentSongId])

  // loadSource once data is retrieved
  useEffect(() => {
    if(dataURL?.streamSong) {
      loadSound()
    }
  }, [dataURL])

  const loadSound= async () => {
    try {
      await soundObject.current.loadAsync(
        { uri: `${dataURL?.streamSong?.SF_url_bucket_processed}outputlist.m3u8` },
        { shouldPlay: true, progressUpdateIntervalMillis: 1000 }
      )
    }
    catch(error){
      console.log(error)
    }
    
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen 
        options={{
          headerTitle: 'Playlist'
        }}
      />

      <View
        style={{
          paddingHorizontal: 30,
          paddingTop: 30
        }}
      >
        <View>
          {
            loading || songsLoading
              ? <ActivityIndicator size='large' color={"#74CC08"} />
              : <>
                  <Text style={{
                    fontSize: 24,
                    marginRight: 10,
                    marginBottom: 16
                  }}>
                    {data?.getPlaylist?.name}
                  </Text>
                  <FlatList 
                    data={songsData?.searchListById ?? []}
                    renderItem={({ item }) => (
                      <TouchableOpacity 
                        style={playListStyles.songContainer(currentSongId, parseInt(item.id))}
                        onPress={() => setCurrentSongId(parseInt(item.id))}
                      >
                        <Text style={playListStyles.songTitle}>{item.name}</Text>
                        <Text style={playListStyles.songArtist}>{item.author}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    style={{height: 500, overflow: 'scroll'}}
                  />
                </>
          }
          
        </View>
        { !loadingURL && dataURL?.streamSong && 
          <PlayerBar currentSongId={currentSongId} url={dataURL?.streamSong?.SF_url_bucket_processed} soundObject={soundObject}/> 
        }
      </View>

    </SafeAreaView>
  )
}

export default PlayList