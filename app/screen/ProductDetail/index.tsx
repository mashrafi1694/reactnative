import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { customToast } from "../../components/customToast";
export default function ProductDetail({ route }) {
  const { image, title, description, rating, price } = route.params.product;

  async function handelAddCart() {
    const cartItem = route.params.product;
    const getDataStorage = await AsyncStorage.getItem("cart");
    let convertToObject = getDataStorage ? JSON.parse(getDataStorage) : [];
    const isExist = convertToObject.some((item) => item.id === cartItem.id);
    if (!isExist) {
      convertToObject.push(cartItem);
      customToast("success", "به سبد خرید اضافه شد");
      await AsyncStorage.setItem("cart", JSON.stringify(convertToObject));
    } else {
      customToast("error", "این محصول قبلا انتخاب شده");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image src={image} style={styles.productImage} resizeMode="center" />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>
        <Text style={styles.price}>{`$${price}`}</Text>
      </View>
      <View style={styles.rateContainer}>
        <Text style={styles.rating}>
          {" "}
          <AirbnbRating
            count={rating.rate + 1}
            size={15}
            defaultRating={rating.rate}
            isDisabled
            reviews={[""]}
            ratingContainerStyle={{
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "center",
              borderRadius: 10,
            }}
          />
        </Text>
        <Text>{rating.count}</Text>
      </View>
      <Pressable onPress={handelAddCart}>
        <View style={styles.cart}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <Text>add to cart</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 7,
    marginVertical: 10,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
  },
  description: {
    textAlign: "justify",
    fontSize: 14,
    fontWeight: 400,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
  rateContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  rating: {
    textAlign: "center",
  },
  cart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
