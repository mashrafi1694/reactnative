import Toast from "react-native-toast-message";

export const customToast = (type, text) => {
  return Toast.show({
    type,
    text1: text,
  });
};
