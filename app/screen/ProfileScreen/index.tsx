import Ionicons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen({ navigation }) {
  async function handelLogout() {
    try {
      await AsyncStorage.clear();

      navigation.replace("Login");
    } catch (error) {
      console.error("Error clearing storage: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.profile}>profile</Text>
        <Image
          source={require("../../assets/image/profileImage.png")}
          style={styles.image}
        />
        <Text style={styles.fullName}>mohammad ashrafi</Text>
        <Text style={styles.email}>mohammadashrafi7@gmail.com</Text>
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="settings" size={25} color="#6c757d" />
          <Text>setting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handelLogout} style={styles.actionBtn}>
          <Ionicons name="logout" size={25} color="#6c757d" />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  wrapper: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 90,
    height: 80,
  },
  fullName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    fontSize: 12,
    color: "#495057",
    marginVertical: 10,
  },
  wrapperBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  actionBtn: {
    backgroundColor: "#e9ecef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    width: "30%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
