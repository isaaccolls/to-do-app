import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Tarea from './Tarea';

class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                { this.props.cargando &&
                    <ActivityIndicator
                        size='large'
                        color='#640064'
                    />
                }
                { !this.props.cargando &&
                    <FlatList
                        data={this.props.tareas}
                        // renderItem={ (elemento) => {
                        // renderItem={ ({item}) => <Text>{item.texto}</Text>}
                        renderItem={ ({item}) => <Tarea item={item} eliminar={this.props.eliminar} />}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#ffe7d3',
  },
});

export default Body;