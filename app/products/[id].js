import { Text, View, Pressable, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import globalStyles, { COLOR_VARIABLES } from "../../globalStyles";
import { createListOfNodes } from "../../lib/helper";
import Image from "../../components/Image";
import Accordion from "../../components/Accordion";
import PageHeader from "../../components/PageHeader";
import MainLayout from "../../components/MainLayout";
import { useState } from "react";

import OrderCountUpdate from "../../components/OrderCountUpdate";

const PRODUCT_IMAGES_NO = 3;
const MAX_PRODUCT_DESCRIPTION_CHARACTER_NO = 190;

export default function Page() {
  const { id } = useLocalSearchParams();
  const product = useSelector((state) => state.products.find((p) => p.id === Number(id)));
  const [orderCount, setOrderCount] = useState(1);

  const decrementOrderCount = () => {
    setOrderCount((prevState) => {
      if (prevState <= 1) return prevState;
      return prevState - 1;
    });
  };

  const incrementOrderCount = () => {
    setOrderCount((prevState) => prevState + 1);
  };

  if (!product) return JSON.stringify(id);

  return (
    <MainLayout>
      <View>
        <PageHeader showBackButton />

        <ScrollView>
          <View style={{ gap: 24, marginTop: 18 }}>
            <Image
              style={{ aspectRatio: 1, marginHorizontal: 24, borderRadius: 16 }}
              imageProps={{ source: product.imageSource }}
            />

            <View style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}>
              {createListOfNodes(
                ({ index }) => (
                  <Pressable
                    style={{
                      width: 8,
                      aspectRatio: 1,
                      backgroundColor: index === 0 ? COLOR_VARIABLES.brand : "#D9D9D9",
                      borderRadius: 9999,
                    }}
                    key={index}
                  ></Pressable>
                ),
                PRODUCT_IMAGES_NO
              )}
            </View>
          </View>

          <View style={{ marginHorizontal: 24, marginTop: 24 }}>
            <View style={{ flexDirection: "row", gap: 16, justifyContent: "space-between" }}>
              <Text style={{ fontWeight: 500 }}>{product.name}</Text>
              <Text style={{ fontWeight: 500, color: "#DB3C25" }}>
                £{product.priceInPennies / 100}
              </Text>
            </View>

            <Text style={{ fontSize: 12, color: "#4A4A4A", marginTop: 8 }}>
              {product.description}
            </Text>
          </View>

          <Accordion
            style={{ marginHorizontal: 24, marginTop: 44 }}
            items={[
              { title: "Ingredients", information: product.ingredients },
              { title: "Nutritional Information", information: product.nutritionalInformation },
              { title: "How to Prepare", information: product.preparationInstructions },
              { title: "Dietary Information", information: product.dietaryInformation },
              { title: "Storage Information", information: product.storageInformation },
              { title: "Extra", information: product.extra },
            ]}
          />

          <View style={{ marginHorizontal: 24, marginTop: 40 }}>
            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pressable onPress={decrementOrderCount} style={styles.orderButton}>
                <Minus />
              </Pressable>
              <Text style={{ fontSize: 14, fontWeight: 600, color: COLOR_VARIABLES.black }}>
                {orderCount}
              </Text>
              <Pressable onPress={incrementOrderCount} style={styles.orderButton}>
                <Plus />
              </Pressable>
            </View> */}
            <OrderCountUpdate
              orientation="horizontal"
              size={"large"}
              actions={{
                onDecrementOrder: decrementOrderCount,
                onIncrementOrder: incrementOrderCount,
              }}
              orderCount={orderCount}
            />

            <View style={{ gap: 16, marginTop: 24 }}>
              <Pressable
                style={[globalStyles.ctaButton, { backgroundColor: COLOR_VARIABLES.brand }]}
              >
                <Text style={[globalStyles.ctaButtonText, { color: "#fff" }]}>Add to cart</Text>
              </Pressable>
              <Pressable
                style={[
                  globalStyles.ctaButton,
                  {
                    borderColor: COLOR_VARIABLES.brand,
                    borderWidth: 1,
                    borderStyle: "solid",
                  },
                ]}
              >
                <Text style={{ color: COLOR_VARIABLES.brand }}>Subscribe to a Plan</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  orderButton: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR_VARIABLES.border,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
