import { Text, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext, useEffect } from "react";
import { useWallet } from "../core/useWallet";


const HomePage = ({navigation}:{navigation:any}) : JSX.Element => {

    const auth = useContext(AuthContext);

    const {getMoney} = useWallet();
    
    useEffect(() => {

        getMoney(auth.user.access_token)
        .then((resp) =>console.log(resp))

    }, []) 

    

  console.log(JSON.stringify(auth.user))
  
    return (
      <View>
        <Text style={{color: "black"}}>AOO</Text>
      </View>
    );
  }


export default HomePage;