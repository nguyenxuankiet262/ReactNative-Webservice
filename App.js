/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    }
  }

  componentDidMount() {
    {/* POST API
    const url = 'http://192.168.1.4/phuclong_rn/getdrink.php'
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/js on',
      },
      body: JSON.stringify({
        menuid: 1,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });
 */}
    {/*GET API */ }
    const url = 'http://192.168.1.4/phuclong_rn/getcategory.php'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item.Name}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: item.Image }}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
