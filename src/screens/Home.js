import React, { useState, useContext } from 'react'
import { View, Text, Alert, FlatList, StyleSheet, RefreshControl, Button, Touchable, Pressable } from 'react-native'
import { REMOVE } from '../store/constants.js';
import globalStyle from '../styles/globalStyle.js'
import { TodoContext } from './../store/todoContext';

const Home = ({navigation, route}) => {

  const [refreshing, setRefreshing] = useState(false);
  const [state, dispatch] = useContext(TodoContext) 

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(()=>{
            setRefreshing(false)
        }, 3000)
    }

  return (
    <View>
        <FlatList
            data={state}
            renderItem={({item}) => (
                <View style={syle.listItem} >
                    <Pressable 
                        style={syle.listItemPressable} 
                        onPress={()=>{
                            navigation.navigate("Details", {item});
                        }}>
                        <Text style={syle.listItemText}>{item.title}</Text>
                    </Pressable>
                    <View style={syle.listItemAction}>
                        <Button title="Update" onPress={()=>{ navigation.navigate('Add', {name: 'Update Todo', item})}}/>
                        <Button color="red" onPress={()=>{dispatch({type: REMOVE, item})}} title="Remove" />
                    </View>
                </View>
            )}
            keyExtractor={(item, id) => {
                return id
            }}
            refreshControl = {
                <RefreshControl
                    refreshing = {refreshing}
                    onRefresh = {onRefresh}
                    colors = {['green', 'blue', 'tomato']}
                />
            }

            ListEmptyComponent = {<View style={syle.emptyText}><Text >No todos! Please add now!!</Text></View>}
            
        />
        
    </View>
  )
}

const syle = StyleSheet.create({

    listItem: {
        backgroundColor: '#000',
        color: '#fff',
        margin: 2,
        flexDirection: 'row',
        
    },
    listItemPressable: {
        color: '#fff',
        padding: 10,
        textAlign: 'left',
        width: '58%'
    },
    listItemText: {
        color: '#fff',
        padding: 10,
    },
    listItemAction: {
        flex: 1,
        flexDirection: 'row',
        width: '42%',
        justifyContent: 'space-between',
        padding:10
    },
    emptyText: {
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: 'red',
        borderWidth: 0.4,
        padding:20
    }
})

export default Home

