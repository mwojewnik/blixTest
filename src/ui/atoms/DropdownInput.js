import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const DropdownInput = ({form,field,setAccountType}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { name, value } = field;
  const { setFieldValue } = form;

  const [selectedItem, setSelectedItem] = useState(value);

  const label = selectedItem === 1 ? "Automatic" : "Manual";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setAccountType(item)
    setFieldValue(name, item)
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>Account Type: </Text>
        <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
          <Text>{label}</Text>
        </TouchableOpacity>
      </View>


      {isOpen && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => selectItem(1)}>
            <Text>Automatic</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectItem(2)}>
            <Text>Manual</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginVertical: 10,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    borderStyle: "solid",
    borderColor: "#c0c0c0",
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 4,
    minWidth: 60,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    borderStyle: "solid",
    borderColor: "#c0c0c0",
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 4,
    minWidth: 60,
    zIndex: 7,
    backgroundColor: "#fff",
  },
});
