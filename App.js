import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Alert, ActivityIndicator,ScrollView } from 'react-native';


const Data =[
 
  {id: '1',name: 'souarv'},
  {id: '2',name: 'rana'},
  {id: '3',name: 'razu'},
  {id: '4',name: 'nayeem'},
  {id: '5',name: 'alomgir'},
  {id: '6',name: 'alif'},
  {id: '7',name: 'nadia'},
  {id: '8',name: 'mitu'},
  {id: '8',name: 'ripa'},
  {id: '9',name: 'rintu'},
  {id: '10',name: 'sunan'},
  {id: '12',name: 'redwan'},
  {id: '13',name: 'tazbir'},
  {id: '13',name: 'tazbir'},
  {id: '13',name: 'tazbir'},
  {id: '13',name: 'tazbir'},
  {id: '13',name: 'tazbir'}
]


export default function App() {
  return (
    <View style={styles.container}>
     
     <ScrollView showsVerticalScrollIndicator={false}>

     {
       Data.map(item =><Text style={{fontSize:40}}>{item.name}</Text>)
     }
     </ScrollView>

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

