import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  const [currentDay, setCurrentDay] = useState("");

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

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
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

      {currentDay === "Monday" && (
        <View style={styles.Box}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Lab-Human Computer Interaction</Text>
              <Text style={styles.venue}>Lab-C (C-8)</Text>
              <Text style={styles.date}>8:30 AM</Text>
            </View>
          </View>
        </View>
      )}

      {currentDay === "Monday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Mobile Application Development</Text>
              <Text style={styles.venue}>Block-C (C-6)</Text>
              <Text style={styles.date}>11:30 AM</Text>
            </View>
          </View>
        </View>
      )}

      {currentDay === "Monday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Computer Vision</Text>
              <Text style={styles.venue}>G-4 (N-13)</Text>
              <Text style={styles.date}>01:00 PM</Text>
            </View>
          </View>
        </View>
      )}

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

      {currentDay === "Wednesday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Computer Vision</Text>
              <Text style={styles.venue}>G-4 (N-13)</Text>
              <Text style={styles.date}>11:30 AM</Text>
            </View>
          </View>
        </View>
      )}
      {currentDay === "Wednesday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Mobile App Dev</Text>
              <Text style={styles.venue}>Block-C (C-5)</Text>
              <Text style={styles.date}>01:00 PM</Text>
            </View>
          </View>
        </View>
      )}

      {currentDay === "Thursday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Human Computer Interaction</Text>
              <Text style={styles.venue}>Block-C (C-6)</Text>
              <Text style={styles.date}>08:30 AM</Text>
            </View>
          </View>
        </View>
      )}

      {currentDay === "Thursday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Software Project Managment</Text>
              <Text style={styles.venue}>Block-C (C-6)</Text>
              <Text style={styles.date}>10:00 AM</Text>
            </View>
          </View>
        </View>
      )}
      {currentDay === "Thursday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Lab-Mobile App Dev</Text>
              <Text style={styles.venue}>Lab-A (C-18)</Text>
              <Text style={styles.date}>11:30 AM</Text>
            </View>
          </View>
        </View>
      )}

      {currentDay === "Friday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Human Computer Interaction</Text>
              <Text style={styles.venue}>Block-C (C-5)</Text>
              <Text style={styles.date}>08:30 AM</Text>
            </View>
          </View>
        </View>
      )}

      {currentDay === "Friday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <View>
              <Text style={styles.subject}>Software Project Managment</Text>
              <Text style={styles.venue}>Block-C (C-6)</Text>
              <Text style={styles.date}>10:00 AM</Text>
            </View>
          </View>
        </View>
      )}
      {currentDay === "Saturday" && (
        <View style={[styles.Box, { marginTop: 10 }]}>
          <View style={styles.content}>
            <Text style={styles.data}>It's a relaxing day!</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 140,
    paddingBottom: 10,
  },
  Box: {
    height: 140,
    width: 345,
    color: "white",
    backgroundColor: "#5B2C6F",
    borderRadius: 10,
    marginTop: 0,
    marginLeft: 7,
  },

  img: {
    width: 5,
    height: 5,
    marginLeft: 120,
    marginTop: 20,
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
    paddingTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#5B2C6F",

    textAlign: "center",
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
    marginTop: 30,
  },
  venue: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
