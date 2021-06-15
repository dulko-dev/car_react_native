import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../StyledButton";

const CartItem = ({ title, subTitle, image, subTitleUnderline }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
        <Text style={styles.subtitleUnderline}>{subTitleUnderline}</Text>
      </View>

      <View style={styles.btnContainer}>
        <StyledButton
          type="primary"
          content={"First Button"}
          onPress={() => console.warn("clicked on first button")}
        />
        <StyledButton
          type="secondary"
          content={"Second Button"}
          onPress={() => console.warn("clicked on second button")}
        />
      </View>
    </View>
  );
};

export default CartItem;
