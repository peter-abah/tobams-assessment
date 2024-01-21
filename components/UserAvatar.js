import { StyleSheet } from "react-native";
import Image from "./Image";

const UserAvatar = () => {
  return (
    <Image
      imageProps={{ source: require("../assets/account-placeholder.jpeg") }}
      style={styles.avatar}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    overflow: "hidden",
  },
});

export default UserAvatar;
