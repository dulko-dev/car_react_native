import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from "./cars";
import CartItem from "../CarItem";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CartItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            subTitleUnderline={item.subTitleUnderline}
          />
        )}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
