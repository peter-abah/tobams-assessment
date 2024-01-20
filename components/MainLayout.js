import { View, StatusBar, Text } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const MainLayout = ({ children }) => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        paddingBottom: bottomTabBarHeight,
      }}
    >
      {children}
    </View>
  );
};

export default MainLayout;
