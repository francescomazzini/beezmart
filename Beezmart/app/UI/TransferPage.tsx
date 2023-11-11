import { Image, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext, useEffect, useState } from "react";
import { useWallet } from "../core/useWallet";
import React from "react";
import { Divider } from "react-native-paper";

import { IconFoto, InputButton, InputText } from "./components/Inputs";

const TransferPage = ({ navigation }: { navigation: any }): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [imageSource, setImageSource] = useState(
    require("./assets/images/1.png")
  );

  const handleImagePress1 = () => {
    // Change the image source based on some condition or logic
    // For demonstration, let's toggle between two images
    const newImageSource =
      imageSource === require("./assets/images/1.png")
        ? require("./assets/images/1_Giallo-20.png")
        : require("./assets/images/1.png");

    if (imageSource === require("./assets/images/1_Giallo-20.png")) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      setCounter((prevCounter) => prevCounter + 1);
    }
    setImageSource(newImageSource);
  };

  const [imageSource2, setImageSource2] = useState(
    require("./assets/images/5.png")
  );

  const handleImagePress2 = () => {
    // Change the image source based on some condition or logic
    // For demonstration, let's toggle between two images
    const newImageSource2 =
      imageSource2 === require("./assets/images/5.png")
        ? require("./assets/images/5_Giallo-21.png")
        : require("./assets/images/5.png");

    if (imageSource2 === require("./assets/images/5_Giallo-21.png")) {
      setCounter((prevCounter) => prevCounter - 5);
    } else {
      setCounter((prevCounter) => prevCounter + 5);
    }

    setImageSource2(newImageSource2);
  };

  const [imageSource3, setImageSource3] = useState(
    require("./assets/images/25.png")
  );

  const handleImagePress3 = () => {
    // Change the image source based on some condition or logic
    // For demonstration, let's toggle between two images
    const newImageSource3 =
      imageSource3 === require("./assets/images/25.png")
        ? require("./assets/images/25_Giallo-23.png")
        : require("./assets/images/25.png");

    if (imageSource3 === require("./assets/images/25_Giallo-23.png")) {
      setCounter((prevCounter) => prevCounter - 25);
    } else {
      setCounter((prevCounter) => prevCounter + 25);
    }

    setImageSource3(newImageSource3);
  };

  const [imageSource4, setImageSource4] = useState(
    require("./assets/images/50.png")
  );

  const handleImagePress4 = () => {
    // Change the image source based on some condition or logic
    // For demonstration, let's toggle between two images
    const newImageSource4 =
      imageSource4 === require("./assets/images/50.png")
        ? require("./assets/images/50_Giallo-24.png")
        : require("./assets/images/50.png");

    if (imageSource4 === require("./assets/images/50_Giallo-24.png")) {
      setCounter((prevCounter) => prevCounter - 50);
    } else {
      setCounter((prevCounter) => prevCounter + 50);
    }
    setImageSource4(newImageSource4);
  };

  const [imageSource5, setImageSource5] = useState(
    require("./assets/images/10.png")
  );

  const handleImagePress5 = () => {
    // Change the image source based on some condition or logic
    // For demonstration, let's toggle between two images
    const newImageSource5 =
      imageSource5 === require("./assets/images/10.png")
        ? require("./assets/images/10_Giallo-22.png")
        : require("./assets/images/10.png");

    if (imageSource5 === require("./assets/images/10_Giallo-22.png")) {
      setCounter((prevCounter) => prevCounter - 10);
    } else {
      setCounter((prevCounter) => prevCounter + 10);
    }

    setImageSource5(newImageSource5);
  };

  const [imageSource6, setImageSource6] = useState(
    require("./assets/images/100.png")
  );

  const handleImagePress6 = () => {
    // Change the image source based on some condition or logic
    // For demonstration, let's toggle between two images
    const newImageSource6 =
      imageSource6 === require("./assets/images/100.png")
        ? require("./assets/images/100_Giallo-25.png")
        : require("./assets/images/100.png");

    if (imageSource6 === require("./assets/images/100_Giallo-25.png")) {
      setCounter((prevCounter) => prevCounter - 100);
    } else {
      setCounter((prevCounter) => prevCounter + 100);
    }

    setImageSource6(newImageSource6);
  };

  return (
    <View style={{ height: "100%", backgroundColor: "#27241f", width: "100%", alignItems: "center" }}>
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
      <Divider style = {{width:"100%", height: 1}} />
      <View style={{ height: "53%", flexDirection: "row", marginTop: 20 }}>
        <View style={{ height: "100%" }}>
          <TouchableOpacity onPress={handleImagePress1}>
            <Image style={{ width: 110, height: 110 }} source={imageSource} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleImagePress3}>
            <Image style={{ width: 110, height: 110 }} source={imageSource3} />
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={{ height: "100%" }}>
          <TouchableOpacity onPress={handleImagePress2}>
            <Image style={{ width: 110, height: 110 }} source={imageSource2} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleImagePress4}>
            <Image style={{ width: 110, height: 110 }} source={imageSource4} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 110, height: 110 }}
              source={require("./assets/images/Other.png")}
            />
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={{ height: "100%" }}>
          <TouchableOpacity onPress={handleImagePress5}>
            <Image style={{ width: 110, height: 110 }} source={imageSource5} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleImagePress6}>
            <Image style={{ width: 110, height: 110 }} source={imageSource6} />
          </TouchableOpacity>
        </View>
        <Divider />
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, gap : 30, width: "80%" }}>
        <InputText label="Receiver address" text="" setText={undefined} />
        <InputButton onPress={undefined} label={"Transfer"} />
      </View>
      {/* <Text>{counter}</Text> */}
    </View>
  );
};

export default TransferPage;
