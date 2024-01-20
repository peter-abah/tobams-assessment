import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Home = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.25 12.5 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12.5M4.5 10.25v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21.5h4.125c.621 0 1.125-.504 1.125-1.125V10.25M8.25 21.5h8.25"
    />
  </Svg>
)
export default Home
