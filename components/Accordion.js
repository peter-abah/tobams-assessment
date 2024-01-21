import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import ArrowDown from "./icons/ArrowDown";
import { COLOR_VARIABLES } from "../globalStyles";

const Accordion = ({ items, style }) => {
  return (
    <View style={style}>
      {items.map((item) => (
        <AccordionItem key={item.title} item={item} />
      ))}
    </View>
  );
};

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Pressable style={styles.itemTrigger} onPress={() => setIsOpen((prevState) => !prevState)}>
        <Text>{item.title}</Text>
        <ArrowDown style={[isOpen ? { transform: [{ rotateX: "180deg" }] } : {}]} />
      </Pressable>
      <Text style={{ display: isOpen ? "flex" : "none", marginTop: 8 }}>{item.information}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemTrigger: {
    flexDirection: "row",
    gap: 24,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: COLOR_VARIABLES.border,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
export default Accordion;
