import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// import background from './src/assets/images/background.jpg'

import LoginScreen from './src/screens/LoginScreen';
import PostsScreen from './src/screens/PostsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

import { useFonts } from 'expo-font';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  })

  if(!fontsLoaded){
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <PostsScreen /> */}
      {/* <LoginScreen /> */}
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative' ,
  },
  image: {

    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});