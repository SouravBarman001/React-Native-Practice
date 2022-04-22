import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Alert, ActivityIndicator,ScrollView, FlatList, TouchableOpacity,Image } from 'react-native';


// const Data =[
 
//   {id: '1',name: 'souarv'},
//   {id: '2',name: 'rana'},
//   {id: '3',name: 'razu'},
//   {id: '4',name: 'nayeem'},
//   {id: '5',name: 'alomgir'},
//   {id: '6',name: 'alif'},
//   {id: '7',name: 'nadia'},
//   {id: '8',name: 'mitu'},
//   {id: '8',name: 'ripa'},
//   {id: '9',name: 'rintu'},
//   {id: '10',name: 'sunan'},
//   {id: '12',name: 'redwan'},
//   {id: '13',name: 'tazbir'},
//   {id: '14',name: 'tazbir'},
//   {id: '15',name: 'tazbir'},
//   {id: '16',name: 'tazbir'},
//   {id: '17',name: 'tazbir'}
// ]


export default function App() {
  return ( 
    <View style={styles.container}>
     
      {/* <FlatList
        data = {Data}
        renderItem = {({ item })=> <TouchableOpacity onPress={()=>{console.log("item clickd",item.id)}}>

        <Text style={{fontSize:20,marginTop:60,padding:20}}>{item.name} </Text>
        </TouchableOpacity>}
        keyExtractor={item=>console.log(item.id)}
        showsVerticalScrollIndicator={false}
        onRefresh={()=>{console.log("Refreshing")}}
        refreshing={false}

        // horizontal
        // showVerticalScrollIndicator={true}
      /> */}

    <Image source={require('./assets/sourav2.jpg')} 
      style={{width:200, height:200}}
    />



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

