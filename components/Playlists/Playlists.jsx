import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

const PlayLists = ({ data, loading, user, logOut }) => {

  const router = useRouter()

  return (
    <View>
      <Text style={homeStyles.heading}>Hola {user}!</Text>
      <Text style={{marginBottom: 20}}>Estas son tus listas de reproducción:</Text>
      {
        loading || !data
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
        onPress={logOut}
        style={{
          padding: 12,
          borderWidth: 1,
          borderColor: "#7B4FB4",
          width: 120,
          borderRadius: 6,
          alignSelf: "center",
          marginTop: 60,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Cierra sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PlayLists