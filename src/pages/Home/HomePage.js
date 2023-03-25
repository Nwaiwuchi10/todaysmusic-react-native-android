import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS, SIZES } from "../../../constants";
import MainStatusBar from "../../components/StatusBar/MainStatusBar";
import Header from "../../components/Headers/Header";
import { getMusicApi, getMusicVideoApi } from "../../data/Api";
import MusicHome from "./MusicHome";
import MusicVideo from "./MusicVideo";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeMusicData from "./HomeMusicData";
import Loader from "../../components/Loader/Loader";
import { Loaders } from "../../components/Loader/Loaders";

const HomePage = () => {
  const { height } = Dimensions.get("window");
  const isAndroid = Platform.OS === "android";

  if (isAndroid) {
    const realHeight = height - StatusBar.currentHeight;
    // console.log("Android phone height:", realHeight);
  }
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
    <SafeAreaView style={styles.safediv}>
      <MainStatusBar background={COLORS.primary} />

      <View>
        <HomeMusicData />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safediv: {},
  list: {
    // height: "100%",
  },
});
export default HomePage;
