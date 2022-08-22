import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../colors";
import CustomButton from "./CustomButton";
import InputBar from "../components/InputBar";
// import fs from "fs/promises"

const HomeScreen = () => {
  const [station, setStation] = useState("");
  const [traverseCount, setTraverseCount] = useState(0);
  const [description_1, setDescription_1] = useState("");
  const [description_2, setDescription_2] = useState("");
  const [description_3, setDescription_3] = useState("");
  const [description_4, setDescription_4] = useState("");

  function next(){
    setTraverseCount(traverseCount+1)
    alert(traverseCount)
   const desc_list = {
      id: traverseCount, 
      desc_1: description_1,
      desc_2: description_2,
      desc_3: description_3,
      desc_4: description_4,
    }
    // fs.appendFile('../data/traverse-data.json', desc_list)
  }
  function back(){
    alert("Pressed back")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Traverse</Text>
      <Text style={styles.secondaryText}>Traverse</Text>
      <Text style={styles.label}>Instrument Station</Text>
      <InputBar
        style={styles.stationField}
        placeholder="Instrument station"
        value={station}
        onChangeText={(text) => setStation(text)}
        width={400}
      />
      {/* Row 1  - Backsite a*/}
      <View style={styles.row}>
        <InputBar
          style={styles.stationField}
          placeholder="Description"
          value={description_1}
          onChangeText={(text) => setDescription_1(text)}
        />
        <Text style={styles.desc}>LL </Text>
        <InputBar
          style={styles.stationField}
          placeholder="Bearing"
          dataType="number"
        />
      </View>
      {/* Row 2 - Foresite a*/}
      <View style={styles.row}>
        <InputBar
          style={styles.stationField}
          placeholder="Description"
          value={description_2}
          onChangeText={(text) => setDescription_2(text)}
        />
        <Text style={styles.desc}>LL </Text>
        <InputBar
          style={styles.stationField}
          placeholder="Bearing"
          dataType="number"
        />
      </View>
      {/* Row 3 - foresite b */}
      <View style={styles.row}>
        <InputBar
          style={styles.stationField}
          placeholder="Description"
          value={description_3}
          onChangeText={(text) => setDescription_3(text)}
        />
        <Text style={styles.desc}>RR </Text>
        <InputBar
          style={styles.stationField}
          placeholder="Bearing"
          dataType="number"
        />
      </View>
      {/* Row 4  - backsite b*/}
      <View style={styles.row}>
        <InputBar
          style={styles.stationField}
          placeholder="Description"
          value={description_4}
          onChangeText={(text) => setDescription_4(text)}
        />
        <Text style={styles.desc}>RR </Text>
        <InputBar
          style={styles.stationField}
          placeholder="Bearing"
          dataType="number"
        />
      </View>
      {/* ================================================================= */}
      <View style={styles.buttonsTab}>
        <CustomButton
          color={colors.primaryColor}
          type="outline"
          text={"Back"}
          width='90%'
          onclick={back}

          />
        <CustomButton
          color={colors.primaryColor}
          type="outline"
          text={"Clear All"}
          width='90%'
          onclick={() => {
            // alert("Confirm to clear all field inputs")
            
            
            setDescription_1("")
            setDescription_2("")
            setDescription_3("")
            setDescription_4("")
          }}
          />
        <CustomButton
          color={colors.primaryColor}
          type="outline"
          text={"Next"}
          width='90%'
          onclick={next}
        />
      </View>
      <CustomButton
        color={colors.primaryColor}
        text={"Done"}
        width={370}
        onclick={() => {
          alert([
            station,
            description_1,
            description_2,
            description_3,
            description_4,
          ]);
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  stationField: {
    alignSelf: "flex-start",
  },
  desc: {
    color: "black",
    fontFamily: "SSBold",
    fontSize: 25,
    alignSelf: "center",
    alignItems: "center",
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
  buttonsTab: {
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal:5,
    marginTop: 20,
    justifyContent: 'space-around'
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
