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
          marginBottom: 12,
          paddingHorizontal: 24,
          paddingVertical: 2,
          height: 40,
        },
        showBorder && {
          borderBottomColor: COLOR_VARIABLES.border,
          borderBottomWidth: 1,
          borderStyle: "solid",
        },
      ]}
    >
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
          }}
        >
          <Back />
        </Pressable>
      )}
      {title && <Text style={{ textAlign: "center", fontSize: 14, fontWeight: 500 }}>{title}</Text>}
    </View>
  );
};

export default PageHeader;
