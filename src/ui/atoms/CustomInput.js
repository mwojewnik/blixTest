import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { ErrorsMessage } from "./ErrorsMessage";



export const CustomInput = ({ label, placeholder, form, field, secureTextEntry, keyboardType }) => {
  const [isFocused, setIsFocused] = useState(false);

  const { name,value } = field;
  const { setFieldValue } = form;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <View style={{marginBottom: 8}}>
      <View style={styles.container}>
        <Text style={{flex: 1, textAlign: 'right', marginRight: 10}}>{label}:</Text>
        <TextInput
            value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={(text) => setFieldValue(name, text)}
          placeholder={placeholder}
          style={[styles.input, {  borderColor: isFocused ? "#ff0000" : "#c0c0c0",}]} />
      </View>
      <ErrorsMessage form={form} name={name} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderStyle: "solid",
    flex: 2,
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 4,
  },

});
