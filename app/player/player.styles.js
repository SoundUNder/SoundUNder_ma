import { StyleSheet } from 'react-native';

playerStyles = StyleSheet.create({
  progressThumbResponsive: (currentMilis, totalMillis) => ({
    position: 'absolute',
    top: -4,
    left: 9,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#7B4FB4',
    transform: [{ translateX: totalMillis 
      ? 290*(currentMilis/totalMillis) -9 > 272
        ? 272
        : 290*(currentMilis/totalMillis) -9
      : 0
    }]
  }),
  progressThumb: {
    position: 'absolute',
    top: -4,
    left: 9,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#7B4FB4'
  },
  progressBarResponsive: (currentMilis, totalMillis) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 
      totalMillis 
      ? 290*(currentMilis/totalMillis) < 18
        ? 18
        : 290*(currentMilis/totalMillis) + 18 > 290
          ? 290
          : 290*(currentMilis/totalMillis) + 18
      : 18,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7B4FB4'
  }),
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