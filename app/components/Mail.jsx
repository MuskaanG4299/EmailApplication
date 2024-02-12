import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Block(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.header}>
          {props.header}
        </Text>
        <Text numberOfLines={2} style={styles.body}>
          {props.body}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    padding: 10,
    marginTop: 10,
    borderWidth: 2,
    backgroundColor: "#fff", // White background color
    borderRadius: 8, // Rounded corners
    elevation: 2, // Shadow
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333", // Dark text color
  },
  body: {
    fontSize: 14,
    color: "#555", // Medium text color
  },
});
