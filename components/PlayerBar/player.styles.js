import { StyleSheet } from 'react-native';

playerStyles = StyleSheet.create({
  progressThumb: {
    position: 'absolute',
    top: -4,
    left: 9,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#7B4FB4'
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7B4FB4'
  },
})

export default playerStyles