import { FlatList, TextInput, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";
import PageHeader from "../components/PageHeader";
import Search from "../components/icons/Search";
import ProductItem from "../components/ProductItem";
import { COLOR_VARIABLES } from "../globalStyles";

export default function Page() {
  const products = useSelector((state) => state.products);

  return (
    <MainLayout>
      <View style={{ flex: 1 }}>
        <PageHeader title={"Menu"} showBorder />
        <View style={styles.inputWrapper}>
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
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLOR_VARIABLES.border,
    marginVertical: 16,
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 40,
  },
  productList: {
    paddingHorizontal: 24,
    gap: 16,
  },
});
