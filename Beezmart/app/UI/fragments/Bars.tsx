import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage";
import { View } from "react-native";
import {
  CentralTabButton,
  TabButton,
  TabButtonAssets,
  TabButtonTransfer,
} from "../components/Buttons";
import TransferPage from "../TransferPage";
import AssetsPage from "../AssetsPage";

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Transfer"
        component={TransferPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Assets"
        component={AssetsPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#27241f",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          width: "100%",
          backgroundColor: "#0D0D0D",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return label === "Home" ? (
            <CentralTabButton
              key={index}
              isFocused={isFocused}
              options={options}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          ) : label === "Assets" ? (
            <TabButtonAssets
              key={index}
              isFocused={isFocused}
              options={options}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          ) : (
            <TabButtonTransfer
              key={index}
              isFocused={isFocused}
              options={options}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </View>
  );
};

export { BottomBar };
