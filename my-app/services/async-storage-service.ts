import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  userToken: 'user-token'
}

async function save<T>(key: string, value: T): Promise<void> {
  try {
    const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(`AsyncStorage Error: ${e}`);
  }
}

async function get(){
  try {
    const jsonValue = await AsyncStorage.getItem(KEYS.userToken);
    return jsonValue
  } catch (e) {
    console.log(`AsyncStorage Error: ${e}`);
  }
}

async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`AsyncStorage Error: ${e}`);
  }
}

export const asyncStorageService = {
  KEYS,
  save,
  get,
  remove,
};
