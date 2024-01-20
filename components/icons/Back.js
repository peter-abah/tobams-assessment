import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Back = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Path
      fill="#131313"
      fillRule="evenodd"
      d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.749.749 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Back;
