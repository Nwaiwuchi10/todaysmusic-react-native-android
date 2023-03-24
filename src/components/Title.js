import { View, Text } from "react-native";
import React from "react";

const Title = ({ title }) => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 30,

          marginTop: 30,
          // fontWeight: "bold",
          color: "#212121",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Title;
