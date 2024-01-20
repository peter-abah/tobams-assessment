import {
  FlatList,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import PRODUCTS from "../products";
import ShoppingBag from "../components/icons/ShoppingBag";
import Search from "../components/icons/Search";
import Heart from "../components/icons/heart";

export default function Page() {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View
      style={[
        styles.general,
        { paddingTop: StatusBar.currentHeight, marginBottom: bottomTabBarHeight + 46 },
      ]}
    >
      <View style={{ paddingTop: 24, paddingBottom: 12, paddingHorizontal: 24 }}>
        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: 500 }}>Menu</Text>
      </View>
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
        data={PRODUCTS}
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
            <View style={{ width: 100, height: 100, marginBottom: 8, marginHorizontal: "auto" }}>
              <Image source={item.imageSource} style={styles.image} />
            </View>
            <View style={{ flexDirection: "row", paddingHorizontal: 8, gap: 12 }}>
              <Text style={{ flexShrink: 1, fontSize: 14, fontWeight: 500 }} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={[styles.font, { color: "#DB3C25", fontWeight: "500" }]}>
                £{item.priceInPennies / 100}
              </Text>
            </View>

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
              >
                <ShoppingBag stroke="white" />
                <Text style={{ color: "white", fontSize: 12 }}>Add to cart</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    backgroundColor: "#f9f9f9",
    color: "#000",
  },
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
  image: { flex: 1, height: undefined, width: undefined, resizeMode: "contain" },
});
