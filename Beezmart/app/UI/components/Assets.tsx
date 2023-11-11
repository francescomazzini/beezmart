import { Text, View } from "react-native"


const AssetHorizontalCard = ({id, timestamp, amount}) => {

    const shrinkId = (id) => {
        if (id.length < 11) {
          return id;
        }
      
        const shortenedId = id.substring(0, 7) + '...' + id.substring(id.length - 7);
        return shortenedId;
      };

    const timestampToDate = (timestamp) => {
        // Create a new Date object using the timestamp
        const date = new Date(timestamp * 1000);
    
        // Get day, month, and year components
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
    
        // Concatenate components in the "dd/MM/YYYY" format
        const formattedDate = `${day}.${month}.${year}`;
    
        return formattedDate;
    };
      

    return(
        <View style={{flexDirection: "row", height: 40, gap :10}}>
            <View style={{width: "45%", height: "100%"}}>
                <Text style = {{fontWeight: "bold", fontSize: 15, color: "#FBC011"}}> Asset Name </Text>
                <Text > {shrinkId(id)} </Text>
            </View>
            <View style={{width: "25%", height: "100%"}}>
                <Text style = {{fontWeight: "bold", fontSize: 15, color: "#FBC011"}}></Text>
                <Text > {timestampToDate(timestamp)} </Text>
            </View>
            <View style={{width: "25%", height: "100%"}}>
                <Text style = {{fontWeight: "bold", fontSize: 15, color: "#FBC011"}}></Text>
                <Text > {amount} BZX </Text>                
            </View>
        </View>
    )

}

export {AssetHorizontalCard}