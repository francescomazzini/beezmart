import { Text, View } from "react-native";
import { AuthContext } from "../core/useUser";
import { useContext } from "react";


const HomePage = ({navigation}:{navigation:any}) : JSX.Element => {

    
  const auth = useContext(AuthContext);

  console.log(JSON.stringify(auth.user))
  
    return (
      <View>
        <Text style={{color: "black"}}>AOO</Text>
      </View>
    );
  }


export default HomePage;