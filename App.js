import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './src/components/ButtonComponent';
import FormComponent from './src/components/FormComponent';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Pesquisa</Text>
      <FormComponent></FormComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:60,
  },
  h1:{
    letterSpacing:4,
    width:300,
    padding:10,
    fontSize: 40,
    textAlign:'center',
    backgroundColor:'#003f69',
    color:'white',
    borderRadius:24
  }
});
