import { Image, ScrollView, Text, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext, useEffect, useState } from "react";
import { useWallet } from "../core/useWallet";
import React from "react";
import { Divider } from "react-native-paper";

import { IconFoto } from "./components/Inputs";
import { AssetHorizontalCard } from "./components/Assets";

const AssetsPage = ({navigation}:{navigation:any}) : JSX.Element => {

    const [assets, setAssets] = useState([]);
    
    const auth = useContext(AuthContext);

    const {getAssets} = useWallet();

    useEffect(() => {

        getAssets(auth.user.access_token)
        .then((resp) => {console.log(resp); setAssets(resp)})
        
    }, [])
    
  return (
    <View style={{ height: "100%", backgroundColor: "#27241f" }}>
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
