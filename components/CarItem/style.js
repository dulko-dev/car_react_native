import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    color: "#7a7a7a",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  btnContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  subtitleUnderline: {
    textDecorationLine: "underline",
  },
});

export default styles;
