import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from "react-native";

export const DropdownInput = ({form, field, setAccountType,formik}) => {
    const [isOpen, setIsOpen] = useState(false);

    const {name, value} = field;
    const {setFieldValue} = form;

    const [selectedItem, setSelectedItem] = useState(value);

    const label = selectedItem === 1 ? "Automatic" : "Manual";
    const labelButton = selectedItem === 2 ? "Automatic" : "Manual";

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectItem = () => {
        const item = selectedItem === 1 ? 2 : 1;
        setSelectedItem(item);
        setAccountType(item)
        setFieldValue(name, item)
        formik.resetForm();
        setIsOpen(false);

    };

    return (

        <View style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.label}>Account Type:</Text>
                <TouchableOpacity onPress={toggleDropdown} style={styles.header}>
                    <Text>{label}</Text>
                </TouchableOpacity>
            </View>


            {isOpen && (
                <View style={styles.dropdown}>
                    <View>
                        <View style={{flex: 1}}></View>
                    </View>
                    <TouchableOpacity onPress={() => selectItem()}>
                        <Text>{labelButton}</Text>
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
        zIndex: 9
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
    },
    header: {
        borderStyle: "solid",
        borderColor: "#c0c0c0",
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 0,
        flex: 2,
    },
    dropdown: {
        position: "absolute",
        top: "100%",
        width: '65%',
        right: 0,
        borderStyle: "solid",
        borderColor: "#c0c0c0",
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 0,
        paddingHorizontal: 4,
        minWidth: 60,
        backgroundColor: "#fff",
    },
    label: {
        flex: 1,
        textAlign: 'right',
        marginRight: 10
    }
});
