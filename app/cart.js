import { Pressable, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";
import PageHeader from "../components/PageHeader";
import ProductOrderItem from "../components/ProductOrderItem";
import globalStyles, { COLOR_VARIABLES } from "../globalStyles";

export default function Page() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.priceInPennies * item.orderCount, 0);

  return (
    <MainLayout>
      {/* <Text>{JSON.stringify({cart, me: "jjlsdjkb"})}</Text> */}
      <PageHeader title={"Cart"} showBackButton showBorder />
      <ScrollView style={{ paddingHorizontal: 24, gap: 24 }}>
        {cart.map((productOrder) => (
          <ProductOrderItem key={productOrder.id} orderItem={productOrder} />
        ))}
        <View style={{ marginTop: 88, paddingHorizontal: 24 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>
              Total ({cart.length} item{cart.length > 1 && "s"})
            </Text>
            <Text>£{totalPrice}</Text>
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
