import { Text, View } from "react-native";
import { InputText } from "./components/Inputs";
import { AuthContext } from "../core/useUser";
import React, { useContext, useEffect, useState } from 'react';
import { StackActions } from "@react-navigation/native";

const LoginPage = ({ navigation }: { navigation: any }): JSX.Element => {

  const auth = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login  = () => {

    auth.log(email, password)
    .then(() => {
      navigation.dispatch(
        StackActions.replace('InnerApp')
      )
    })
    .catch((e) => console.log(e))
  }

  return (
    <View style={{ backgroundColor: "#27241f" }}>
      <View
        style={{
          backgroundColor: "#27241f",
          height: "40%",
        }}
      ></View>
      <View
        style={{
          height: "60%",
          justifyContent: "center",
          gap: 20,
          marginHorizontal: 66,
          backgroundColor: "#27241f",
        }}
      >
        <InputText label="Email" />
        <InputText label="Password" />
      </View>
    </View>
  );
};

export default LoginPage;
