import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleChangeNumber = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const handleResetNumber = () => {
    setEnteredNumber("");
  };

  const handleConfirmInput = (input) => {
    const nextInput = parseInt(enteredNumber);

    if (isNaN(nextInput) || nextInput <= 0) {
      Alert.alert(
        "Title: Invalid Number",
        "Message: Number has to be between 1 and 99",
        [{ text: "okay", style: "destructive", onPress: handleResetNumber }]
      );
      return;
    }

    onPickNumber(nextInput);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={handleChangeNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleResetNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 4, // Android styling
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
