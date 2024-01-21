import { Pressable, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";
import PageHeader from "../components/PageHeader";
import ProductOrderItem from "../components/ProductOrderItem";
import globalStyles, { COLOR_VARIABLES } from "../globalStyles";

export default function Page() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.orderCount, 0);

  return (
    <MainLayout>
      <PageHeader title={"Cart"} showBackButton showBorder />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, gap: 24, justifyContent: "space-between" }}
      >
        {cart.map((productOrder) => (
          <ProductOrderItem key={productOrder.id} orderItem={productOrder} />
        ))}

        <View style={{ marginTop: 88 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>
              <Text style={{ fontWeight: 500 }}>Total</Text>
              <Text style={{ color: COLOR_VARIABLES.textSubdued }}>
                {" "}
                ({cart.length} item{cart.length > 1 && "s"})
              </Text>
            </Text>
            <Text style={{ fontWeight: 500 }}>£{totalPrice}</Text>
          </View>

          <Pressable
            onPress={() => alert("Thanks for shopping with us.")}
            style={[
              globalStyles.ctaButton,
              { backgroundColor: COLOR_VARIABLES.brand, marginTop: 8, marginBottom: 32 },
            ]}
          >
            <Text
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: "#fff",
              }}
            >
              Checkout - £{totalPrice}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </MainLayout>
  );
}
