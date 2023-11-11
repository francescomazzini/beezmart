import { Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Divider } from "react-native-paper";

import * as ImagePicker from 'react-native-image-picker';
import React from "react";

const AssetUploadPage = () : JSX.Element => {

    const [response, setResponse] = React.useState<any>(null);

    const onButtonPress = React.useCallback((type, options) => {
        if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse);
        } else {
        ImagePicker.launchImageLibrary(options, setResponse);
        }
    }, []);

    return(
        <View style={{ height: "100%", backgroundColor: "#27241f" }}>

            <Text style={{ color: "#fbc011", fontSize: 25, marginLeft: 20, marginBottom: 10, marginTop: 50}}>
                New Asset
            </Text>
            <Divider />

            <ScrollView>
            <View style={[styles.buttonContainer, {alignItems: "center"}]}>
            {actions.map(({title, type, options}) => {
                return (
                <Button
                    key={title}
                    onPress={() => onButtonPress(type, options)}>
                    {title}
                </Button>
                );
            })}
            </View>

            {response?.assets &&
            response?.assets.map(({uri}: {uri: string}) => (
                <View key={uri} style={styles.imageContainer}>
                <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={styles.image}
                    source={{uri: uri}}
                />
                </View>
            ))}
        </ScrollView>


        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'aliceblue',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 8,
    },
    imageContainer: {
      marginVertical: 24,
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
  });

  const actions = [
    {
      title: 'Take Image',
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        // includeExtra,
      },
    },
    {
      title: 'Select Image',
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
        // includeExtra,
      },
    },
  ];
  


export default AssetUploadPage;