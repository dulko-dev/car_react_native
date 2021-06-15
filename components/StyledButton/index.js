import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = ({ onPress, content, type }) => {
  const backGround = type === "primary" ? "black" : "#e0e0e0";
  const textColor = type === "primary" ? "#e0e0e0" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backGround }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
