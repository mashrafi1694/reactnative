import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import z from "zod";
import ScreenLayout from "../../components/ScreenLayout";
interface IFormInput {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().nonempty("ایمیل الزامی است").email("ایمیل معتبر وارد کنید"),

  password: z
    .string()
    .nonempty("رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .max(32, "رمز عبور نباید بیشتر از ۳۲ کاراکتر باشد"),
  // .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
  // .regex(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
  // .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
  // .regex(/[@$!%*?&#]/, "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"),
});
const { width, height } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  console.log({ isSubmitSuccessful });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data) {
      navigation.navigate("Home");
      // const { email, password } = data;
      // console.log(email, password);
      // try {
      //   const res = await fetch("https://reqres.in/api/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "x-api-key": "reqres-free-v1",
      //     },
      //     body: JSON.stringify({
      //       name: "mohammad",
      //       email,
      //       password,
      //     }),
      //   });
      //   console.log({ res });
      //   navigation.navigate("NetworkLogger");
      //   if (res.ok) {
      //     const dataResponse = await res.json();
      //     console.log({ dataLogin: dataResponse });
      //     // await AsyncStorage.setItem('token',dataResponse.token)
      //   }
      // } catch {
      //   navigation.navigate("NetworkLogger");
      // }
    }
  };
  return (
    <ScreenLayout>
      <ImageBackground
        source={require("../../assets/image/login-bg.png")}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.wrapperForm}>
        <View style={styles.textInputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.textInput}
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder=" ایمیل خود را وارد کنید"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.error}>{errors?.email?.message}</Text>
          )}
        </View>
        <View style={styles.textInputContainer}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.textInput}
                placeholder="پسورد را وارد کنید"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}
        </View>
        <View>
          <Button title="ورود" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  wrapperForm: {
    width: width * 0.9,
    position: "absolute",
    left: width / 2 - 180,
    top: height / 2 - 150,
  },

  textInputContainer: {
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: "#FAF3E0",
    borderWidth: 1,
    borderColor: "transparent",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    color: "#5C4033",
  },
  error: {
    color: "red",
    marginBottom: 8,
    fontSize: 12,
    textAlign: "right",
  },
});
