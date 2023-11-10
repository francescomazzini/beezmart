import { Image, Text, View } from "react-native";
import { InputText } from "./components/Inputs";

const LoginPage = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <View style={{ backgroundColor: "#27241f" }}>
      <View
        style={{
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <Image
          style={{ width: 130, height: 130 }}
          source={require("./assets/images/Logo_BEEZ_Bianco.png")}
        />
      </View>
      <View
        style={{
          height: "60%",
          gap: 20,
          marginHorizontal: 66,
        }}
      >
        <InputText label="Email" />
        <InputText label="Password" />
      </View>
    </View>
  );
};

export default LoginPage;
