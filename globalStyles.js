import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  image: { flex: 1, height: undefined, width: undefined, resizeMode: "contain" },
  ctaButton: {
    padding: 10,
    borderRadius: 50,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaButtonText: {
    fontWeight: 500,
    fontSize: 14,
  },
});

export const COLOR_VARIABLES = {
  border: "#E1E5E9",
  black: "#131313",
  brand: "#DB3C25",
  textSubdued: "#4A4A4A",
  fadeOutText: "#858585",
};
