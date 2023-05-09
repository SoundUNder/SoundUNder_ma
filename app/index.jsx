import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router'

const Home = () => {
  // This below is the object that will allow us to
  // change routes
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />

      <View>
        <Text>Hello, this should be the main page!</Text>
        <TouchableOpacity
          onPress={() => router.push('/signin')}
          style={{
            padding: 12,
            backgroundColor: '#7B4FB4',
            width: 100,
            borderRadius: 6,
            alignSelf: 'center',
            marginTop: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#ffffff',
            }}
          >
            Go to login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/home')}
          style={{
            padding: 12,
            backgroundColor: '#7B4FB4',
            width: 100,
            borderRadius: 6,
            alignSelf: 'center',
            marginTop: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#ffffff',
            }}
          >
            Go to Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/player/1')}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#7B4FB4',
            width: 120,
            borderRadius: 6,
            alignSelf: 'center',
            marginTop: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Go to player with song ID 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/player/2')}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#7B4FB4',
            width: 120,
            borderRadius: 6,
            alignSelf: 'center',
            marginTop: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Go to player with song ID 2</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home
