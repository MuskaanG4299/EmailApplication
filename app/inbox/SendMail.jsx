import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function Sender() {
  const [value, onChangeText] = useState("Useless Multiline Placeholder");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>COMPOSE</Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>To:</Text>
        <TextInput numberOfLines={1} style={styles.input} />
      </View>

      <View style={styles.messageWrapper}>
        <TextInput
          editable
          multiline
          textAlign="left"
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={[{ padding: 10 }, styles.messageInput]}
        />
      </View>

      <TouchableOpacity
        testID="back"
        accessibilityLabel="back"
        onPress={() => {
          router.back();
        }}
      >
        <View style={styles.sendButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  header: {
    marginBottom: 20,
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputWrapper: {
    backgroundColor: "#e9ecef",
    marginBottom: 15,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    paddingRight: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 16,
  },
  messageWrapper: {
    flex: 1,
    marginBottom: 15,
  },
  messageInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "#e9ecef",
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
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
