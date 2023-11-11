import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Divider } from "react-native-paper";

import * as ImagePicker from "react-native-image-picker";
import React, { useContext, useEffect, useState } from "react";

import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { InputText } from "./components/Inputs";
import { useOpenAI } from "../core/useOpenAI";
import { useWallet } from "../core/useWallet";
import { AuthContext } from "../core/useUser";

const AssetUploadPage = ({ navigation }): JSX.Element => {
  const auth = useContext(AuthContext);

  const [response, setResponse] = React.useState<any>(null);

  const [idNFC, setIdNFC] = useState(undefined);

  const [amount, setAmount] = useState(0);

  const [catalogized, setCatalogized] = useState<string>("");

  const { getCatalogized } = useOpenAI();

  const { addMyAsset } = useWallet();

  const [visible, setVisible] = useState(true);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === "capture") {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  useEffect(() => {
    if (response) {
      getCatalogized(response.assets[0].base64).then((resp) =>
        setCatalogized(resp.choices[0].message.content)
      );
    }
  }, [response]);

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      //   console.warn('Tag found', tag);
      setIdNFC(tag.id);
      console.log(tag.id);
    } catch (ex) {
      console.warn("Oops!", ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={{ height: "100%", backgroundColor: "#27241f", gap: 15 }}>
      <Text
        style={{
          color: "#fbc011",
          fontSize: 25,
          marginLeft: 20,
          marginBottom: 10,
          marginTop: 50,
        }}
      >
        New Asset
      </Text>
      <Divider />

      <View style={{ height: 300 }}>
        <View style={[styles.buttonContainer, { alignItems: "center" }]}>
          {actions.map(({ title, type, options }) => {
            return (
              <TouchableOpacity onPress={() => onButtonPress(type, options)}>
                <Image
                  style={{ width: 400, height: 300, marginLeft: 5 }}
                  source={require("./assets/images/Photo_upload.png")}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {response?.assets &&
          response?.assets.map(({ uri }: { uri: string }) => (
            <View key={uri} style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{ uri: uri }}
              />
            </View>
          ))}
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        {catalogized !== "" ? (
          <Text>Category: {catalogized}</Text>
        ) : (
          <Text>Select A Image</Text>
        )}
      </View>

      {idNFC ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#FBC011" }}>
            Associated with{" "}
          </Text>
          <Text> {idNFC} </Text>
        </View>
      ) : (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Button
            style={{ backgroundColor: "#fbc011" }}
            mode="contained"
            onPress={readNdef}
          >
            Scan a Tag Associated
          </Button>
        </View>
      )}

      <View style={{ alignItems: "center" }}>
        <View style={{ width: "70%" }}>
          <InputText label="Value" text={amount} setText={setAmount} />
        </View>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          style={{ width: "80%", backgroundColor: "#fbc011" }}
          mode="contained"
          onPress={() => {
            console.log("  AAAAAAAAA" + JSON.stringify(response.data));

            if (response && idNFC && amount) {
              addMyAsset(
                auth.user.access_token,
                idNFC,
                amount,
                response.assets[0].base64
              )
                .then((e) => {
                  console.log(e);
                  navigation.navigate("UploadWorked");
                })
                .catch((e) => console.log(e.message));
            }
          }}
        >
          Done
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

const actions = [
  {
    title: "Take Image",
    type: "capture",
    options: {
      saveToPhotos: true,
      mediaType: "photo",
      includeBase64: true,
      // includeExtra,
    },
  },
];

export default AssetUploadPage;
