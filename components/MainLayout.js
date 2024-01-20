import { View, StatusBar, Text } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const MainLayout = ({ children }) => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{ marginTop: StatusBar.currentHeight, marginBottom: bottomTabBarHeight + 170 }}>
      {children}
    </View>
  );
};

export default MainLayout;
