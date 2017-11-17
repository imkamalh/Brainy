import React, { Component } from "react";
import { View, Text, Image, WebView, TouchableOpacity } from "react-native";
import {
  Card,
  Body,
  CardItem,
  Icon,
  Button,
  Content,
  Container,
  Header,
  Item,
  Input
} from "native-base";
import axios from "axios";
import About from "./About";
import NewsList from "./NewsList";

class NewsDetail extends Component {
  onWebView = web => {
    this.props.navigation.navigate("Web", { web });
  };
  state = { newsDetail: [], search: [] };

  componentWillMount() {
    const { newsId } = this.props.navigation.state.params;
    axios
      .get(
        "https://newsapi.org/v1/articles?source=" +
          newsId +
          "&sortBy=top&apiKey=c4871b5de02f40a6b3d580183df70d05"
      )
      .then(response =>
        this.setState({
          newsDetail: response.data.articles,
          search: response.data.articles
        })
      );
  }

  handleSearch(text) {
    let temp = [];
    let iterate = [];
    iterate = this.state.newsDetail;
    if (text != null && text.length > 0) {
      for (i = 0; i < iterate.length; i++) {
        if (iterate[i].title.includes(text)) {
          temp.push(iterate[i]);
        }
      }

      if (text.length == 0) {
        temp = iterate;
      }

      console.log(text);
      this.setState({ search: temp });
    }
  }
  renderDetail() {
    return this.state.search.map(news => (
      <TouchableOpacity
        key={news.title}
        onPress={() => {
          this.onWebView(news.url);
        }}
      >
        <Card>
          <CardItem>
            <Body>
              <Image
                style={styles.thumbnailStyle}
                source={{
                  uri: news.urlToImage
                }}
              />
            </Body>
            <Body>
              <Text style={styles.textStyle}>{news.title}</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={text => this.handleSearch(text)}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <View>{this.renderDetail()}</View>
        </Content>
      </Container>
    );
  }
}
const styles = {
  thumbnailStyle: {
    height: 100,
    width: 150,
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};
export default NewsDetail;
