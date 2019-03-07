import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Tarea from './Tarea';

class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.tareas}
                    // renderItem={ (elemento) => {
                    // renderItem={ ({item}) => <Text>{item.texto}</Text>}
                    renderItem={ ({item}) => <Tarea item={item} eliminar={this.props.eliminar} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98fb98',
  },
});

export default Body;