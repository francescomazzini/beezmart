import * as React from "react";
import { TextInput } from "react-native-paper";

const InputText = ({ label }: { label: string }) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      style={{
        width: "100%",

        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderWidth: 1,
        borderColor: "ffffff",
        backgroundColor: "#0d0d0d",
      }}
      label={label}
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
};

export { InputText };
