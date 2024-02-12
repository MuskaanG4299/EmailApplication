
import { StatusBar } from 'expo-status-bar';
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text,Image, View,TouchableNativeFeedback,FlatList ,TouchableWithoutFeedback, Pressable} from 'react-native';
import Block from './components/Mail';
export default function App() {


   let  DATA =require("../data/emails.json");
   return (
    <View style={styles.container}>

      <Text style={styles.header}>INBOXMATE</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) =>{return <Pressable  onPress={() => router.push(`inbox/${item.id}`)}>
        <Block header={item.subject} body={item.content}/>
      </Pressable>;}}
        keyExtractor={(e)=>e.id}
        ></FlatList>
     
     <Pressable
        testID="send"
        accessibilityLabel="send"
        onPress={() => {router.push("inbox/SendMail"); console.log("hi")}}
        style={styles.plusContainer}
      >
        <View style={styles.plusIconContainer}>
          <Image
            style={styles.plusIcon}
            source={require("../assets/plus2.com.png")}
          />
        </View>
      </Pressable>
      <StatusBar style="auto" />
    
    
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#F0F8FF",
    fontSize: 30,
  },
  header: {
    fontSize: 20,
    marginLeft: 15,
    fontFamily: "serif",
    fontWeight: "bold",
    textAlign: "center",
  },
  plusContainer: {
    position:"absolute",
    right: 30,
    bottom: 30,
    zIndex: 1,
  },
  plusIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 2,
  },
  plusIcon: {
    position:"absolute",
    width: 60,
    height: 60,
     },
});
