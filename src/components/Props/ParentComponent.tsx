import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <View>
      <Text>Parent Component</Text>
      <ChildComponent name="Abhijith Kumar" age={19} />
    </View>
  )
}

export default ParentComponent