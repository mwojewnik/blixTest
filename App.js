import React, {useState} from "react";
import {
    SafeAreaView,
    useColorScheme,
    Text,
    ScrollView,
    TouchableOpacity,
    View, TextInput,
} from "react-native";
import * as Yup from "yup";
import {Formik, Field} from "formik";
import {CustomInput} from "./src/ui/atoms/CustomInput.js";
import {Checkbox} from "./src/ui/atoms/Checkbox";
import {DropdownInput} from "./src/ui/atoms/DropdownInput";


const App = () => {
    const [accountType, setAccountType] = useState(1);


    const initialValues = {
        accountType: 1,
        userName: "",
        password: "",
        serverAdress: "",
        serverPath: "",
        port: "",
        ssl: false,
    };

    const validationSchema = Yup.object().shape({
        accountType: Yup.string().required("Field is Requried "),
        userName: Yup.string().required("Field is Requried").email('Invalid email'),
        password: Yup.string().required("Field is Requried"),
        serverAdress: Yup.string().required("Field is Requried"),
        serverPath: Yup.string().required("Field is Required"),
        port: Yup.string().when('accountType', {
            is: 1,
            then: Yup.string().required("Field is Required").max(4),
        }),
    });


    const handleSubmit = async (values) => {
        console.log('NewForm.handleSubmit | values =', JSON.stringify(values, null, 2));

    };

    return (
        <SafeAreaView>
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                {(formik) => (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal: 16}}>
                        <Field component={DropdownInput}
                               name="accountType"
                               setAccountType={setAccountType}
                               formik={formik}
                        />
                        <Field component={CustomInput}
                               name="userName"
                               label="User Name"
                               placeholder={"name@example.pl"}


                        />
                        <Field component={CustomInput}
                               name="password"
                               label="Password"
                               secureTextEntry
                               placeholder={"required"}
                        />
                        <Field component={CustomInput}
                               name="serverAdress"
                               label="Server Adress"
                               placeholder={"example.pl"}
                        />
                        {accountType === 1 &&
                            <View>
                                <Field component={CustomInput}
                                       name="serverPath"
                                       label="Server Path"
                                       placeholder={"calendars/user"}

                                />


                                <Field component={CustomInput}
                                       name="port"
                                       label="Port"
                                       keyboardType="numeric"
                                />
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 1}}></View>
                                    <Field component={Checkbox}
                                           name="ssl"
                                           label="Account Type"
                                    />
                                </View>


                            </View>
                        }


                        <TouchableOpacity
                            style={{borderWidth: 1, borderRadius: 10, paddingVertical: 8, marginVertical: 24}}
                            onPress={() => formik.submitForm()}>
                            <Text style={{textAlign: "center"}}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                )
                }
            </Formik>
        </SafeAreaView>
    )
        ;
};


export default App;
