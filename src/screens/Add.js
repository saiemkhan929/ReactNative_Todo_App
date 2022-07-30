import React, {useContext, useState} from 'react'
import { Text, TextInput, StyleSheet, View, Button, Alert } from 'react-native'
import { TodoContext } from './../store/todoContext';
import { UPDATE, ADD } from './../store/constants';

function Add({navigation, route}) {
    const {title, id, content} = route.params.item
    const [Title, setTitle] = useState(title);
    const [Content, setContent] = useState(content);
    const isAddPage = route.params.name === "Add Todo";
    const [state, dispatch] = useContext(TodoContext)

    const submit = ()=>{
      if(Title === "" || Content === ""){
        Alert.alert("Error!", "Title or Content can't be empty.");
        return;
      }

      if(isAddPage){
        // add new item
        dispatch({
          type: ADD,
          item: {
            title: Title,
            content: Content,
            id: state.length
          }
        })
      }else{
        // add new item
        dispatch({
          type: UPDATE,
          item: {
            title: Title,
            content: Content,
            id: id
          }
        })
      }
      

      Alert.alert(
        "Success!", 
        "Updated successfully",
        [
          {
            "text" : "Go Back",
            "onPress": ()=>{ navigation.navigate("Home")}
          }
        ]
        )
      
    }

  return (
    <View style={style.container}>
      <Text style={style.text}>Title</Text>
      <TextInput 
        style={style.input}
        onChangeText={setTitle}
        value={Title}
        
      />

      <Text style={style.text}>Content</Text>
      <TextInput 
        style={style.input}
        multiline
        numberOfLines={6}
        onChangeText={setContent}
        value={Content}
      />

      <Button 
        onPress={submit} 
        color={isAddPage ? "green" : "orange"} 
        title={isAddPage ? "Add Todo" : "Update"} 
        style={style.button}
      />
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20
  },

  container: {
    padding: 20,
    textAlign: 'center'
  },
  button: {
    marginTop: 15
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10
  }
})

export default Add