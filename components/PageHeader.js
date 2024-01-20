import { View, Pressable, Text } from "react-native";
import { router } from "expo-router";
import Back from "./icons/Back";
import { COLOR_VARIABLES } from "../globalStyles";

const PageHeader = ({ showBackButton, title, showBorder }) => {
  return (
    <View
      style={[
        {
          marginTop: 24,
          paddingBottom: 12,
          paddingHorizontal: 24.5,
          position: "relative",
        },
        showBorder && {
          borderBottomColor: COLOR_VARIABLES.border,
          borderBottomWidth: 1,
          borderStyle: "solid",
        },
      ]}
    >
      <View style={{ height: 40, flexDirection: "row", alignItems: "center", position: "relative" }}>
        {showBackButton && (
          <Pressable
            onPress={() => router.back()}
            style={{
              padding: 8,
              borderRadius: 8,
              backgroundColor: "#fff",
              flex: undefined,
              width: 36,
              aspectRatio: 1,
              position: "absolute",
              top: 2,
            }}
          >
            <Back />
          </Pressable>
        )}
        {title && (
          <Text style={{ textAlign: "center", fontSize: 14, fontWeight: 500, width: "100%" }}>
            {title}
          </Text>
        )}
      </View>
    </View>
  );
};

export default PageHeader;
