import { throwStatement, tsMethodSignature } from '@babel/types';
import React , {Component, useState, useEffect} from 'react';
// import 'react-native-gesture-handler'
import { Button, StyleSheet,Text,View, FlatList} from 'react-native';

//Hook과 useState와 useEffect를 배워봄.

//클래스 컴포넌트 함수형 방식
// class Hook extends Component{

//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'minsoo'
//       }
//     }
//     changeName = () => {
//       this.setState({
//         name: 'MinSu'
//       });
//     }
//     render() {
//       return(
//         <View style = {{flex:1, alignItems:'center', justifyContent: 'center'}}>      
//         <Text>안녕하세요 Hook Test입니다.</Text>
//         <Button title ={'이름변경'} onPress={()=> this.changeName()} />
//         <Text>안녕하세요 {this.state.name}님</Text>
//         </View>
//           );
//     }
// }




//함수형 컴포넌트 방식. 클래스 컴포넌트보다 코드가 확실히 심플하고 줄어듬. 
const Hook: () => React$Node = () => {

  const [name, setName] = useState("Minsoo");

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          setUsers(users);
          setLoading(false);
        });
  });

  return (
    <View style = {{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>안녕하세요 Hook Test입니다.</Text>
      <Button title ={'이름변경'} onPress={()=> setName('MinSoo')} />
      <Text>반갑습니다 {name}님</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

 };

const style = StyleSheet.create({

});


export default Hook;
