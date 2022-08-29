import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const GRAY = "#BFBDBD";
const InputBar = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      // alignItems: "center",
    },
    textfield: {
      backgroundColor: GRAY,
      color: "black",
      fontSize: 20,
      width: props.width ? props.width : 200,
      height: 70,
      borderRadius: 10,
      padding: 10,
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textfield}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCorrect
        caretHidden={false}
        editable={props.editable}
        placeholder={props.placeholder}
        multiline={props.multiline}
        keyboardType={props.dataType == "number" ? "decimal-pad" : "default"}
      />
    </View>
  );
};

export default InputBar;
