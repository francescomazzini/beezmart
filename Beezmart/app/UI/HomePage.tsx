import { Image, ScrollView, Text, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext, useEffect, useState } from "react";
import { useWallet } from "../core/useWallet";
import React from "react";
import { Divider } from "react-native-paper";

import { IconFoto } from "./components/Inputs";
import { TransactionCard } from "./components/Transactions";

const HomePage = ({navigation}:{navigation:any}) : JSX.Element => {

    const auth = useContext(AuthContext);

    const {getMoney, getTransactions, getFreeMoney} = useWallet();

    const [money, setMoney] = useState<string>("");

    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Perform your operations here
          await getFreeMoney(auth.user.access_token, auth.user.wallet.address);
          console.log('100 bucks added');
  
        } catch (error) {
          console.log(error.message);
        }
        const moneyResponse = await getMoney(auth.user.access_token);
        setMoney(moneyResponse.balance);

        const transactionsResponse = await getTransactions(auth.user.access_token);
        console.log(transactionsResponse);
        setTransactions(transactionsResponse);
      };
  
      // Call fetchData initially
      fetchData();
  
      // Set up a timer to call fetchData every 5 seconds
      const timerId = setInterval(fetchData, 5000);
  
      // Clean up the timer when the component unmounts or when the next effect runs
      return () => clearInterval(timerId);
    }, [auth.user.access_token, auth.user.wallet.address])
    
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
        <Text>BZX</Text>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}> {money}</Text>
      </View>

      <View style={{ height: "70%" }}>
        <Text style={{ color: "#fbc011", fontSize: 25, marginLeft: 20, marginBottom: 10}}>
          Latest Transactions
        </Text>
        <Divider />
        <ScrollView style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>

          {
            transactions.map((trans) => (
              <TransactionCard addressSender={trans.address_sender} addressReceiver={trans.address_receiver} money={trans.data}/>
            ))
          }

          <View style= {{height: 90}}>

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomePage;
