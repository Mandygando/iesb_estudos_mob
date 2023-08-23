import React from 'react'
import { Text } from 'react-native'


const MinMax = (props) => {

    const { min, max } = props;
   console.warn(props);

  return (
    <Text>{max}</Text>
  )
}

export default MinMax