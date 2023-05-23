import { StyleSheet } from 'react-native';

playListStyles = StyleSheet.create({
  songContainer: (currentId, id) => ({
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: currentId === id ? 'rgba(150, 95, 221, 0.1)' :'rgba(150, 95, 221, 0.05)',
    borderColor: currentId === id ? 'rgba(84, 147, 8, 0.7)' : 'transparent',
    borderWidth: currentId === id ? 1 : 0,
    borderStyle: 'solid',
    marginBottom: 12,
    gap: 8,
    borderRadius: 8
  }),
  songTitle: {
    fontSize: 18
  },
  songArtist: {
    color: 'rgba(84, 147, 8, 0.7)'
  }
})

export default playListStyles