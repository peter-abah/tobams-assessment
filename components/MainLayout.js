import { View, StatusBar, Text } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const MainLayout = ({ children }) => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};

export default MainLayout;
