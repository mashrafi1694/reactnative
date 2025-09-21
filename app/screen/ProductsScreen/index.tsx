import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../../components/Card";
import CustomLoading from "../../components/CustomLoading";

export default function ProductScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((responce) => {
        setData(responce);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading && <CustomLoading loading={loading} />}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            // count={item.rating.count}
            // rate={item.rating.rate}
            handelPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
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
