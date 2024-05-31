import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useRef, useState } from "react";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Today's Tasks</Text>
      <ScrollView>
        <View style={styles.items}>
          {tasks.map((task, i) => (
            <Task text={task} key={i} />
          ))}
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={[styles.inputTask, styles.inputBorder]}
          placeholder="Write a Task"
          onChangeText={(text) => setTaskText(text)}
          ref={inputRef}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            taskText ? setTasks((preTasks) => [...preTasks, taskText]) : "";
            setTaskText("");
            Keyboard.dismiss();
            inputRef.current?.clear();
          }}
        >
          <View style={[styles.addWrapper, styles.inputBorder]}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  wrapper: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  textTitle: {
    paddingTop: 94,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    marginBottom: 100,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputTask: {
    backgroundColor: "#FFF",
    paddingHorizontal: 86,
    paddingVertical: 15,
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 52,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    fontSize: 32,
    color: "#C0C0C0",
  },

  inputBorder: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
});
