import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ListaProdutos from "./components/ListaProdutos/ListaProdutos";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form/>

<ListaProdutos/>
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
