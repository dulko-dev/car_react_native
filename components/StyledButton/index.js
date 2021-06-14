import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = (props) => {
  
const type = props.type;

const backGround = type === 'primary' ? 'white' : 'black';

  
    return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor:backGround}]}
        onPress={() => console.warn("clicked on button")}
      >
        <Text style={styles.text}>custom order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
