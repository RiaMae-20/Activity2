import { StatusBar } from "react-native";
import { StyleSheet, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import Icons1 from "react-native-vector-icons/Foundation";
import Icons2 from "react-native-vector-icons/FontAwesome";
import Icons3 from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon name="menu" size={35} color="white" />
        <Text style={styles.name}>Telegram</Text>
        <Icons name="search" size={35} color="white" />
      </View>
      <View style={styles.body}>
        <View style={styles.body1}>
          <Image
            style={styles.images}
            source={require("./src/3.jpg")}
            resizeMode="stretch"
          />

          <View style={styles.bodys}>
            <Text style={styles.time}>7:27 PM</Text>
            <Text style={styles.date}>2022</Text>
          </View>
        </View>
        <View style={styles.space}></View>
        <View style={styles.body2}>
          <Text style={styles.your}>Your contacts on Telegram</Text>

          <View style={styles.body3}>
            <Image
              style={styles.images1}
              source={require("./src/2.jpg")}
              resizeMode="stretch"
            />
            <View style={styles.body4}>
              <Text style={styles.Hhs}>Hhs Elyn Jean</Text>
              <Text style={styles.last}>last seen Aug 08 at 3:09 AM</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.foot}>
        <View style={styles.foots}>
          <Icons3 style={styles.ic1} name="pencil" size={20} color="#c5c9cc" />
          <View style={styles.bg}>
            <Icons2 style={styles.ic2} name="camera" size={20} color="white" />
          </View>
        </View>
      </View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#517fa3"
        translucent={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: "#517fa3",
    alignItems: "center",
    paddingBottom: 10,
  },
  body: {
    flex: 1,
  },
  foot: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
    paddingBottom: 10,
  },
  body1: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    paddingTop: 5,
    elevation: 10,
  },
  body2: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingTop: 20,
  },
  images: {
    height: 60,
    width: 280,
  },
  name: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  date: {
    color: "white",
    backgroundColor: "#c5c9cc",
    borderRadius: 20,
    textAlign: "center",
    padding: 5,
  },
  time: {
    color: "#c5c9cc",
  },
  space: {
    backgroundColor: "#f1f1f1",
    height: 20,
  },
  your: {
    color: "#3aa3d5",
  },
  images1: {
    height: 50,
    width: 50,
  },
  body3: {
    flexDirection: "row",
  },
  body4: {
    flexDirection: "column",

    paddingLeft: 10,
    justifyContent: "center",
  },
  Hhs: {
    color: "black",
    fontWeight: "700",
  },
  last: {
    color: "#c5c9cc",
    fontWeight: "400",
  },
  ic1: {
    backgroundColor: "#fefefe",
    padding: 10,
    height: 40,
    width: 40,
    borderRadius: 30,
    textAlign: "center",
    elevation: 10,
  },
  bg: {
    backgroundColor: "#66A9DE",
    padding: 10,
    height: 55,
    width: 55,
    borderRadius: 30,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  foots: {
    alignItems: "center",
    gap: 10,
  },
});
