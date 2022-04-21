import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Alert } from 'react-native';

// const Name=(props)=>{
// return (

//   <View>
//       <Text>Name:{props.name}  </Text>
//       <Text>Name:{props.age}  </Text>

//   </View>

// )
// }

const buttonClick=()=>
  Alert.alert(
    'Alert Title',
    'This is Alert Message',
    [
      {
        text:'Ask me later',
        onPress:()=>console.log('ask me later')
      },
      {
        text:'Cancel',
        onPress:()=>console.log('Cancel')
      },
      {
        text:'Ok',
        onPress:()=>console.log('Ok')
      }
    ]
   )


export default function App() {
  return (
    <View style={styles.container}>
     
      <Button title="Click me" onPress={() => buttonClick()} />

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

