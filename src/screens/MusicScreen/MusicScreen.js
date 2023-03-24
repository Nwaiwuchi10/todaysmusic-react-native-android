import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MusicHome from "../../pages/Home/MusicHome";
import Header from "../../components/Headers/Header";
import { useNavigation } from "@react-navigation/native";
import { getMusicApi } from "../../data/Api";

const MusicScreen = () => {
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
  return (
    <View style={{ height: "100%" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
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
          All Musics
        </Text>
        {posters.map((item, index) => (
          <View key={index}>
            <MusicHome data={item} />
          </View>
        ))}
        <View style={{ marginTop: 40 }}>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MusicScreen;
