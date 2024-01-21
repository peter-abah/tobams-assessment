import { View, Pressable, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { Link } from "expo-router";
import { addItem } from "../lib/features/cart/cartSlice";
import Image from "./Image";
import Heart from "./icons/Heart";
import ShoppingBag from "./icons/ShoppingBag";
import { COLOR_VARIABLES } from "../globalStyles";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.product}>
      <View style={styles.favouritesWrapper}>
        <Heart />
      </View>

      <Link href={`/products/${product.id}`} asChild>
        <Pressable style={{ alignItems: "center" }}>
          <Image imageProps={{ source: product.imageSource }} style={styles.productImage} />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 8,
              gap: 12,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ flexShrink: 1, fontSize: 14, fontWeight: 500 }} numberOfLines={1}>
              {product.name}
            </Text>
            <Text style={{ color: COLOR_VARIABLES.brand, fontWeight: "500" }}>
              £{product.price}
            </Text>
          </View>
        </Pressable>
      </Link>

      <View style={styles.cartButton}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
          onPress={() => dispatch(addItem({ ...product, orderCount: 1 }))}
        >
          <ShoppingBag stroke="white" />
          <Text style={{ color: "white", fontSize: 12 }}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  favouritesWrapper: {
    marginTop: 15,
    marginRight: 14,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  cartButton: {
    backgroundColor: COLOR_VARIABLES.brand,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 11,
    marginBottom: 11,
    marginTop: 14,
  },
});

export default ProductItem;
