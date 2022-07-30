
import React from 'react';
import Home from './src/screens/Home';
import Add from './src/screens/Add';
import { NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import globalStyle from './src/styles/globalStyle';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button
} from 'react-native';
import Provider from './src/store/Provider';
import Details from './src/screens/Details';



const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar  />
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" 
              component={Home} 
              options={({ navigation, route }) =>({
                title: 'Your Todo List!',
                headerRight:()=>(
                  <Button 
                    color="tomato"
                    title='Add' 
                    onPress={
                    ()=>{
                      navigation.navigate('Add', {name: 'Add Todo', item: {title: '', id:'', content:''}})
                    }
                  }/>)
                })}
              
            />
            <Stack.Screen name="Add" component={Add} options={({ route }) => ({ title: route.params.name })}/>
            <Stack.Screen name="Details" component={Details} options={{title: "Details"}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};


export default App;
