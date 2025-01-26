import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LIGHT_COLORS } from "../styles/colors/color";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { asyncStorageService } from "../services/async-storage-service";

const Header = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
      (navigation as any).openDrawer();
  };

  const handleLogOut = () => {
    asyncStorageService.remove(asyncStorageService.KEYS.userToken)
    router.navigate("/")
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>App-Multimedia-Alvaro</Text>
      <Ionicons name="log-out-outline" style={styles.logoutButton} onPress={handleLogOut}/>
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
  logoutButton: {
    fontSize: 35,
    alignSelf: "center",
    marginLeft: "25%"
  }
});