import { Text, View,StyleSheet} from "react-native";

export default function History(){
  return(
    <View style={styles.container}>
      <Text style={styles.textMain}>History</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'column'
  },
  textMain:{
    fontSize:20,
     color:'#002fff'
    
  },


})
