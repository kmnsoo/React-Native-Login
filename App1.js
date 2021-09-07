/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// stack 네비게이션을 이용하여 화면간 이동 중 가장 중요한 것 중 하나는 화면 이동하며 데이터를 주고 받는 것이다
import React from 'react';
// import 'react-native-gesture-handler'
import { Button, StyleSheet,Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Hook from './Components/Hook';

const Stack = createNativeStackNavigator();


function HomeScreen({navigation}) {
  return(
    <View style = {{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Hallo! Here is Fucking Home Screen  :).</Text>
      <Button title= "프로필 페이지로 이동" onPress={()=>navigation.navigate('Profile', {
         //  itenmId: 86,
        otehrParam: 'anything you want here',
      })}/>

    <Button title= "Hook을 이용하는 방법" onPress={()=>navigation.navigate('Hook', {
         //  itenmId: 86,
        otehrParam: 'anything you want here',
      })}/>
    </View>
  )
} 
 
function ProfileScreen({ route, navigation}) {

  const { itenmId } = route.params;
  const { otehrParam } = route.params;

  return( 
    <View style = {{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>ProfileScreen입니다.</Text>
      <Text>itemId: {JSON.stringify(itenmId)}</Text>
      <Text>otehrParam: {JSON.stringify(otehrParam)}</Text>

      {/* <Button title= "프로필 페이지로 이동" onPress={()=>navigation.navigate('Profile')}/> */}
      {/* Push는 계속해서 새로운 페이지를 쌓아 올린다. 자신을 호출해서 */}
      <Button title= "프로필 페이지로 이동" onPress={()=>navigation.push('Profile')}/>
      <Button title= "Hook Test" onPress={()=>navigation.push('Profile')}/>
      {/* Navgation.gaBack을 이용하여 이전 페이지로 이동 가능 */}
      <Button title= "Go back" onPress={()=>navigation.goBack('')}/>
      {/* poToTop은 push로 계속 자신 호출하여 페이지가 만들어 져도 한번에 홈 화면으로 이동 가능 */}
      <Button title= "popToTop" onPress={()=>navigation.popToTop('')}/>

    </View>
  )
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{ itenmId: 10000}} options={{ title: 'Profile' }} /> 
        <Stack.Screen name="Hook" component={Hook}  options={{ title: 'Welcome' }} />     
     </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({

});


export default App;
