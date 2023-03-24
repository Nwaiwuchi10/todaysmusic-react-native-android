import { View, Text } from "react-native";
import React from "react";

const Rough = () => {
  return (
    <View>
      <FlatList
        data={posters}
        renderItem={({ item }) => (
          <>
            {/* <MusicHome data={item} /> */}
            <TouchableOpacity onPress={() => navigation.navigate("Details")}>
              <MusicHome data={item} />
            </TouchableOpacity>
          </>
        )}
        key={(item) => item._id}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={<Header />}
      />
    </View>
  );
};

export default Rough;
