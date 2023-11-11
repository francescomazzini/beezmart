import { Image, Text, View } from "react-native";
import { InputText, InputButton } from "./components/Inputs";
import { AuthContext } from "../core/useUser";
import React, { useContext, useEffect, useState } from "react";
import { StackActions } from "@react-navigation/native";
import { Divider } from "react-native-paper";

const UploadWorked = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <View style={{ backgroundColor: "#27241f", height: "100%" }}>
      <Text style={{ fontSize: 30, color: "#fbc011" }}>Everything Worked!</Text>
      <Divider />
      <Image
        style={{ width: "50%", height: "50%" }}
        source={require("./assets/images/APE.png")}
      />
    </View>
  );
};

export default UploadWorked;
