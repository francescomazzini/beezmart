import { Image, Text, View } from "react-native";
import { InputButton, InputText } from "./components/Inputs";

const LoginPage = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <View style={{ backgroundColor: "#27241f" }}>
      <View
        style={{
          height: "30%",
          justifyContent: "center",
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
        }}
      >
        <InputText label="Email" />
        <InputText label="Password" />
      </View>
      <View
        style={{
          height: "20%",
          justifyContent: "center",
        }}
      >
        <InputButton />
      </View>
    </View>
  );
};

export default LoginPage;
