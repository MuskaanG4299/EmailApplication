import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Plus from './components/Plus';
import Block from './components/Block';
export default function App() {


  let mails = [1,2,3,4];
  return (
    <View style={styles.container}>

      {/* <Text style={styles.header}>EDUMAIL</Text>
      <ScrollView>
      {mails.map((e)=>{return <Block key={e} />})}
      </ScrollView>
     
      <StatusBar style="auto" />
      <Plus/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    backgroundColor: '#fff',
    fontSize:30,
    
  
  },
  header:{
    fontSize:30,
    marginLeft:15
  }
});
