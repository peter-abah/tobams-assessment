import { Pressable, View, Text } from "react-native";
import Image from "./Image";
import { useDispatch } from "react-redux";
import {
  incrementOrderCount,
  decrementOrderCount,
  removeItem,
} from "../lib/features/cart/cartSlice";
import Delete from "./icons/Delete";
import OrderCountUpdate from "./OrderCountUpdate";
import { COLOR_VARIABLES } from "../globalStyles";

const ProductOrderItem = ({ orderItem }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 8, flexDirection: "row", justifyContent: "space-between", gap: 32 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexShrink: 1,
        }}
      >
        <Image
          style={{ width: 92, aspectRatio: 1 }}
          imageProps={{ source: orderItem.imageSource }}
        />
        <View
          style={{
            gap: 8,
            flexShrink: 1,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 500 }} numberOfLines={1}>
            {orderItem.name}
          </Text>
          <Text style={[styles.font, { color: COLOR_VARIABLES.brand, fontWeight: "500" }]}>
            £{orderItem.price}
          </Text>
          <Pressable onPress={() => dispatch(removeItem(orderItem))}>
            <Delete />
          </Pressable>
        </View>
      </View>
      <OrderCountUpdate
        orderCount={orderItem.orderCount}
        actions={{
          onDecrementCount: () => dispatch(decrementOrderCount(orderItem)),
          onIncrementCount: () => dispatch(incrementOrderCount(orderItem)),
        }}
        size="normal"
        orientation="vertical"
        isDecrementDisabled={orderItem.orderCount <= 1}
      />
    </View>
  );
};

export default ProductOrderItem;
