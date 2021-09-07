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
import { Button, StyleSheet,Text,View, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
      if (route.params?.post) {
        // Post updated, do something with `route.params.post`
        // For example, send the post to the server
        // 받은 파라미터 경고창으로 띄움.
        alert(route.params.post);
      }
    }, [route.params?.post]);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Create post"
          onPress={() => navigation.navigate('CreatePost')}
        />
        {/* params뒤에 ? 붙은 이유는 아직 post값이 넘어오지 않은 상태라. ? 없애면 에러남 */}
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
    );
  }
  
  function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="Input Your Text Anything"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Home',
              params: { post: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const style = StyleSheet.create({

});


export default App;
