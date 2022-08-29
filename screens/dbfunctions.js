import AsyncStorage from "@react-native-async-storage/async-storage";

async function addData(data) {
  try {
    await AsyncStorage.setItem(`traverseSheet${data.id}`, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
async function getData(key) {
  try {
    await AsyncStorage.getItem(`traverseSheet${data.id}`);
  } catch (error) {
    console.log(error);
  }
}

export { addData, getData };
