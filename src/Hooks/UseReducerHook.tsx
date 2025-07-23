import { View, Text, Button } from "react-native";
import React, { useReducer } from "react";

const initialValue = { count: 0 };

interface Counter {
  count: number;
}

interface Action {
  type: string;
}

const reducerFun = (counter: Counter, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: counter.count + 1 };
    case "decrement":
      return { count: counter.count - 1 };
    default:
      return counter;
  }
};

const UseReducerHook = () => {
  let [counter, dispatch] = useReducer(reducerFun, initialValue);
  return (
    <View>
      <Text>Count: {counter.count}</Text>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "decrement" })}
      />
    </View>
  );
};

export default UseReducerHook;
