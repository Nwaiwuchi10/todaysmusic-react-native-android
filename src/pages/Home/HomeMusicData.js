import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import Header from "../../components/Headers/Header";
import Loader from "../../components/Loader/Loader";
import { getMusicApi, getMusicVideoApi } from "../../data/Api";
import { CardSmall, CardSmallTrend } from "../Cards/CardLarge";

import MusicHome from "./MusicHome";
import MusicVideo from "./MusicVideo";

const HomeMusicData = () => {
  const navigation = useNavigation();
  const [posters, setPosters] = useState([]);
  const [poster, setPoster] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [viewPost, setViewPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    fetch(getMusicApi)
      .then((response) => response.json())

      .then(
        (posters) => setPosters(posters),
        setLoading(false),
        setError(false)
      )
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
        height: "100%",
      }}
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Text style={{ color: "red", fontSize: 20, textAlign: "center" }}>
            {" "}
            Error Check your network connection
          </Text>
        ) : (
          <>
            <Text
              style={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 25,
                marginTop: 25,
                fontWeight: "bold",
                color: "#212121",
              }}
            >
              Latest Music
            </Text>
            {posters.map((item, index) => (
              <View key={index}>
                <MusicHome data={item} />
              </View>
            ))}

            <Text
              style={{
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 25,
                marginTop: 45,
                fontWeight: "bold",
                color: "#212121",
              }}
            >
              Music Videos
            </Text>
            {poster.map((item, index) => (
              <View key={index}>
                <MusicVideo data={item} />
              </View>
            ))}
          </>
        )}

        <View>
          <Text
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 25,
              marginTop: 45,
              fontWeight: "bold",
              color: "#212121",
            }}
          >
            Recomended Songs
          </Text>
          {posters
            ?.filter((value) => {
              if (filtered === "puyol") {
                return value;
              } else if (value.recommendSong) {
                return value;
              }
            })
            .slice(0, 10)
            .map((item, index) => (
              <View key={index}>
                <CardSmall
                  cover={item.image}
                  name={item.artist}
                  tag={item.title}
                  handlePress={() =>
                    navigation.navigate("Details", { id: item._id })
                  }
                />
              </View>
            ))}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          <Text
            style={{
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 25,
              marginTop: 30,
              marginBottom: 10,
              fontWeight: "bold",
              color: "#212121",
            }}
          >
            Recomended Songs
          </Text>
          {posters
            ?.filter((value) => {
              if (filtered === "puyol") {
                return value;
              } else if (value.category === "TRENDING") {
                return value;
              }
            })
            .slice(0, 10)
            .map((item, index) => (
              <View key={index}>
                <CardSmallTrend
                  cover={item.image}
                  name={item.artist}
                  tag={item.title}
                  handlePress={() =>
                    navigation.navigate("Details", { id: item._id })
                  }
                />
              </View>
            ))}
          <View style={{ marginTop: 30 }}>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeMusicData;
