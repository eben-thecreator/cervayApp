import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../colors";
import CustomButton from "./CustomButton";
import InputBar from "../components/InputBar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Traverse</Text>
      <Text style={styles.secondaryText}>Traverse</Text>
      <Text style={styles.label}>Instrument Station</Text>
      <InputBar
        style={styles.stationField}
        placeholder="Instrument station"
        width={400}
      />
      {/* Row 1 */}
      <View style={styles.row}>
        <InputBar style={styles.stationField} placeholder="Description" />
        <Text style={styles.desc}>LL  </Text>
        <InputBar style={styles.stationField} placeholder="Bearing" />
      </View>
      {/* Row 2 */}
      <View style={styles.row}>
        <InputBar style={styles.stationField} placeholder="Description" />
        <Text style={styles.desc}>LL  </Text>
        <InputBar style={styles.stationField} placeholder="Bearing" />
      </View>
      {/* Row 3 */}
      <View style={styles.row}>
        <InputBar style={styles.stationField} placeholder="Description" />
        <Text style={styles.desc}>RR  </Text>
        <InputBar style={styles.stationField} placeholder="Bearing" />
      </View>
      {/* Row 4 */}
      <View style={styles.row}>
        <InputBar style={styles.stationField} placeholder="Description" />
        <Text style={styles.desc}>RR  </Text>
        <InputBar style={styles.stationField} placeholder="Bearing" />
      </View>
      {/* ================================================================= */}
      <View style={styles.buttonsTab}>
      <CustomButton color={colors.primaryColor} type="outline" text={"Back"} />
      <CustomButton color={colors.primaryColor} type="outline" text={"Next"} />
      </View>
      <CustomButton color={colors.primaryColor} text={"Done"} width={370} />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  stationField: {
    alignSelf: "flex-start",
  },
  desc: {
    color: "black",
    fontFamily: "SSBold",
    fontSize: 25,
    alignSelf: "center",
    alignItems: 'center'
  },
  head: {
    color: colors.primaryColor,
    fontFamily: "SSBold",
    fontWeight: "700",
    fontSize: 40,
    alignSelf: "flex-start",
  },

  label: {
    color: "black",
    fontFamily: "SSRegular",
    fontSize: 35,
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonsTab:{
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: colors.primaryColor,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: colors.secondaryColor,
    marginTop: 5,
    borderColor: colors.primaryColor,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: colors.primaryColor,
    fontWeight: "700",
    fontSize: 16,
  },
});
