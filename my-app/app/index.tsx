import { router, useRootNavigationState } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { LIGHT_COLORS } from "../styles/colors/color";
import { asyncStorageService } from "../services/async-storage-service";

export default function AppPage() {
  const navigationState = useRootNavigationState();

  useEffect(() => {
    const checkToken = async () => {
        const token = await asyncStorageService.get();
        if (token) {
            router.navigate("/welcome");
        } else {
            router.navigate("/user-management/login");
        }
    };

    if (navigationState?.key) {
        checkToken();
    }
}, [navigationState]);

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={LIGHT_COLORS.lightBlue} />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: LIGHT_COLORS.white,
  },
});
