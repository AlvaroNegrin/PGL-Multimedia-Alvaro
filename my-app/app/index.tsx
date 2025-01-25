import { router, useRootNavigationState } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { LIGHT_COLORS } from "../styles/colors/color";

export default function AppPage() {
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (navigationState?.key) {
      router.navigate("/user-management/register");
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
