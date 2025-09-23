import { useEffect, useRef } from "react";
import {
  BackHandler,
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import ScreenLayout from "../../components/ScreenLayout";

const { width } = Dimensions.get("window");
export default function WellconScreen({ navigation }) {
  const backPressCount = useRef(0);

  useEffect(() => {
    const backAction = () => {
      if (backPressCount.current === 1) {
        BackHandler.exitApp();
        return true;
      }

      backPressCount.current = 1;
      Toast.show({
        type: "info",
        text1: "برای خروج دوباره دکمه بازگشت را بزنید",
      });

      setTimeout(() => {
        backPressCount.current = 0;
      }, 1500);

      return true;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => subscription.remove();
  }, []);
  // useEffect(() => {
  //   let curentCount = 0;
  //   if (screenIndex <= 0) {
  //     BackHandler.addEventListener("hardwareBackPress", () => {
  //       console.log("event");
  //       if (curentCount === 1) {
  //         BackHandler.exitApp();
  //         return true;
  //       }
  //       curentCount += 1;
  //       customToast("info", "برای خروج دوبار کلیک کنید");
  //       setTimeout(() => {
  //         console.log("timeout");
  //         curentCount = 0;
  //       }, 1000);
  //       return true;
  //     });
  //   }
  // }, []);
  return (
    <ScreenLayout>
      <ImageBackground
        source={require("../../assets/image/login-bg.png")}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <View style={styles.btnWrapper}>
          <Button
            title="ورود"
            color="#b03b23"
            accessibilityLabel="enter button"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btnWrapper: {
    zIndex: 99,
    backgroundColor: "red",
    position: "absolute",
    bottom: 10,
    width: "90%",
    transform: [{ translateX: width * 0.05 }],
  },
});
