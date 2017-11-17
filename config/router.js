import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import NewsList from "../scenes/NewsList";
import NewsDetail from "../scenes/NewsDetail";
import About from "../scenes/About";
import WebView from "../scenes/WebView";

export const FeedStack = StackNavigator({
  News: {
    screen: NewsList
  },
  Details: {
    screen: NewsDetail
  },
  Web: {
    screen: WebView
  }
});

export const Tabs = TabNavigator({
  News: {
    screen: FeedStack
  },
  About: {
    screen: About
  }
});
