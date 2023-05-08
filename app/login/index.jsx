import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router'

const Login = () => {
  // * This is how routes are done! create a folder that matches the route and place
  // * the necessary files inside (either an index or the file used for dynamic routing).
  // * For an example of dynamic routing see player, and be careful: the route name needs
  // * to be an exact match of the folder's name

  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />

      <View>
        <Text>Hello, this should be the login page!</Text>

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
          <Text>Back to home</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Login