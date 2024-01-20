import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{padding: 100}}>
      <Text>Cart page</Text>
      <Link href="/products/12">Product</Link>
    </View>
  );
}
