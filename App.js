import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import ReadQRCode from "./src/screens/ReadQRCode";
import GenerateQRCode from "./src/screens/GenerateQRCode";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="GenerateQRCode" component={GenerateQRCode} options={{ title:'Gerar QR Code' }}/>
        <Stack.Screen name="ReadQRCode" component={ReadQRCode} options={{ title: 'Ler QR Code'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




