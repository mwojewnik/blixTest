import React, { useState } from "react";
import {
  SafeAreaView,
  useColorScheme,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import { CustomInput } from "./src/ui/atoms/CustomInput.js";
import { Checkbox } from "./src/ui/atoms/Checkbox";
import { DropdownInput } from "./src/ui/atoms/DropdownInput";


const App = () => {
  const [accountType, setAccountType] = useState();

  const validationSchema = Yup.object().shape({
    accountType: Yup.string().required("Field is Requried "),
    userName: Yup.string().required("Field is Requried"),
    password: Yup.string().required("Field is Requried"),
    serverAdress: Yup.string().required("Field is Requried"),
    serverPath: Yup.string().required("Field is Requried"),
    port: Yup.number().required("Field is Requried"),
    ssl: Yup.string().required("Field is Requried"),
  });

  const initialValues = {
    accountType: 1,
    userName: "",
    password: "",
    serverAdress: "",
    serverPath: "",
    port: "",
    ssl: false,
  };

  const handleSubmit = async (values) => {
    console.log("values", values);
    //console.log('ComplaintNewForm.handleSubmit | values =', JSON.stringify(values, null, 2));
  };

  return (
    <SafeAreaView>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => (
          <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 16 }}>
            <Field component={DropdownInput}
                   name="accountType"
                   setAccountType={setAccountType}
            />
            <Field component={CustomInput}
                   name="userName"
                   label="User Name"

            />
            <Field component={CustomInput}
                   name="password"
                   label="Password"
                   secureTextEntry
            />
            <Field component={CustomInput}
                   name="serverAdress"
                   label="Server Adress"

            />

            {accountType === 1 &&
              <View>
                <Field component={CustomInput}
                       name="serverPath"
                       label="Server Path"

                />

                <Field component={CustomInput}
                       name="port"
                       label="Port"
                       keyboardType="numeric"
                />
                <Field component={Checkbox}
                       name="ssl"
                       label="Account Type"
                />
              </View>
            }


            <TouchableOpacity onPress={() => formik.submitForm()}>
              <Text style={{ textAlign: "center" }}>
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
