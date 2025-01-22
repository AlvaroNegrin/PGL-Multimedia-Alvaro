import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LIGHT_COLORS } from "../styles/colors/color";
import { useNavigation } from "expo-router";

const Header = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
      (navigation as any).openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>App-Multimedia-Alvaro</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: LIGHT_COLORS.lightPink,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  menuButton: {
    marginRight: 10,
    padding: 5,
  },
  menuText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});