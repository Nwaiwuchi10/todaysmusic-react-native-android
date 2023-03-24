import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { COLORS, DISPLAYBTW, SIZES } from "../../../constants";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
        paddingBottom: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.font,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text
            style={{
              // fontFamily: FONTS.regular,
              fontSize: SIZES.large,
              color: COLORS.white,
            }}
          >
            Todaysmusic
          </Text>
        </TouchableOpacity>

        <View style={{ width: 65, height: 45 }}>
          <Image
            source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>

      {/* <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            // fontFamily: FONTS.bold,
            fontSize: SIZES.small,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Music is Life 👋
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Music")}>
            <Text
              style={{
                // fontFamily: FONTS.bold,

                color: COLORS.white,
              }}
            >
              Music
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Video")}>
            <Text
              style={{
                // fontFamily: FONTS.bold,

                color: COLORS.white,
              }}
            >
              Video
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              // fontFamily: FONTS.bold,

              color: COLORS.white,
            }}
          >
            DJ Mix
          </Text>
        </View>
        <View>
          <Text
            style={{
              // fontFamily: FONTS.bold,

              color: COLORS.white,
            }}
          >
            Contact Us
          </Text>
        </View>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <TextInput placeholder="Search For Music" style={{ flex: 1 }} />
        </View>
      </View>
    </View>
  );
};

export default Header;
