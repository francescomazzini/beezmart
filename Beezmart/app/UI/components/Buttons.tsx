import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

const CentralTabButton = ({isFocused, options, onPress, onLongPress}) => {
    
    return (
        <View style={styles.hexagonWrapper} >
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                // style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 4 }}
                style={styles.hexagonButton}
                >
                    <Text>HOME</Text>
                {/* {options.tabBarIcon(theme.colors.onPrimary)} */}
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
  
    circleCentralTabButton: {
        backgroundColor: '#0D0D0D',
        width: 78, 
        height: 78, 
        borderRadius: 100, 
        borderWidth: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 23
      },
      hexagonWrapper: {
        width: 100,
        height: 57.74, // height is calculated using the formula (side length / 2) * sqrt(3)
        marginVertical: 23,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 23
      },
      hexagonButton: {
        width: 100,
        height: 115.47, // double the height for the hexagon
        backgroundColor: '#0D0D0D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export {CentralTabButton, TabButton}