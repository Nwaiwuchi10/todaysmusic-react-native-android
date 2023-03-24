import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
export default GoBack = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "whitesmoke", height: 60 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="leftcircleo"
          size={33}
          color="#001F2D"
          style={{ marginLeft: 20, paddingTop: 15, paddingBottom: 0 }}
        />
      </TouchableOpacity>
    </View>
  );
};
