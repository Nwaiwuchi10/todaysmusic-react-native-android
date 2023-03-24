import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { COLORS, CONTAINER, SHADOWS, SIZES } from "../../../constants";

import { CardLargeVideo } from "../Cards/CardLarge";
import { useNavigation } from "@react-navigation/native";

const MusicVideo = ({ data }) => {
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
          <CardLargeVideo
            cover={data.image}
            name={data.artist}
            tag={data.title}
            handlePress={() =>
              navigation.navigate("VideoDetails", { id: data._id })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default MusicVideo;
