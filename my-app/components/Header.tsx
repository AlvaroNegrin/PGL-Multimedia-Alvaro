import {StyleSheet, Text, View } from "react-native";
import { LIGHT_COLORS } from "../styles/colors/color";

const Header = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>App-Multimedia-Alvaro</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: LIGHT_COLORS.lightPink,
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pressable: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  pressableText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});