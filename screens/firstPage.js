import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ScrollView,
} from "react-native";

const FirstPage = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.redText}>First Page</Text>
      </View>
      <View style={styles.biggerContainer}>
        <Text style={styles.redText}>First Page</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Button
          title="Press me"
          onPress={() => console.log("Simple Button pressed")}
        />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  biggerContainer: {
    flex: 2,
    backgroundColor: "black",
  },
  redText: {
    color: "red",
    marginLeft: "1rem",
  },
  tinyLogo: {
    height: "2rem",
    width: "2rem",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
export default FirstPage;
