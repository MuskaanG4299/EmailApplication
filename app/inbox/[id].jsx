import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
export default function Users() {
  const allData = require("../../data/emails.json");

  const id = useLocalSearchParams().id;
  //console.log(allData);
  const myData = allData.filter((e) => {
    return e.id == String(id);
  });
 // console.log(myData);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{myData[0].subject}</Text>
      </View>

      <View>
        <Text style={styles.reciever}>From: {myData[0].sender}</Text>
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.main}>{myData[0].content}</Text>
      </ScrollView>
      
      <View style={styles.reply}>
      <TouchableOpacity
        testID="back"
        accessibilityLabel="back"
        onPress={() => {
          router.back();
        }}
      >
        <View style={styles.sendButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Reply</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        testID="back"
        accessibilityLabel="back"
        onPress={() => {
          router.back();
        }}
      >
        <View style={styles.sendButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Resend</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        testID="back"
        accessibilityLabel="back"
        onPress={() => {
          router.back();
        }}
      >
        <View style={styles.sendButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Forward</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  sender: {
    fontSize: 16,
    color: "#666",
  },
  body: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  reply: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  sendButton: {
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    borderWidth: 2,
    borderColor: "#007bff", // Bootstrap primary color
    backgroundColor: "#007bff", // Bootstrap primary color
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff", // White text color
  },
});
