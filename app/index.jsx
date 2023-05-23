import { View, SafeAreaView, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useQuery } from '@apollo/client'
import { GETPLAYLISTSBYOWNER } from '../services/library/queryLibrary'
import homeStyles from './home.styles'

const Home = () => {
  const router = useRouter()

  const {data, loading} = useQuery(GETPLAYLISTSBYOWNER, {
    variables: { 
      owner: "test_user"
    },
  })

  return (
    <SafeAreaView style={homeStyles.container}>
      <Stack.Screen 
        options={{
          headerTitle: 'SoundUNder'
        }}
      />

      <View>
        <Text style={homeStyles.heading}>Hola usuario!</Text>
        <Text style={{marginBottom: 20}}>Estas son tus listas de reproducción:</Text>
        {
          loading 
          ? <ActivityIndicator size='large' color={"#74CC08"} />
          : <FlatList 
            data={data?.getPlaylistByOwner}
            renderItem={({ item }) => (
              <TouchableOpacity style={homeStyles.playList} onPress={() => router.push(`/playlist/${item.id}`)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        }
        <TouchableOpacity
          onPress={() => router.push('/login')}
          style={{
            padding: 12,
            backgroundColor: "#7B4FB4",
            width: 100,
            borderRadius: 6,
            alignSelf: "center",
            marginTop: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#ffffff"
            }}
          >
            Go to login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/player/1')}
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
          <Text>Go to player with song ID 1</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={getMultipleLibraries}
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
          <Text>Test Libraries</Text>
        </TouchableOpacity> */}
      </View>

    </SafeAreaView>
  )
}

export default Home