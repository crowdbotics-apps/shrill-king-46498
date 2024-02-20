plaintext;
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Button, Text, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleLogin = () => {
    console.log("Login pressed", {
      username,
      password,
      dateOfBirth
    });
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === "ios");
    setDateOfBirth(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
        <TouchableOpacity onPress={showDatepicker} style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>Date of Birth: {dateOfBirth.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && <DateTimePicker testID="dateTimePicker" value={dateOfBirth} mode="date" display="default" onChange={onChangeDate} />}
        <Button title="Login" onPress={handleLogin} />
      </View>
      <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8FC"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#828AB0",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  datePickerButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#DDD",
    borderRadius: 5
  },
  datePickerText: {
    textAlign: "center"
  },
  footer: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0"
  }
});
export default LoginScreen;