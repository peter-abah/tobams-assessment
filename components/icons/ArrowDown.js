import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowDown = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 5.5-5 5-5-5"
    />
  </Svg>
);
export default ArrowDown;
