import { StyleSheet, View, Pressable, Text } from "react-native";
import { COLOR_VARIABLES } from "../globalStyles";
import Minus from "./icons/Minus";
import Plus from "./icons/Plus";

const OrderCountUpdate = ({ style, orientation, size, actions, orderCount }) => {
  const { onIncrementOrder, onDecrementOrder } = actions;
  const sizeStyles = getStylesBasedOnSize(size);

  return (
    <View
      style={[
        styles.container,
        sizeStyles.container,
        style,
        { flexDirection: orientation === "vertical" ? "column" : "row" },
      ]}
    >
      <Pressable onPress={onDecrementOrder} style={[styles.orderButton, sizeStyles.orderButton]}>
        <Minus />
      </Pressable>
      <Text style={[styles.orderText, sizeStyles.orderText]}>{orderCount}</Text>
      <Pressable onPress={onIncrementOrder} style={[styles.orderButton, sizeStyles.orderButton]}>
        <Plus />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR_VARIABLES.border,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  orderText: { fontSize: 14 },
});

const getStylesBasedOnSize = (size) => {
  switch (size) {
    case "large":
      return StyleSheet.create({
        container: {
          gap: 8,
        },
        orderButton: {
          width: 48,
          height: 48,
        },
        orderText: {
          fontWeight: 600,
          color: COLOR_VARIABLES.black,
        },
      });
    case "normal":
    default:
      return StyleSheet.create({
        container: {
          gap: 4,
        },
        orderButton: {
          width: 32,
          height: 32,
        },
        orderText: {
          fontWeight: 500,
          color: COLOR_VARIABLES.textSubdued,
        },
      });
  }
};

export default OrderCountUpdate;
