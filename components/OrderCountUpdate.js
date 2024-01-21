import { StyleSheet, View, Pressable, Text } from "react-native";
import { COLOR_VARIABLES } from "../globalStyles";
import Minus from "./icons/Minus";
import Plus from "./icons/Plus";

const OrderCountUpdate = ({
  style,
  orientation,
  size,
  actions,
  orderCount,
  isDecrementDisabled,
  isIncrementDisabled,
}) => {
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
      <Pressable
        onPress={onDecrementOrder}
        style={[styles.orderButton, sizeStyles.orderButton]}
        disabled={isDecrementDisabled}
      >
        <Minus stroke={isDecrementDisabled ? COLOR_VARIABLES.border : COLOR_VARIABLES.black} />
      </Pressable>
      <View style={[styles.orderTextWrapper, sizeStyles.orderTextWrapper]}>
        <Text style={[styles.orderText, sizeStyles.orderText]}>{orderCount}</Text>
      </View>
      <Pressable
        onPress={onIncrementOrder}
        style={[styles.orderButton, sizeStyles.orderButton]}
        disabled={isIncrementDisabled}
      >
        <Plus stroke={isIncrementDisabled ? COLOR_VARIABLES.border : COLOR_VARIABLES.black} />
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
  orderTextWrapper: { justifyContent: "center", alignItems: "center" },
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
          textAlign: "center",
        },
        orderTextWrapper: {
          width: 32,
          height: 32,
          backgroundColor: "#fff",
          borderRadius: 8,
        },
      });
  }
};

export default OrderCountUpdate;
