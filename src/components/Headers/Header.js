import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, DISPLAYBTW, SIZES } from "../../../constants";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getMusicApi, getMusicVideoApi } from "../../data/Api";
import MusicHome from "../../pages/Home/MusicHome";
import MusicVideo from "../../pages/Home/MusicVideo";

const Header = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [poster, setPoster] = useState([]);
  const [posters, setPosters] = useState([]);
  const [filtered, setFiltered] = useState("");
  const navigation = useNavigation();
  const handleTextChange = (searchTitle) => {
    setSearchTitle(searchTitle);
  };

  useEffect(() => {
    fetch(getMusicApi)
      .then((response) => response.json())

      .then((posters) => setPosters(posters))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch(getMusicVideoApi)
      .then((response) => response.json())

      .then((poster) => setPoster(poster))
      .catch((error) => console.error(error));
  }, []);

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
          <TextInput
            placeholder="Search For Music"
            onChangeText={handleTextChange}
            style={{ flex: 1 }}
          />
        </View>
        <View
          style={{ backgroundColor: "white", marginTop: 50, height: "auto" }}
        >
          <ScrollView style={{ height: "auto" }}>
            {posters
              ?.filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.artist.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((usery) => (
                <View key={usery._id}>
                  {searchTitle ? (
                    <View>
                      <MusicHome data={usery} />
                    </View>
                  ) : null}
                </View>
              ))}
            {poster
              ?.filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.artist.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((usery) => (
                <View key={usery._id}>
                  {searchTitle ? (
                    <View>
                      <MusicVideo data={usery} />
                    </View>
                  ) : null}
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Header;
