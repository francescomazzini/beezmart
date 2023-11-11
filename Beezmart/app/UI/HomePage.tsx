import { Image, Text, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext } from "react";
import React from "react";
import { Divider } from "react-native-paper";

import { IconFoto } from "./components/Inputs";

const HomePage = ({ navigation }: { navigation: any }): JSX.Element => {
  const auth = useContext(AuthContext);

  console.log(JSON.stringify(auth.user));

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
        <Image
          style={{ width: 40, height: 40, marginLeft: 20 }}
          source={require("./assets/images/Logo_BEEZ_Bianco.png")}
        />
        <Text style={{ color: "#fbc011", fontSize: 25 }}>Username</Text>
      </View>
      <Divider />
      <View
        style={{
          height: "25%",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          marginLeft: 20,
        }}
      >
        <Text>BZT</Text>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>$$$$$$$$$.$$$</Text>
      </View>

      <View style={{ height: "70%" }}>
        <Text style={{ color: "#fbc011", fontSize: 25, marginLeft: 20 }}>
          Latest transaction
        </Text>
        <Divider />
      </View>
    </View>
  );
};

export default HomePage;
