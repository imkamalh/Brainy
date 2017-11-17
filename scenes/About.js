import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card, CardItem, Right, Icon, Body } from "native-base";

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={styles.textStyle}>
              Made by: Muhammad Kamal Hidayatullah
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.textStyle}>Credits: API from newsapi.org</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
const styles = {
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};
export default About;
