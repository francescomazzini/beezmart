import { Image, Text, View } from "react-native";
import { InputText, InputButton } from "./components/Inputs";
import { AuthContext } from "../core/useUser";
import React, { useContext, useEffect, useState } from "react";
import { StackActions } from "@react-navigation/native";

const LoginPage = ({ navigation }: { navigation: any }): JSX.Element => {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    auth
      .log(email, password)
      .then(() => {
        navigation.dispatch(StackActions.replace("InnerApp"));
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={{ backgroundColor: "#27241f" }}>
      <View
        style={{
          height: "30%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 130, height: 130 }}
          source={require("./assets/images/Logo_BEEZ_Bianco.png")}
        />
      </View>
      <View
        style={{
          height: "50%",
          gap: 20,
          marginHorizontal: 66,
          justifyContent: "center",
        }}
      >
        <InputText label="Email" text={email} setText={setEmail} />
        <InputText label="Password" text={password} setText={setPassword} />
      </View>
      <View
        style={{
          height: "20%",
          marginHorizontal: 120,
        }}
      >
        <InputButton onPress={() => login()} />
      </View>
    </View>
  );
};

export default LoginPage;
