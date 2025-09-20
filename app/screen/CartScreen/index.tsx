import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../../components/Card";

export default function CartScreen({ navigation }) {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    (async () => {
      const getData = await AsyncStorage.getItem("cart");
      const convertToObj = JSON.parse(getData);
      if (convertToObj) {
        setData(convertToObj);
      }
    })();
  }, [isFocused]);

  async function handelDeleteCart(id: number) {
    try {
      const getData = await AsyncStorage.getItem("cart");
      const convertToObj = getData ? JSON.parse(getData) : [];

      if (convertToObj.length > 0) {
        const filteredStorage = convertToObj.filter((item) => item.id !== id);
        setData(filteredStorage);

        console.log("filteredStorage", filteredStorage);

        await AsyncStorage.setItem("cart", JSON.stringify(filteredStorage));
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            count={item.rating.count}
            rate={item.rating.rate}
            handelPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
            isDeleted
            handelDlete={() => handelDeleteCart(item.id)}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: "100%",
  },
});
