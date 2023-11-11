import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../HomePage';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
      <Tab.Navigator initialRouteName='HomePage' /*tabBar={props => <MyTabBar {...props} />}*/>
        <Tab.Screen name="Home" component={HomePage} options={{ 
              headerShown: false, 
              tabBarShowLabel: false, 
            //   tabBarIcon: (color) => (
            //       <Icon name="settings" color={color} size={30} />
            //   )
          }}/>
      </Tab.Navigator>
    );
  }
  

  export {BottomBar}