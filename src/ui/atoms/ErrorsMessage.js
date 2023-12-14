import React, {useContext} from 'react';
import {StyleSheet} from "react-native";
import {
    SafeAreaView,
    useColorScheme,
    Text,
    ScrollView,
    View,
    TextInput
} from "react-native";

export const ErrorsMessage = ({form, name}) => {

    const {errors = {}, touched = {}} = form;

    if (touched[name] && errors[name]) {
        return <Text  style={styles.message}>{errors[name]}</Text>;
    } else {
        return null;
    }
};

const styles = StyleSheet.create({
    message: {
        color: 'red',
        fontSize: 10,
        marginLeft: '35%',
        marginTop: 2
    }
})
