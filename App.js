import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <Text style={styles.section}>
        Open up App.js to start working on your app!
      </Text>

      <Button title="Button" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
  },
});
