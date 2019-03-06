import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Body</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98fb98',
  },
});

export default Body;