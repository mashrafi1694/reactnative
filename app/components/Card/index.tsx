import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { AirbnbRating } from "react-native-ratings";

export default function Card({
  image = "",
  title = "",
  description = "",
  price,
  // count,
  // rate,
  handelPress,
  handelDlete,
  isDeleted = false,
}: ICard) {
  return (
    <TouchableOpacity onPress={handelPress}>
      <View style={styles.container}>
        {isDeleted && (
          <View style={styles.trashIcon}>
            <Pressable onPress={handelDlete}>
              <Ionicons name="trash" size={20} color={"#403d39"} />
            </Pressable>
          </View>
        )}

        <View>
          <Image
            source={{ uri: image }}
            style={styles.productImage}
            resizeMode="center"
          />
        </View>
        <View>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        <View>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        </View>
        <View>
          <Text style={styles.price}>{`$${price.toString()}`}</Text>
        </View>
        {/* <View style={styles.rateContainer}>
          <Text style={styles.rating}>
            {" "}
            <AirbnbRating
              count={rate + 1}
              size={15}
              defaultRating={rate}
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
          <Text>{count}</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 7,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
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
    fontWeight: "400",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
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
  trashIcon: {
    position: "absolute",
    top: "5%",
    right: "7%",
    zIndex: 10,
  },
});
