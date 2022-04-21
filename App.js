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
      <Name  name="Sourav" age="29" ></Name>
      <Text style={textColor.baseText} onPress={()=>{console.log("click sourav")}} >click button</Text>
      <Text numberOfLines={3} selectable style={[textColor.baseText,textColor.titleText,back.backColor]}>Flex Dimensions
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

const textColor = StyleSheet.create({
  baseText: {
    fontFamily: "Arial",
    color:'red'
  },
  titleText: {
    fontWeight: "bold"
  }
});


const back = StyleSheet.create({
    backColor: {
      backgroundColor:'pink'
    }

});