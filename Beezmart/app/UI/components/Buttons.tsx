import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TabButton = ({isFocused, options, onPress, onLongPress}) => {
    
    
    return (
        <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center' }}
            >
              <Text>TAB</Text>
        </TouchableOpacity>
    )
}

const TabButtonAssets = ({isFocused, options, onPress, onLongPress}) => {
    
    
    return (
        <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center' }}
            >
              <Image source={require("../assets/images/Assets_White.png")} style={styles.image2} />
        </TouchableOpacity>
    )
}

const TabButtonTransfer = ({isFocused, options, onPress, onLongPress}) => {
    
    
    return (
        <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center' }}
            >
              <Image source={require("../assets/images/Transfer_White.png")} style={styles.image2} />
        </TouchableOpacity>
    )
}


const CentralTabButton = ({isFocused, options, onPress, onLongPress}) => {
    
    return (
        <View style={styles.wrapper} >
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                // style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 4 }}
                >
                    <Image source={require("../assets/images/HomeButton_DarkMode.png")} style={styles.image} />
                    {/* <Text>HOME</Text> */}
                {/* {options.tabBarIcon(theme.colors.onPrimary)} */}
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
  
    wrapper: {
        // backgroundColor: '#0D0D0D',
        width: 78, 
        height: 78, 
        // borderRadius: 100, 
        // borderWidth: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 23
      },
      image: {
        width: 80, // Adjust the width of the image
        height: 80, // Adjust the height of the image
        resizeMode: 'contain', // Adjust the resizeMode property as needed
      },
      image2: {
        width: 35, // Adjust the width of the image
        height: 35, // Adjust the height of the image
        resizeMode: 'contain', // Adjust the resizeMode property as needed
      },
});

export {CentralTabButton, TabButton, TabButtonTransfer, TabButtonAssets}