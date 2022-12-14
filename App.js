import { StatusBar, SafeAreaView, View, StyleSheet} from 'react-native';
import Basket from './src/screens/basket';
import mock from './src/mocks/basket';

import { useFonts, 
        Montserrat_400Regular,
        Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
//import AppLoading from 'expo-app-loading';



export default function App() {

  const [fontesCarregadas] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontesCarregadas) {
    return <View />
  }
  return (
    <SafeAreaView style={ styles.safeAreaView }>
      <StatusBar />
      <Basket {...mock}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  }
});