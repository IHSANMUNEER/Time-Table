import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import database from "./firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [currentDay, setCurrentDay] = useState("");
  const [classes, setClasses] = useState([]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const today = new Date();
    const dayIndex = today.getDay();
    setCurrentDay(daysOfWeek[dayIndex]);
  }, []);

  useEffect(() => {
    const db = getDatabase(database);
    const dbRef = ref(db, "classes");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        setClasses(data);
      }
    });
  }, []);

  function getDay(item) {
    if (item === "Sunday") {
      setCurrentDay(item);
    }
    if (item === "Monday") {
      setCurrentDay(item);
    }
    if (item === "Tuesday") {
      setCurrentDay(item);
    }
    if (item === "Wednesday") {
      setCurrentDay(item);
    }
    if (item === "Friday") {
      setCurrentDay(item);
    }
    if (item === "Saturday") {
      setCurrentDay(item);
    }
    if (item === "Thursday") {
      setCurrentDay(item);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.expand}
          onPress={() => {
            // Navigate to a screen with MyComponent
          }}
        >
          <Ionicons name="person-circle-outline" size={40} color="#5B2C6F" />
        </TouchableOpacity>
      </View>
      <View>
        <Image style={styles.img} source={require("./logo4.png")} />
      </View>

      <Text style={styles.title}>Today is {currentDay}</Text>

      {currentDay === "Sunday" && (
        <View style={styles.Box}>
          <View style={styles.content}>
            <Text style={styles.data}>It's a relaxing day!</Text>
          </View>
        </View>
      )}

      {currentDay === "Monday" &&
        classes.monday &&
        classes.monday.map((item, index) => (
          <View style={styles.Box} key={index}>
            <View style={styles.content}>
              <View>
                <Text style={styles.subject}>{item.subject}</Text>
                <Text style={styles.venue}>{item.venue}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        ))}

      {currentDay === "Tuesday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Lab-Software Project Managment</Text>
              <Text style={styles.venue}>Lab-F (C-13)</Text>
              <Text style={styles.date}>11:30 AM</Text>
            </View>
          </View>
        </View>
      )}

      {currentDay === "Wednesday" &&
        classes.wednesday &&
        classes.wednesday.map((item) => (
          <View style={styles.Box}>
            <View style={styles.content}>
              <View>
                <Text style={styles.subject}>{item.subject} Hello</Text>
                <Text style={styles.venue}>{item.venue}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        ))}

      {currentDay === "Thursday" &&
        classes.thursday &&
        classes.thursday.map((item) => (
          <View style={styles.Box}>
            <View style={styles.content}>
              <View>
                <Text style={styles.subject}>{item.subject}</Text>
                <Text style={styles.venue}>{item.venue}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        ))}

      {currentDay === "Friday" &&
        classes.friday &&
        classes.friday.map((item) => (
          <View style={styles.Box}>
            <View style={styles.content}>
              <View>
                <Text style={styles.subject}>{item.subject}</Text>
                <Text style={styles.venue}>{item.venue}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        ))}

      {currentDay === "Saturday" && (
        <View style={styles.Box}>
          <View style={styles.content}>
            <Text style={styles.data}>It's a relaxing day!</Text>
          </View>
        </View>
      )}

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={daysOfWeek}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => getDay(item)}>
              <View style={styles.hflat}>
                <Text style={styles.ext} key={item}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 140,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  Box: {
    width: "100%",
    color: "white",
    height: 100,
    backgroundColor: "#5B2C6F",
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#5B2C6F",
    borderRadius: 10,
    // marginHorizontal: 7,
    marginBottom: 10,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  img: {
    width: 5,
    height: 5,
    marginHorizontal: 120,
    marginVertical: 40,
    padding: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#5B2C6F",

    textAlign: "center",
    marginTop: -50,
  },
  subject: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  data: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop: 30,
  },
  venue: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  expand: {
    position: "absolute",
    top: 40,
    left: 130,
  },
  hflat: {
    flexDirection: "row",
    height: 80,
    width: 114,
    backgroundColor: "#5B2C6F",
    marginRight: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  ext: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
});
