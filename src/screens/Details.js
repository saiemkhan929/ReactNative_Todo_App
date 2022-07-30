import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Details({navigation, route}) {
    const {title, content} = route.params.item

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.content}>{content}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    fontSize: 26,
    color: 'tomato',
    padding:10
  },
  content: {

    padding:10
  },
  container: {
    padding: 20
  }
})

export default Details