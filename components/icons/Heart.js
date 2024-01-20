import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Heart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#4A4A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.213}
      d="M20.999 8.25c0-2.485-2.1-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733-2.587 0-4.687 2.015-4.687 4.5 0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </Svg>
)
export default Heart
