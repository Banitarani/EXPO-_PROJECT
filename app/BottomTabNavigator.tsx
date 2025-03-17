// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Cart  from './Cart';
import Notification from './Notification';
import AddToCartScreen from './AddToCartScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
             if (route.name === 'Cart') {
              iconName = 'cart';
            } else if (route.name === 'AddToCart') {
              iconName = 'cart-outline';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="AddToCart" component={AddToCartScreen} options={{ title: 'Add to Cart' }} />
        <Tab.Screen name="Notifications" component={Notification} />
      </Tab.Navigator>

  );
};

export default BottomTabNavigator;
