import { StyleSheet, StatusBar, View } from "react-native";
import { Tabs } from "expo-router/tabs";
import { store } from "../lib/store";
import { Provider } from "react-redux";
import Home from "../components/icons/Home";
import Menu from "../components/icons/Menu";
import ShoppingBag from "../components/icons/ShoppingBag";
import UserAvatar from "../components/UserAvatar";
import { COLOR_VARIABLES } from "../globalStyles";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Tabs
        initialRouteName="index"
        backBehavior="history"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem,
          tabBarIconStyle: { width: 0, flex: 1 },
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: COLOR_VARIABLES.brand,
          tabBarInactiveTintColor: COLOR_VARIABLES.fadeOutText,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <Home stroke={color} />,
            tabBarItemStyle: [styles.tabBarItem, { marginLeft: "auto" }],
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
            tabBarIcon: () => <UserAvatar />,
            tabBarItemStyle: [styles.tabBarItem, { marginRight: "auto" }],
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
  tabBarItem: {
    flex: 1,
    padding: 8,
    gap: 8,
    marginRight: 20,
    fontSize: 14,
    flex: undefined,
  },
  tabBar: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    height: 83,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopColor: COLOR_VARIABLES.border,
    borderStyle: "solid",
    borderTopWidth: 1,
  },
});
