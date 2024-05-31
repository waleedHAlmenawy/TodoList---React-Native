import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Task({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftItems}>
        <View style={styles.square}></View>
        <Text style={styles.title}>{text}</Text>
      </View>
      <View style={styles.rightItems}>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    elevation: 2,
  },
  leftItems: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  title: {
    maxWidth: "80%",
  },
  rightItems: {},
  circle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#55BCF6",
    borderRadius: 5,
  },
});
