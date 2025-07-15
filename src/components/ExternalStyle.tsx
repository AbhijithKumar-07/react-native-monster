import { View, Text } from 'react-native'
import React from 'react'
import styles from '../utils/style'

const ExternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>External Styling</Text>
    </View>
  )
}

export default ExternalStyle