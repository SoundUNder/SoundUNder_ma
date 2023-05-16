import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useQuery } from '@apollo/client'
import { GET_SONG_URL } from '../../services/audio/audioQueries'
import { useEffect, useRef, useState } from 'react'
import { Audio } from 'expo-av'
import playerStyles from './player.styles'

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
      sfId: parseInt(params.songId) +1 
    },
  })

  const [totalMilis, setTotalMilis] = useState()
  const [currentMilis, setCurrentMilis] = useState(0)
  const [shouldPlay, setShouldPlay] = useState(true)
  const [hasEnded, setHasEnded] = useState(false)

  //Hooks to allow slider movement
  const [moveSlider, setMoveSlider] = useState(false)

  // Ref to sound object for song reproduction
  const soundObject = useRef(new Audio.Sound())
  
  // Refs for slider responsiveness
  const thumbRef = useRef(<View />)
  const progressBarRef = useRef(<View />)

  // Adding behaviour to soundObject
  soundObject.current.setOnPlaybackStatusUpdate(status => {
    // Song needs to be loaded for every action we want to perform
    if (status.isLoaded) {
      if (!status.isPlaying && shouldPlay && !status.didJustFinish) {
        playSong()
      }
      else if (!shouldPlay) {
        pauseSong()
      }

      // Change button if song ends
      if (status.didJustFinish) {
        setHasEnded(true)
        setShouldPlay(false)
      }

      // If total millis is not set, set it
      if(!totalMilis) {
        setTotalMilis(status.durationMillis)
      }

      setCurrentMilis(status.positionMillis)
    }
  })

  // Effect to wait for the song to load
  useEffect(() => {

    if(!loading) {
      loadSound()
    }

    return () => {
      soundObject.current.unloadAsync()
    }

  }, [loading, soundObject])

  const loadSound= async () => {
    try {
      await soundObject.current.loadAsync(
        { uri: `${data?.streamSong?.SF_url_bucket_processed}outputlist.m3u8` },
        { shouldPlay: true, progressUpdateIntervalMillis: 1000 }
      )
    }
    catch(error){
      console.log(error)
    }
    
  }

  const playSong = async () => {
    try {
      // set position to 0 if song has ended
      if(hasEnded){
        setHasEnded(false)
        await soundObject.current.setPositionAsync(0)
      }

      await soundObject.current.playAsync()
    }
    catch(error) {
      console.log(error)
    }
  }

  const pauseSong = async () => {
    try {
      await soundObject.current.pauseAsync()
    }
    catch(error){
      console.log(error)
    }
  }

  const millisToMinutesAndSeconds = (millis) => {
    const minutes = parseInt(millis / 60000)
    const seconds = parseInt((millis % (60000 - 1)) / 1000)
    
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />

      <View
        style={{
          paddingHorizontal: 30,
          paddingTop: 60
        }}
      >
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

        <TouchableOpacity
          onPress={() => {
            if(hasEnded) {
              playSong()
            }
            setShouldPlay(play => !play)
          }}
          style={{
            padding: 12,
            backgroundColor: "#7B4FB4",
            width: 120,
            borderRadius: 6,
            alignSelf: "center",
            marginTop: 12,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: '#ffffff'
            }}
          >
            {shouldPlay ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>
        <Text>Current position: {millisToMinutesAndSeconds(currentMilis)}</Text>
        {/* slider */}
        <View
          style={{
            marginTop: 30,
            marginBottom: 30,
            backgroundColor: 'rgba(123, 79, 180, 0.2)',
            width: 330,
            marginHorizontal: 60,
            alignSelf: 'center',
            height: 10,
            borderRadius: 5,
            position: 'relative'
          }}
          onStartShouldSetResponder={evt => true}
          onResponderGrant={({ nativeEvent }) => {
            setMoveSlider(true)
            thumbRef.current.setNativeProps({
              transform: [{ translateX: nativeEvent.locationX-9 }]
            })
            progressBarRef.current.setNativeProps({
              width: nativeEvent.locationX+9
            })
          }}
          onResponderMove={({ nativeEvent }) => {
            thumbRef.current.setNativeProps({
              transform: [{ translateX: 
                nativeEvent.locationX-9 > 313
                ? 313
                : nativeEvent.locationX-9
              }]
            })
            progressBarRef.current.setNativeProps({
              width: nativeEvent.locationX+9 > 330
                ? 330
                : nativeEvent.locationX+9
            })
          }}
          onResponderRelease={async ({ nativeEvent }) => {
            const newMillis = nativeEvent.locationX*totalMilis/330
            setCurrentMilis(newMillis)
            thumbRef.current.setNativeProps({
              transform: [{ translateX: nativeEvent.locationX -9}]
            })
            progressBarRef.current.setNativeProps({
              width: nativeEvent.locationX+9
            })
            await soundObject.current.setPositionAsync(newMillis)
            setMoveSlider(false)
          }}
        >
          {/* thumb */}
          <View ref={thumbRef}
            style={
              moveSlider 
              ? playerStyles.progressThumb
              : playerStyles.progressThumbResponsive(currentMilis, totalMilis)
            }
          />
          {/* progress bar */}
          <View ref={progressBarRef}
            style={
              moveSlider
              ? playerStyles.progressBar
              : playerStyles.progressBarResponsive(currentMilis, totalMilis)
            }
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Player