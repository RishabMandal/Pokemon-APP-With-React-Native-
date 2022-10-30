import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pokemon from './Pokemon';

export default function App() {
  return (
    <View className='bg-black' style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Pokemon/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '121212',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
