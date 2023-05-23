import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useRef, useState } from 'react'
import playerStyles from './player.styles'
import { ICONS } from '../../assets/constants/constants'

const PlayerBar = ({ onSongEnd, loading, soundObject }) => {

  const [totalMilis, setTotalMilis] = useState()
  const [shouldPlay, setShouldPlay] = useState(true)
  const [hasEnded, setHasEnded] = useState(false)

  //Hooks to allow slider movement
  const [moveSlider, setMoveSlider] = useState(false)

  
  // Refs for slider responsiveness
  const thumbRef = useRef(<View />)
  const progressBarRef = useRef(<View />)
  const currentTimeRef = useRef(<TextInput />)

  // Adding behaviour to soundObject
  soundObject.current.setOnPlaybackStatusUpdate(status => {
    // Song needs to be loaded for every action we want to perform
    if (status.isLoaded && !loading) {
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
      if(!totalMilis || totalMilis !== status.durationMillis) {
        setTotalMilis(status.durationMillis)
      }

      if (!loading && currentTimeRef?.current && status?.positionMillis) {
        currentTimeRef.current.setNativeProps({
          text: millisToMinutesAndSeconds(status.positionMillis)
        })
      }

      if(!moveSlider && !loading && thumbRef?.current && progressBarRef?.current && status?.positionMillis) {
        thumbRef.current.setNativeProps({
          transform: [{ translateX: 290*(status.positionMillis/totalMilis) - 9}]
        })
        progressBarRef.current.setNativeProps({
          width: 290*(status.positionMillis/totalMilis) + 9
        })
      }
    }
  })

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
    
    return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  }

  return (

    <View>
    
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 24
        }}
      >
        {/* Time indicators */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 290,
          paddingLeft: 5,
          paddingBottom: 12
        }}>
          <TextInput
            ref={currentTimeRef}
            style={{
              textAlignVertical: 'center',
            }}
            pointerEvents={'none'}
            defaultValue={'00:00'}
          />
          <Text
            style={{
              textAlignVertical: 'center',
            }}
            pointerEvents={'none'}
          >
            {millisToMinutesAndSeconds(totalMilis)}
          </Text>
        </View>
        
        {/* slider */}
        <View
          style={{
            backgroundColor: 'rgba(123, 79, 180, 0.2)',
            width: 290,
            marginLeft: 5,
            alignSelf: 'center',
            height: 10,
            borderRadius: 5,
            position: 'relative',
          }}
          onStartShouldSetResponder={evt => true}
          onResponderGrant={({ nativeEvent }) => {
            setMoveSlider(true)
            thumbRef.current.setNativeProps({
              transform: [{ translateX: nativeEvent.locationX }]
            })
            progressBarRef.current.setNativeProps({
              width: nativeEvent.locationX
            })
          }}
          onResponderMove={({ nativeEvent }) => {
            thumbRef.current.setNativeProps({
              transform: [{ translateX: 
                nativeEvent.locationX-9 > 273
                ? 273
                : nativeEvent.locationX-9
              }]
            })
            progressBarRef.current.setNativeProps({
              width: nativeEvent.locationX+9 > 290
                ? 290
                : nativeEvent.locationX+9
            })
          }}
          onResponderRelease={async ({ nativeEvent }) => {
            const newMillis = nativeEvent.locationX*totalMilis/290
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
              playerStyles.progressThumb
            }
          />
          {/* progress bar */}
          <View ref={progressBarRef}
            style={
              playerStyles.progressBar
            }
            />
        </View>
        
      </View>
      
      <TouchableOpacity
        onPress={() => {
          if(hasEnded) {
            playSong()
          }
          setShouldPlay(play => !play)
        }}
        style={{
          padding: 24,
          backgroundColor: "#7B4FB4",
          width: 48,
          height: 48,
          borderRadius: 24,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
        <Image
        source={
          hasEnded
          ? ICONS.replay
          : shouldPlay 
            ? ICONS.pause 
            : ICONS.play
        }
        resizeMode={'contain'}
        style={{
          height: 24,
          width: 24
        }}
      />
      </TouchableOpacity>
    </View>
  )
}

export default PlayerBar