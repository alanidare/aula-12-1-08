import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Form} from "./components/Form/Form";
import {Form} from "./components/Header/Header";


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form/>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
