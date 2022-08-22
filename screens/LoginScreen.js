import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../colors";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountExist, setAccountState] = useState(false);

  async function handlePress() {
    setDoc(doc(db, "teams", "jades"), {
      name: "Jade Zone Coders",
      country: "Ghana",
    })
      .then(() => {
        // IF the promise is handled properly
        console.log("Data submitted");
      })
      .catch((error) => {
        // IF the update of data collection fails...
        console.log(error);
      });
  }

  async function getData() {
    const cityRef = collection(db, "teams/slabs")
    const doc = await getDoc(cityRef)
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.head}>Firestore Data</Text>
      <View style={styles.inputContainer}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Get Data</Text>
        </TouchableOpacity>
        {/* ============================================== */}
        {/*  */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  head: {
    color: colors.primaryColor,
    fontFamily: "SSBold",
    fontWeight: "700",
    fontSize: 45,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: colors.secondaryColor,
    marginTop: 5,
    borderColor: colors.primaryColor,
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: colors.primaryColor,
    fontWeight: "700",
    fontSize: 16,
  },
});
