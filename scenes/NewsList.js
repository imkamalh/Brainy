import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  Card,
  Body,
  CardItem,
  Right,
  Icon,
  Button,
  Content,
  Container
} from "native-base";
import axios from "axios";
import About from "./About";

class NewsList extends Component {
  onReadMore = newsId => {
    this.props.navigation.navigate("Details", {newsId});
  };
  state = { newsSrc: []};
  componentWillMount() {
    axios
      .get("https://newsapi.org/v1/sources")
      .then(response => this.setState({ newsSrc: response.data.sources }));
  }

  renderNews() {
    return this.state.newsSrc.map(news => (
      <Card key={news.name}>
        <CardItem>
          <Body>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri:
                  "https://icons.better-idea.org/icon?url=" +
                  news.url +
                  "&size=70..120..200"
              }}
            />
          </Body>
          <Body>
            <Text style={styles.textStyle}>{news.name}</Text>
            <Text key={news.category}>#{news.category}</Text>
          </Body>
          <Body>
            <Right>
              <Button
                transparent
                onPress={() => {
                  this.onReadMore(news.id);
                }}
              >
                <Icon name="arrow-forward" />
              </Button>
            </Right>
          </Body>
        </CardItem>
      </Card>
    ));
  }
  render() {
    console.log(this.state);
    return (
      <Container>
        <Content>
          <View>{this.renderNews()}</View>
        </Content>
      </Container>
    );
  }
}
const styles = {
  thumbnailStyle: {
    height: 80,
    width: 80,
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};
export default NewsList;
