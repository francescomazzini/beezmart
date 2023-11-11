import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext, useEffect, useState } from "react";
import { useWallet } from "../core/useWallet";
import React from "react";
import { Divider } from "react-native-paper";

import { IconFoto } from "./components/Inputs";
import { AssetHorizontalCard } from "./components/Assets";
import { useOpenAI } from "../core/useOpenAI";

const AssetsPage = ({navigation}:{navigation:any}) : JSX.Element => {

    const [assets, setAssets] = useState([]);

    
    const auth = useContext(AuthContext);

    const {getAssets} = useWallet();

    const {getCatalogized} = useOpenAI();

    useEffect(() => {

        getAssets(auth.user.access_token)
        .then((resp) => {console.log(resp); setAssets(resp)})

        getCatalogized("https://thumbs.dreamstime.com/z/footbridge-sea-beach-meditation-journey-calm-hormone-sunset-sea-yoga-footbridge-sea-beach-meditation-journey-calm-hormone-128381503.jpg")
        .then((resp) => console.log("Catalogized is " + JSON.stringify(resp.choices[0].message.content)))
        
    }, [])
    
  return (
    <View style={{ height: "100%", backgroundColor: "#27241f" }}>
        <TouchableOpacity style={{position: "absolute", zIndex: 2, top: 50, right: 20}} onPress={() => navigation.navigate('AssetUpload')}>
            <Image source={require("./assets/images/Pulsante_Plus.png")} style={{right: 20, height: 60, width: 60}}/>
        </TouchableOpacity>
        <Text style={{ color: "#fbc011", fontSize: 25, marginLeft: 20, marginBottom: 10, marginTop: 50}}>
          Assets
        </Text>
        <Divider />
        <ScrollView style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>

            {
                assets.map(asset => (
                    <AssetHorizontalCard id={asset.id} timestamp={asset.timestamp} amount={asset.amount}/>
                ))
            }
          
          <View style= {{height: 90}}>

          </View>
        </ScrollView>
    </View>
  );
};

export default AssetsPage;
