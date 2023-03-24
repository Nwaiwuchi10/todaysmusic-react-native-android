import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../../../constants";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export const CardLarge = ({ cover, name, tag, handlePress }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 40 }}>
      <View style={{ width: "100%", height: 307 }}>
        <Image
          src={cover}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
            borderBottomLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ flexDirection: "row", paddingTop: 5, color: "grey" }}>
          <Text style={{ color: "grey", fontSize: 15 }}> {name}</Text>
          <Text style={{ color: "grey", fontSize: 15 }}>-</Text>
          <Text style={{ color: "grey", fontSize: 15, marginLeft: 2 }}>
            {tag}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const CardLargeVideo = ({ cover, name, tag, handlePress }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 40 }}>
      <View style={{ width: "100%", height: 307 }}>
        <Image
          src={cover}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
            borderBottomLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />
        <View style={{ position: "absolute", top: "50%", left: "40%" }}>
          <AntDesign name="playcircleo" size={45} color="white" />
        </View>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ flexDirection: "row", paddingTop: 5, color: "grey" }}>
          <Text style={{ color: "grey", fontSize: 15 }}> {name}</Text>
          <Text style={{ color: "grey", fontSize: 15 }}>-</Text>
          <Text style={{ color: "grey", fontSize: 15, marginLeft: 2 }}>
            {tag}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const CardSmall = ({ cover, name, tag, handlePress }) => {
  return (
    <View
      style={{
        marginTop: 40,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <View style={{ width: "30%", height: 100 }}>
        <Image
          src={cover}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
            borderBottomLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ paddingTop: 5, color: "grey" }}>
          <Text style={{ color: "grey", fontSize: 15 }}> {name}</Text>

          <Text style={{ color: "grey", fontSize: 15, marginLeft: 2 }}>
            {tag}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const CardSmallTrend = ({ cover, name, tag, handlePress }) => {
  return (
    <View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          paddingLeft: 10,
          gap: 10,
        }}
      >
        <View style={{ width: "30%", height: 70 }}>
          <Image
            src={cover}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: SIZES.font,
              borderTopLeftRadius: SIZES.font,
              borderBottomLeftRadius: SIZES.font,
              borderBottomRightRadius: SIZES.font,
            }}
          />
        </View>
        <TouchableOpacity onPress={handlePress}>
          <View style={{ paddingTop: 5, color: "grey" }}>
            <Text style={{ color: "grey", fontSize: 15 }}> {name}</Text>

            <Text
              style={{
                color: "grey",
                fontSize: 15,
                marginLeft: 2,
              }}
            >
              {tag}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
