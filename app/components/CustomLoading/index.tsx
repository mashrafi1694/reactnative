import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function CustomLoading({ loading }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <ActivityIndicator size="large" color="#00ff00" animating={loading} />
        </View>
        <Text style={styles.loadingText}>درحال بارگزاری ...</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    zIndex: 99,
    width: "80%",
    height: 150,
    position: "absolute",
    left: "50%",
    top: "50%",
    backgroundColor: "#000814",
    transform: "translate(-50%,-50%)",
    borderRadius: 10,
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: 20,
  },
  loadingText: {
    color: "#fff",
    fontSize: 18,
  },
});
