import React, { Component } from "react";
import { WebView } from "react-native";

class myWeb extends Component {
  render() {
    const { web } = this.props.navigation.state.params;
    return <WebView source={{ uri: web }} style={{ marginTop: 20 }} />;
  }
}
export default myWeb;
