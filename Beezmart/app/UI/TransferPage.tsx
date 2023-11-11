import { Image, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext, useEffect } from "react";
import { useWallet } from "../core/useWallet";
import React from "react";
import { Divider } from "react-native-paper";

import { IconFoto, InputButton, InputText } from "./components/Inputs";

const TransferPage = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <View style={{ height: "100%", backgroundColor: "#27241f" }}>
      <View
        style={{
          height: "15%",
          alignItems: "center",
          flexDirection: "row",
          gap: 20,
          marginRight: 110,
        }}
      >
        <Text style={{ color: "#fbc011", fontSize: 25, marginLeft: 20 }}>
          Token Transfer
        </Text>
      </View>
      <Divider />
      <View style={{ height: "63%", flexDirection: "row", marginTop: 20 }}>
        <View style={{ height: "100%" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("./assets/images/1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("./assets/images/25.png")}
            />
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={{ height: "100%" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("./assets/images/5.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("./assets/images/50.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("./assets/images/Other.png")}
            />
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={{ height: "100%" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("./assets/images/10.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("./assets/images/100.png")}
            />
          </TouchableOpacity>
        </View>
        <Divider />
      </View>
      <View style={{}}>
        <InputText label="Recieverer address" text="" setText={undefined} />
        <InputButton onPress={undefined} label={"Transfer"} />
      </View>
    </View>
  );
};

export default TransferPage;
