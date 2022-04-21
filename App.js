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
      <Name style={{fontSize:20}} name="Sourav" age="29" ></Name>
      <Text style={{fontSize:20}} onPress={()=>{console.log("click sourav")}} >click button</Text>
      <Text numberOfLines={3} selectable>Flex Dimensions
       Use flex in a component's style to have the component expand and shrink dynamically based on available space. Normally you will use flex: 1, which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings.</Text>
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
