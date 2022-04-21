import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Name=(props)=>{
return (

  <View>
      <Text>Name:{props.name}  </Text>
      <Text>Name:{props.age}  </Text>

  </View>

)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Name name="Sourav" age="29"></Name>
      <StatusBar style="auto" />
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
