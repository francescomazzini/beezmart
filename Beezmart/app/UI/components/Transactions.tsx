import { Text, View } from "react-native"


const TransactionCard = ({}) => {
    
    
    return (
        <View style={{flexDirection: "row", backgroundColor: "#38352F", borderRadius: 30, paddingTop: 20, paddingBottom: 20, marginBottom: 20}}>
            <View style={{width: "70%", paddingLeft: 15, paddingRight: 15, gap : 10}}>
                <View>
                    <Text style = {{fontWeight: "bold", fontSize: 15, color: "#FBC011"}}>From: </Text>
                    <Text>bzx77533bfe6bfba3284e845e34dcff2ab48642460012</Text>
                </View>
                <View>
                    <Text style = {{fontWeight: "bold", fontSize: 15, color: "#FBC011"}}>To: </Text>
                    <Text>bzx77533bfe6bfba3284e845e34dcff2ab48642460012</Text>
                </View>
            </View>
            <View style={{width: "30%", justifyContent: "center"}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>100 BZX</Text>
            </View> 
        </View>
    )
}

export {TransactionCard }
