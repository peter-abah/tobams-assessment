import { StyleSheet, StatusBar, View } from "react-native";
import { Tabs } from "expo-router/tabs";
import { store } from "../lib/store";
import { Provider } from "react-redux";
import Home from "../components/icons/Home";
import Menu from "../components/icons/Menu";
import ShoppingBag from "../components/icons/ShoppingBag";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
          tabBarStyle: {
            paddingTop: 16,
            paddingBottom: 16,
            paddingHorizontal: 16,
            height: 83,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderTopColor: "#e1e5e9",
            borderStyle: "solid",
            borderTopWidth: 1,
          },
          tabBarItemStyle: styles.tabBarItemStyle,
          tabBarIconStyle: { width: 0, flex: 1 },
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#DB3C25",
          tabBarInactiveTintColor: "#858585",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <Home stroke={color} />,
            tabBarItemStyle: [styles.tabBarItemStyle, { marginLeft: "auto" }],
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Menu",
            tabBarIcon: ({ color }) => <Menu stroke={color} fill={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{ title: "Cart", tabBarIcon: ({ color }) => <ShoppingBag stroke={color} /> }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => <ShoppingBag stroke={color} />,
            tabBarItemStyle: [styles.tabBarItemStyle, { marginRight: "auto" }],
          }}
        />
        <Tabs.Screen
          name="products/[id]"
          options={{
            href: null,
            tabBarStyle: { display: "none" },
          }}
        />
      </Tabs>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBarItemStyle: {
    flex: 1,
    padding: 8,
    gap: 8,
    marginRight: 20,
    fontSize: 14,
    flex: undefined,
  },
});
