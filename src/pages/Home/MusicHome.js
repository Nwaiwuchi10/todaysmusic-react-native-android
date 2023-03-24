import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { COLORS, CONTAINER, SHADOWS, SIZES } from "../../../constants";
import { CardLarge } from "./Index";
import { useNavigation } from "@react-navigation/native";

const MusicHome = ({ data }) => {
  const navigation = useNavigation();
  useEffect(() => {}, []);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <View style={{ ...SHADOWS.dark }}>
          <CardLarge
            cover={data.image}
            name={data.artist}
            tag={data.title}
            handlePress={() => navigation.navigate("Details", { id: data._id })}
          />
        </View>
      </View>
    </View>
  );
};

export default MusicHome;
