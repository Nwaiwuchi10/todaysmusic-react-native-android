import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import MainStatusBar from "../../components/StatusBar/MainStatusBar";
import Header from "../../components/Headers/Header";
import GoBack from "../../pages/GoBackNavigator/GoBack";

const Details = ({ navigation, document }) => {
  // const id = route.params.id;
  const route = useRoute();
  const id = route.params.id;
  const [mp3Data, setMp3Data] = useState({});

  const [filtered, setFiltered] = useState("");
  const [viewPost, setViewPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    fetch(`https://todaysmusic.herokuapp.com/api/music/${id}`)
      .then((response) => response.json())

      .then((mp3Data) => setMp3Data(mp3Data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDownload = () => {
    // You can use the HTML5 `download` attribute to download the MP3 file
    const downloadLink = document.createElement("a");
    downloadLink.href = mp3Data?.filepath;
    downloadLink.download = `${mp3Data.title}.mp3`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <SafeAreaView>
      <MainStatusBar />

      {/* <Header /> */}

      <ScrollView>
        <View>
          <GoBack />
        </View>
        <View>
          <View>
            <Text
              style={{
                flexDirection: "row",
                marginBottom: 30,
                marginTop: 30,
                alignItems: "center",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {mp3Data?.artist} - {mp3Data?.title}
            </Text>
          </View>
          <View
            style={{
              width: "75%",
              height: 450,
              flexDirection: "row",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={mp3Data?.image}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                flexDirection: "row",
                marginBottom: 0,
                marginTop: 30,
                alignItems: "center",
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                color: "grey",
              }}
            >
              {mp3Data?.artist} {mp3Data?.title}
            </Text>
            <Text
              style={{
                flexDirection: "row",
                marginBottom: 5,
                marginTop: 5,
                alignItems: "center",
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                color: "grey",
              }}
            >
              MP3 Download
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "gray",
                fontSize: 16,
                height: "auto",
                textAlign: "center",
                paddingLeft: 30,
                paddingRight: 30,
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              {mp3Data?.artist} {mp3Data?.title} {mp3Data?.description}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "gray",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 30,
              }}
            >
              Download & Listen below
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleDownload}
              style={{
                textAlign: "center",

                width: 180,
                height: 50,
                color: "white",
                backgroundColor: "#007FFF",
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Downlod MP3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
