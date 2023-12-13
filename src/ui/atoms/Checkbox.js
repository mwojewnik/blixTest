import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box'

export const Checkbox = ({form,field}) => {

  const { name,value } = field;
  const { setFieldValue } = form;



  return (
    <View style={styles.container}>
      <CheckBox
        onClick={()=> setFieldValue(name,!value)}
        isChecked={value}
        checkBoxColor={'#ff0000'}
      />
      <Text>Use SSL</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
});
