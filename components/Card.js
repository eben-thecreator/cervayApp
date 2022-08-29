import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { colors } from "../colors";

/**
 * Custom Call to Large Button
 */
function Card(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.infoTab}>
        <Text style={styles.inputLabel}>{props.text}</Text>
        <MaterialCommunityIcons
          style={styles.icon}
          name={props.icon}
          size={35}
          color={colors.primaryColor}
        />
      </View>
    </TouchableOpacity>
  );
}
// ====================================================================

export { Card };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
  },
  icon: {
    right: 30,
  },
  infoTab: {
    flexDirection: "row",
    height: 70,
    width: "170%",
    backgroundColor: "white",
    borderColor: "#180829",
    elevation: 10,
    marginHorizontal: 4,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    alignItems: "center",
    // justifyContent: "center",
  },

  inputLabel: {
    flex: 2 / 4,
    // width: "60%",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    left: 30,
  },
});
