import { Redirect } from "expo-router";
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";


export default function AppPage() {
  return (
    <View style={styles.container}>
      <Redirect href={"/hobbies"}></Redirect>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
});
