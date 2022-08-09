import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalItemsText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: "crimson",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalItemsText: {
    padding: 8,
    color: "white",
  },
});
