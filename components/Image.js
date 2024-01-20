import { View, Image as RNImage } from "react-native";
import globalStyles from "../globalStyles";

const Image = ({ style, imageProps }) => {
  return (
    <View style={style}>
      <RNImage style={globalStyles.image} {...imageProps} />
    </View>
  );
};

export default Image;