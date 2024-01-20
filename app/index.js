import { FlatList, Text, TextInput, View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../lib/features/products/productsSlice";
import { addItem } from "../lib/features/cart/cartSlice";
import globalStyles from "../globalStyles";
import MainLayout from "../components/MainLayout";
import PageHeader from "../components/PageHeader";
import ShoppingBag from "../components/icons/ShoppingBag";
import Search from "../components/icons/Search";
import Heart from "../components/icons/Heart";

export default function Page() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <MainLayout>
      <View>
        <PageHeader title={"Menu"} showBorder />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#E1E5E9",
            marginVertical: 16,
            marginHorizontal: 24,
            paddingHorizontal: 16,
            paddingVertical: 10,
            backgroundColor: "#fff",
            borderRadius: 8,
            height: 40,
          }}
        >
          <Search />
          <TextInput style={{ width: 190 }} placeholder="Search" />
        </View>
        <FlatList
          contentContainerStyle={styles.productList}
          columnWrapperStyle={{
            gap: 16,
          }}
          numColumns={2}
          data={products}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <View
                style={{
                  marginTop: 15,
                  marginRight: 14,
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                <Heart />
              </View>

              <Link href={`/products/${item.id}`} asChild>
                <Pressable>
                  <View
                    style={{ width: 100, height: 100, marginBottom: 8, marginHorizontal: "auto" }}
                  >
                    <Image source={item.imageSource} style={globalStyles.image} />
                  </View>
                  <View style={{ flexDirection: "row", paddingHorizontal: 8, gap: 12 }}>
                    <Text
                      style={{ flexShrink: 1, fontSize: 14, fontWeight: 500 }}
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                    <Text style={[styles.font, { color: "#DB3C25", fontWeight: "500" }]}>
                      £{item.priceInPennies / 100}
                    </Text>
                  </View>
                </Pressable>
              </Link>

              <View
                style={{
                  backgroundColor: "#DB3C25",
                  height: 40,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 11,
                  marginBottom: 11,
                  marginTop: 14,
                }}
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                  onPress={() => dispatch(addItem({ ...item, orderCount: 1 }))}
                >
                  <ShoppingBag stroke="white" />
                  <Text style={{ color: "white", fontSize: 12 }}>Add to cart</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  font: {
    // fontFamily: "Poppins_400Regular",
  },
  productList: {
    paddingHorizontal: 24,
    gap: 16,
  },
  product: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
