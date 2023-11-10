import { Text, View } from "react-native";
import { InputText } from "./components/Inputs";

const LoginPage = ({ navigation }: { navigation: any }): JSX.Element => {
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
