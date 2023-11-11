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
        // Define a function to fetch assets
    const fetchAssets = async () => {
        try {
        // Call the getAssets function
        const resp = await getAssets(auth.user.access_token);
        console.log(resp);
        setAssets(resp);
        } catch (error) {
        console.error('Error fetching assets:', error);
        }
    };

    // Call the fetchAssets function immediately when the component mounts
    fetchAssets();

    // Set up an interval to fetch assets every five seconds
    const intervalId = setInterval(fetchAssets, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
    }, []);

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
