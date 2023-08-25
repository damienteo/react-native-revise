import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (nextText) => {
    setGoal(nextText);
  };
  const addGoal = () => {
    setGoals((prevState) => [
      ...prevState,
      { text: goal, id: Math.random().toString() },
    ]);
    setGoal("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        <FlatList
          data={goals}
          renderItem={(data) => <GoalItem text={data.item.text} />}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
  goalsContainer: { flex: 5 },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
